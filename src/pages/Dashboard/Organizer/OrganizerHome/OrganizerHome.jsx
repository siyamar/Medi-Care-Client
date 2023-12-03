import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Avatar, Button, Modal } from 'flowbite-react';

const OrganizerHome = () => {
    const { user } = useAuth();
  // const [isAdmin] = useAdmin();
  const users = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const currentUser = users.find((userdb) => userdb?.email === user?.email);

  const onSubmit = async (data) => {
    console.log(data);
    const updateUser = {
      name: data.name || currentUser.name,
      image: data.photoUrl,
      age: data.age,
      phone: data.phone,
      address: data.address,
    };
    const update = await axiosPublic.patch(`/users/${currentUser._id}`, updateUser);
      console.log(update.data);
    if (update.data.modifiedCount) {
      //show success popup
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Profile Update SuccessFully`,
        showConfirmButton: false,
        timer: 1500,
      });
      setOpenModal(false)
    }
  };
    return (
        <>
  <SectionTitle heading={'Organizer Profile'}></SectionTitle>
    <div className="my-16 text-center space-y-4">
      <div>
        <Avatar
          img={currentUser?.image}
          className="mr-2"
          status="online"
          rounded
          size={"lg"}
          alt="Profile"
        />
      </div>

      <h2 className="text-3xl">
        Hi, Welcome <span className="font-semibold">{currentUser?.name}</span>
      </h2>
      <div className="space-y-2">
      <p> <span className="font-semibold">Phone: </span> {currentUser?.phone}</p>
      <p><span className="font-semibold">Address: </span>{currentUser?.address}</p>
      <p><span className="font-semibold">Age: </span>{currentUser?.age}</p>
      </div>

      <div className="flex justify-center">
        <Button
          onClick={() => setOpenModal(true)}
          size="md"
          gradientDuoTone="pinkToOrange"
        >
          Update Profile
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
              <div>
                <Avatar
                  img={currentUser?.image}
                  className="mt-2"
                  status="online"
                  rounded
                  size={"lg"}
                  alt="Profile"
                />
              </div>
              <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
                Update Profile
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="form-control w-full mb-2">
                  <label className="label">
                    <span className="label-text text-black">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    defaultValue={currentUser?.name}
                    {...register("name")}
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
                      defaultValue={currentUser?.age}
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
                      defaultValue={currentUser?.phone}
                      {...register("phone", { required: true })}
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
               
                {/* Address & photo */}
                <div className="flex gap-4">
                <div className="form-control w-full mb-2">
                  <label className="label">
                    <span className="label-text">Address*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    defaultValue={currentUser?.address}
                    {...register("address", { required: true })}
                    className="input input-bordered w-full"
                  />
                </div>
                <div className="form-control w-full mb-2">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo Url"
                    defaultValue={currentUser?.image}
                    {...register("photoUrl")}
                    className="input input-bordered w-full"
                  />
                </div>
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
    </>
    );
};

export default OrganizerHome;