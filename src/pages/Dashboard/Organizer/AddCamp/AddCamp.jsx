import Swal from "sweetalert2";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { FaUtensils } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddACamp = () => {
    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
//   const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      //now send the menu item data to the server with the image url
      const addCamp = {
        campName: data.campName,
        scheduledDateTime: data.scheduledDateTime,
        campFees: parseInt(data.campFees),
        venueLocation: data.venueLocation,
        specializedServices: data.specializedServices,
        healthcareProfessionals: data.healthcareProfessionals,
        targetAudience: data.targetAudience,
        description: data.description,
        image: res.data.data.display_url,
        organizerEmail: user.email
      };
      //
      const addACamp = await axiosPublic.post("/medicalCamps", addCamp);
      console.log(addACamp.data);
      if (addACamp.data.insertedId) {
        //show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.campName} is added to the Camps`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };
    return (
        <div>
      <SectionTitle
        heading={"Add a camp"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text">Camp Name*</span>
          </label>
          <input
            type="text"
            placeholder="Camp Name"
            {...register("campName", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-6">
          {/* Camp Fees */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text">Camp Fees*</span>
            </label>
            <input
            type="text"
            placeholder="Camp Fees"
            {...register("campFees", { required: true })}
            className="input input-bordered w-full"
          />
          </div>
          {/* Scheduled Date and Time */}
          <div className="form-control w-full my-3">
            <label className="label">
              <span className="label-text">Scheduled Date and Time*</span>
            </label>
            <input
              type="text"
              placeholder="Date and Time"
              {...register("scheduledDateTime", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-6">
        {/* Venue Location */}
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text">Venue Location*</span>
          </label>
          <input
            className="input input-bordered w-full"
            placeholder="Venue Location"
            {...register("venueLocation")}
          ></input>
        </div>
        {/* Specialized Services */}
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text">Specialized Services*</span>
          </label>
          <input
            className="input input-bordered w-full"
            placeholder="Specialized Services"
            {...register("specializedServices")}
          ></input>
        </div>
        </div>
        <div className="flex gap-6">
        {/* Healthcare Professionals */}
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text">Healthcare Professionals*</span>
          </label>
          <input
            className="input input-bordered w-full"
            placeholder="Healthcare Professionals"
            {...register("healthcareProfessionals")}
          ></input>
        </div>
        {/* Target Audience */}
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text">Target Audience*</span>
          </label>
          <input
           className="input input-bordered w-full"
            placeholder="Target Audience"
            {...register("targetAudience")}
          ></input>
        </div>
        </div>
        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Description"
            {...register("description")}
          ></textarea>
        </div>
        <div className="form-control w-full my-6">
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>
        <div className="flex justify-center my-8">
        <button className="btn btn-success text-white">
          Add Camp<FaUtensils className="text-lg"></FaUtensils>
        </button>
        </div>
      </form>
    </div>
    );
};

export default AddACamp;