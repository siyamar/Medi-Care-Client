import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useOrganizer from "../hooks/useOrganizer";
import useProfessional from "../hooks/useProfessional";
// import useAdmin from "../hooks/useAdmin";

const Dashbord = () => {
    // const [cart] = useCart();

    //TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
    const [isOrganizer] = useOrganizer();
    const [isProfessional] = useProfessional();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-700">
                <ul className="menu">
                   {
                    isAdmin ?
                    <>
                     <li><NavLink to={'/dashboard/adminHome'}><FaHome></FaHome>Admin Home</NavLink></li>
                    <li><NavLink to={'/dashboard/addItems'}><FaUtensils></FaUtensils> Add Camps</NavLink></li>
                    <li><NavLink to={'/dashboard/manageItems'}><FaList></FaList>Manage Items</NavLink></li>
                    <li><NavLink to={'/dashboard/bookings'}><FaBook></FaBook>Manage Bookings</NavLink></li>
                    <li><NavLink to={'/dashboard/users'}><FaUsers></FaUsers> All Users</NavLink></li>
                    </> : isOrganizer?
                    <>
                    <li><NavLink to={'/dashboard/organizerHome'}><FaHome></FaHome>Organizer Home</NavLink></li>
                   <li><NavLink to={'/dashboard/addItems'}><FaUtensils></FaUtensils> Add Camps</NavLink></li>
                   <li><NavLink to={'/dashboard/manageItems'}><FaList></FaList>Manage Items</NavLink></li>
                   <li><NavLink to={'/dashboard/bookings'}><FaBook></FaBook>Manage Bookings</NavLink></li>
                   <li><NavLink to={'/dashboard/users'}><FaUsers></FaUsers> All Users</NavLink></li>
                   </> : isProfessional?
                    <>
                    <li><NavLink to={'/dashboard/professionalHome'}><FaHome></FaHome>Healthcare Professional Home</NavLink></li>
                   <li><NavLink to={'/dashboard/addItems'}><FaUtensils></FaUtensils> Add Camps</NavLink></li>
                   <li><NavLink to={'/dashboard/manageItems'}><FaList></FaList>Manage Items</NavLink></li>
                   <li><NavLink to={'/dashboard/bookings'}><FaBook></FaBook>Manage Bookings</NavLink></li>
                   <li><NavLink to={'/dashboard/users'}><FaUsers></FaUsers> All Users</NavLink></li>
                   </> :
                    <>
                    <li><NavLink to={'/dashboard/userHome'}><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar>Reservation</NavLink></li>
                    <li><NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    <li><NavLink to={'/dashboard/review'}><FaAd></FaAd>Add Review</NavLink></li>
                    <li><NavLink to={'/dashboard/bookings'}><FaList></FaList>My Bookings</NavLink></li>
                    </>
                   }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li><NavLink to={'/'}><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to={'/order/salad'}><FaSearch></FaSearch>Menu</NavLink></li>
                    <li><NavLink to={'/contactUs'}><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;