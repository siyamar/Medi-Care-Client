import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import ContuctUs from "../pages/ContuctUs/ContuctUs";
import Error from "../pages/Error/Error";
import CampDetails from "../components/CampDetails/CampDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashbord from "../layout/Dashbord";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import OrganizerRoute from "./OrganizerRoute";
import ProfessionalRoute from "./ProfessionalRoute";
import OrganizerHome from "../pages/Dashboard/Organizer/OrganizerHome/OrganizerHome";
import AddACamp from "../pages/Dashboard/Organizer/AddCamp/AddCamp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'availableCamps',
            element: <AvailableCamps></AvailableCamps>,
            loader: ()=> fetch('http://localhost:5000/medicalCamps')
        },
        {
            path: 'contactUs',
            element: <ContuctUs></ContuctUs>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
          path: "camp-details/:id",
          element: <CampDetails></CampDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/medicalCamps/${params.id}`),
        },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashbord></Dashbord>,
      children:[
        //normal user routes
        {
          path: 'userHome',
          element: <UserHome></UserHome>,
          loader: ()=> fetch('http://localhost:5000/users')
        },
        // {
        //   path: 'cart',
        //   element: <Cart></Cart>
        // },
        // //admin only routes
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        // {
        //   path: 'addItems',
        //   element: <AdminRoute><AddItems></AddItems></AdminRoute>
        // },
        // {
        //   path: 'manageItems',
        //   element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        // },
        // {
        //   path: 'updateItem/:id',
        //   element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        //   loader: ({params})=> fetch(`https://bistro-boss-server-kappa-lovat.vercel.app/menu/${params.id}`)
        // },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
         //organizer only routes
        {
          path: 'organizerHome',
          element: <OrganizerRoute><OrganizerHome></OrganizerHome></OrganizerRoute>,
          loader: ()=> fetch('http://localhost:5000/users')
        },
        {
            path: 'add-a-camp',
            element: <OrganizerRoute><AddACamp></AddACamp></OrganizerRoute>
        },
        {
            path: 'manage-camps',
            element: <OrganizerRoute></OrganizerRoute>
        },
         //professional only routes
        {
          path: 'professionalHome',
          element: <ProfessionalRoute></ProfessionalRoute>,
          loader: ()=> fetch('http://localhost:5000/users')
        },

      ]
    },
  ]);

export default router;