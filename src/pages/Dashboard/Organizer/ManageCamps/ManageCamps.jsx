import { Link } from "react-router-dom";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useCamp from "../../../../hooks/useCamp";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAuth from "../../../../hooks/useAuth";

const ManageCamps = () => {
    const {user} = useAuth()
    const [camps,  , refetch] = useCamp();
  const axiosPublic = useAxiosPublic()
  const filterCamps = camps.filter(item=>item?.email === user?.email)
  console.log(filterCamps)
  const handleDeleteItem = (item) =>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async(result) => {
        if (result.isConfirmed) {
            const res = await axiosPublic.delete(`/menu/${item._id}`) 
            // console.log(res.data)
            if(res.data.deletedCount>0){
                //refetch to update the ui
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item.name} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }

        }
      });
  }
    return (
        <div>
      <SectionTitle
        heading={"Manage Camps"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                    #
                </th>
                <th>Camp Name</th>
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
              {
                filterCamps.map((item, index)=><tr key={item._id}>
                    <td>
                        {index+1}
                    </td>                
                    <td>
                     {item.campName}
                    </td>
                    <td className="text-right">${item.price}</td>
                    <td>
                   <Link to={`/dashboard/updateItem/${item._id}`}>
                   <button
                    //   onClick={() => handleMakeAdmin(user)}
                      className="btn bg-orange-500 btn-lg"
                    >
                      <FaEdit className="text-white"></FaEdit>
                    </button>
                   </Link>
                    </td>
                    <td>
                    <button
                    onClick={() => handleDeleteItem(item)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                    </td>
                  </tr>)
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
};

export default ManageCamps;