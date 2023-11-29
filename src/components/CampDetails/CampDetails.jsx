import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const CampDetails = () => {
  const axiosPublic = useAxiosPublic();
  const camp = useLoaderData();
  const {
    _id,
    campName,
    image,
    campFees,
    scheduledDateTime,
    venueLocation,
    specializedServices,
    healthcareProfessionals,
    targetAudience,
    description,
    participat,
  } = camp;
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const updateCamps = {
      campName: campName,
      image: image,
      campFees: campFees,
      scheduledDateTime: scheduledDateTime,
      venueLocation: venueLocation,
      specializedServices: specializedServices,
      healthcareProfessionals: healthcareProfessionals,
      targetAudience: targetAudience,
      description: description,
      participat: parseInt(participat+1)
    };
    const update = await axiosPublic.patch(`/medicalCamps/${_id}`, updateCamps);
      console.log(update.data);

    const regUser = {
      name: data.name,
      age: data.age,
      phone: data.phone,
      gender: data.gender,
      address: data.address,
      requirements: data.requirements,
      campFees: parseInt(data.campFees),
      campId: _id,
    };
    const registration = await axiosPublic.post("/registered", regUser);
    console.log(registration.data);
    if (registration.data.insertedId) {
      //show success popup
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} Registration to the Camp`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="mb-10">
        <img className="w-full max-h-[600px] mx-auto" src={image} alt="" />
        <div className="space-y-5">
          <h3 className="text-3xl bg-opacity-20 p-6 bg-black">{campName}</h3>
          <p className="text-xl">Camp Fee: ${campFees}</p>
          <p>
            <span className="font-bold">Already Participant: </span>
            {participat}
          </p>
          <p>
            <span className="font-bold">Date: </span> {scheduledDateTime}
          </p>
          <p>
            <span className="font-bold">Location: </span>
            {venueLocation}
          </p>
          <p>
            <span className="font-bold">Audience: </span>
            {targetAudience}
          </p>
          <p>{description}</p>
          <Button
            gradientMonochrome="success"
            onClick={() => setOpenModal(true)}
          >
            Join Camp
          </Button>
          <Modal
            show={openModal}
            size="xl"
            popup
            onClose={() => setOpenModal(false)}
          >
            <Modal.Header />
            <Modal.Body>
              <div className="space-y-6">
                <img className="w-full h-[250px]" src={image} alt="" />
                <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
                  Registration of {campName} Camp
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Name */}
                  <div className="form-control w-full mb-2">
                    <label className="label">
                      <span className="label-text text-black">Name*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      {...register("name", { required: true })}
                      className="input input-bordered w-full"
                    />
                  </div>

                  {/* age and phone */}
                  <div className="flex gap-4">
                    {/* age */}
                    <div className="form-control w-full mb-2">
                      <label className="label">
                        <span className="label-text">Age*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Age"
                        {...register("age", { required: true })}
                        className="input input-bordered w-full"
                      />
                    </div>
                    {/* Phone */}
                    <div className="form-control w-full mb-2">
                      <label className="label">
                        <span className="label-text">Phone*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Phone"
                        {...register("phone", { required: true })}
                        className="input input-bordered w-full"
                      />
                    </div>
                  </div>
                  {/* gender and fees */}
                  <div className="flex gap-4">
                    {/* Gender */}
                    <div className="form-control w-full mb-2">
                      <label className="label">
                        <span className="label-text">Gender*</span>
                      </label>
                      <select
                        defaultValue={"default"}
                        {...register("gender", { required: true })}
                        className="select select-bordered w-full"
                      >
                        <option disabled value="default">
                          Select Gender
                        </option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                        <option value={"other"}>Other</option>
                      </select>
                    </div>
                    {/* Camp Fees */}
                    <div className="form-control w-full mb-2">
                      <label className="label">
                        <span className="label-text">Camp Fees</span>
                      </label>
                      <input
                        type="number"
                        defaultValue={campFees}
                        {...register("campFees")}
                        className="input input-bordered w-full"
                        readOnly
                      />
                    </div>
                  </div>
                  {/* Address */}
                  <div className="form-control w-full mb-2">
                    <label className="label">
                      <span className="label-text">Address*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      {...register("address", { required: true })}
                      className="input input-bordered w-full"
                    />
                  </div>
                  {/* requirements */}
                  <div className="form-control w-full mb-2">
                    <label className="label">
                      <span className="label-text">Requirements</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Requirements"
                      {...register("requirements")}
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="flex justify-center pt-4">
                    <input
                      className="btn btn-primary btn-md"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default CampDetails;
