import { Link } from "react-router-dom";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useCamp from "../../../../hooks/useCamp";
import { FaEdit, FaTrashAlt, FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAuth from "../../../../hooks/useAuth";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ManageCamps = () => {
  const { user } = useAuth();
  const [camps, , refetch] = useCamp();
//   const {
//     campName,
//     campFees,
//     scheduledDateTime,
//     venueLocation,
//     specializedServices,
//     healthcareProfessionals,
//     targetAudience,
//     description,
//     image,
//   } = camps;
  const axiosPublic = useAxiosPublic();
  const filterCamps = camps.filter((item) => item?.email === user?.email);
  console.log(filterCamps);
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/medicalCamps/${item._id}`);
        // console.log(res.data)
        if (res.data.deletedCount > 0) {
          //refetch to update the ui
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.campName} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  const onSubmit = async (data) => {
    console.log(data);
    const updateCamps = {
      campName: data.campName,
      campFees: data.campFees,
      scheduledDateTime: data.scheduledDateTime,
      venueLocation: data.venueLocation,
      specializedServices: data.specializedServices,
      healthcareProfessionals: data.healthcareProfessionals,
      targetAudience: data.targetAudience,
      description: data.description,
    };
    const update = await axiosPublic.patch(`/medicalCamps/${data.id}`, updateCamps);
    console.log(update.data);

    if (update.data.modifiedCount) 
    {
    //   show success popup
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} Updated to the Camp`,
        showConfirmButton: false,
        timer: 1500,
      });
      setOpenModal(false);
    }
  };
  return (
    <div>
      <SectionTitle heading={"Manage Camps"}></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Camp Name</th>
                <th>Camp Fee</th>
                <th>Date</th>
                <th>Location</th>
                <th>Specialized Services</th>
                <th>Professionals</th>
                <th>Target Audience</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {filterCamps.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.campName}</td>
                  <td className="text-right">${item.campFees}</td>
                  <td>{item.scheduledDateTime}</td>
                  <td>{item.venueLocation}</td>
                  <td>{item.specializedServices}</td>
                  <td>{item.healthcareProfessionals}</td>
                  <td>{item.targetAudience}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      onClick={() => setOpenModal(true)}
                      className="btn bg-orange-500 btn-md"
                    >
                      <FaEdit className="text-white"></FaEdit>
                    </button>
                    <Modal
                      show={openModal}
                      size="2xl"
                      popup
                      onClose={() => setOpenModal(false) }
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="space-y-6">
                          <img
                            className="w-full h-[250px]"
                            src={item.image}
                            alt=""
                          />
                          <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full my-3">
                              <label className="label">
                                <span className="label-text">Camp Name*</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Camp Name"
                                defaultValue={item.campName}
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
                                  defaultValue={item.campFees}
                                  {...register("campFees", { required: true })}
                                  className="input input-bordered w-full"
                                />
                              </div>
                              {/* Scheduled Date and Time */}
                              <div className="form-control w-full my-3">
                                <label className="label">
                                  <span className="label-text">
                                    Scheduled Date and Time*
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  placeholder="Date and Time"
                                  defaultValue={item.scheduledDateTime}
                                  {...register("scheduledDateTime", {
                                    required: true,
                                  })}
                                  className="input input-bordered w-full"
                                />
                              </div>
                            </div>
                            <div className="flex gap-6">
                              {/* Venue Location */}
                              <div className="form-control w-full my-3">
                                <label className="label">
                                  <span className="label-text">
                                    Venue Location*
                                  </span>
                                </label>
                                <input
                                  className="input input-bordered w-full"
                                  placeholder="Venue Location"
                                  defaultValue={item.venueLocation}
                                  {...register("venueLocation")}
                                ></input>
                              </div>
                              {/* Specialized Services */}
                              <div className="form-control w-full my-3">
                                <label className="label">
                                  <span className="label-text">
                                    Specialized Services*
                                  </span>
                                </label>
                                <input
                                  className="input input-bordered w-full"
                                  placeholder="Specialized Services"
                                  defaultValue={item.specializedServices}
                                  {...register("specializedServices")}
                                ></input>
                              </div>
                            </div>
                            <div className="flex gap-6">
                              {/* Healthcare Professionals */}
                              <div className="form-control w-full my-3">
                                <label className="label">
                                  <span className="label-text">
                                    Healthcare Professionals*
                                  </span>
                                </label>
                                <input
                                  className="input input-bordered w-full"
                                  placeholder="Healthcare Professionals"
                                  defaultValue={item.healthcareProfessionals}
                                  {...register("healthcareProfessionals")}
                                ></input>
                              </div>
                              {/* Target Audience */}
                              <div className="form-control w-full my-3">
                                <label className="label">
                                  <span className="label-text">
                                    Target Audience*
                                  </span>
                                </label>
                                <input
                                  className="input input-bordered w-full"
                                  placeholder="Target Audience"
                                  defaultValue={item.targetAudience}
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
                                defaultValue={item.description}
                                {...register("description")}
                              ></textarea>
                            </div>
                            {/* id */}
                            <div className="form-control w-full my-3">
                                <label className="label">
                                  <span className="label-text">
                                    Id
                                  </span>
                                </label>
                                <input
                                  className="input input-bordered w-full"
                                  placeholder={item._id}
                                  defaultValue={item._id}
                                  {...register("id")}
                                  readOnly
                                ></input>
                              </div>
                            <div className="form-control w-full my-6">
                              <input
                                {...register("image")}
                                type="file"
                                className="file-input w-full max-w-xs"
                              />
                            </div>
                            <div className="flex justify-center my-8">
                    <input
                      className="btn btn-success text-white"
                      type="submit"
                      value="Update Camp"
                    />
                  </div>
                          </form>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCamps;
