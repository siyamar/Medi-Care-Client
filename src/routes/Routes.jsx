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
            element: <AvailableCamps></AvailableCamps>
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
  ]);

export default router;