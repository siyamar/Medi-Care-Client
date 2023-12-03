import { useQuery } from "@tanstack/react-query";
import { FaBook, FaSackDollar, FaUsers } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AdminHome = () => {
  const { user } = useAuth();
  // const axiosPublic = useAxiosPublic();

  // const { data: stats } = useQuery({
  //   queryKey: ["admin-stats"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get("/admin-stats");
  //     return res.data;
  //   },
  // });
  return (
    <div>
      <h2 className="text-3xl">
        <span>Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      {/* <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
                <FaSackDollar className="text-3xl"></FaSackDollar>
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">$2500</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-3xl"></FaBook>
          </div>
          <div className="stat-title">Menu Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">120</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div> */}
    </div>
  );
};

export default AdminHome;
