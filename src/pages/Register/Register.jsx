import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const Register = () => {
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate();
  const { createUser, googleSignIn, updateUserProfile } = useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name)
        .then(() => {
          // create user entry in the database.
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created Succesfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {  
          console.log(error);
          Swal.fire({
          title: "Error!",
          text: "error",
          icon: "error",
          confirmButtonText: "X",
        });
        });
    });
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
    .then(result=>{
      console.log(result.user)
      const userInfo ={
          email: result.user?.email,
          name: result.user?.displayName,
          image: result.user?.photoURL
      }
      axiosPublic.post('/users', userInfo)
      .then(res=>{
          console.log(res.data)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created Succesfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/')
      })
  })
    .catch();

  };
  return (
    <>
    <Helmet>
        <title>MediCare | Register</title>
      </Helmet>
    <div className="max-w-6xl mx-auto">
      {/* <Navbar></Navbar> */}
      <div className="mt-32">
        <h2 className="text-3xl font-extrabold mt-10 text-center">
          Please Register
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
               {...register("name", { required: true })}
              className="input input-bordered"
              required
            />
            {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="input input-bordered"
              required
            />
            {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&+*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
              className="input input-bordered"
              required
            />
             {errors.password?.type === "required" && (
                  <span className="text-red-600">Password is required</span>
                )}
                {errors.password?.type === "minLenngth" && (
                  <span className="text-red-600">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-600">
                    Password must be less then 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Password must have 1 uppercase, 1 lowercase, 1 number and 1
                    special character
                  </span>
                )}
          </div>
          <div className="form-control mt-6">
                <input
                  className="btn bg-black text-white hover:bg-black"
                  type="submit"
                  value="Register"
                />
          </div>
        </form>
        <div className="flex justify-center items-center gap-6">
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link className="text-blue-500" to={"/login"}>
            Login
          </Link>
        </p>
        <p className="text-center mt-4">
            SignUp With Google{" "}
            <button onClick={handleGoogleSignUp} className="btn btn-secondary">
              Google
            </button>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
