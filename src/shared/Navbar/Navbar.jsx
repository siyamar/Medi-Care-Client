import { Link } from "react-router-dom";
import logo from "../../assets/image/logo7.jpg"
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };
    const navOptions = (
        <>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/availableCamps"}>Available Camps</Link>
          </li>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          {
            // user ? 'true' : 'false'
            // user? condition? 'double true' : 'one true' : 'false'
          }
          {/* {
            user && isAdmin &&
            <li>
            <Link to={"/dashboard/adminHome"}>Dashboard</Link>
          </li>}
          {
            user && !isAdmin &&
            <li>
            <Link to={"/dashboard/userHome"}>Dashboard</Link>
          </li>} */}
          <li>
            <Link to={"/contactUs"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"register"}>Register</Link>
          </li>
          {/* <li>
            <Link to={"/dashboard/cart"}>
              <button className="btn">
                <FaShoppingCart className="mr-2"></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
          </li> */}
          {user ? (
            <>
              <button onClick={handleLogout} className="btn btn-ghost">
                Logout
              </button>
            </>
          ) : (
            <>
              <li>
                <Link to={"login"}>Login</Link>
              </li>
            </>
          )}
        </>
      );
    return (
        <div>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img className="w-14 rounded-full" src={logo} alt="" />
          <p className="btn btn-ghost text-2xl ml-2 pl-0"> MediCare</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Logout</a>
        </div>
      </div>
        </div>
    );
};

export default Navbar;