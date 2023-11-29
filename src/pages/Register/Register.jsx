import { Link, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const { createUser, googleSignIn } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);

    //  reset error
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer!!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your Password should at least one upper case characters!"
      );
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      setRegisterError("Your Password should at least one special characters!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success!",
          text: "Sign Up Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        Swal.fire({
          title: "Error!",
          text: { registerError },
          icon: "error",
          confirmButtonText: "X",
        });
      });
  };
  const handleGoogleSignUp = () => {
    googleSignIn()
    .then((result)=>{
      console.log(result.user)
      navigate("/");
    })
    .catch();

  };
  return (
    <div className="max-w-6xl mx-auto">
      {/* <Navbar></Navbar> */}
      <div className="mt-32">
        <h2 className="text-3xl font-extrabold mt-10 text-center">
          Please Register
        </h2>
        <form
          onSubmit={handleRegister}
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
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-black text-white hover:bg-black">
              Register
            </button>
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
        {registerError && (
          <p className="text-red-700 text-center mt-4">{registerError}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
