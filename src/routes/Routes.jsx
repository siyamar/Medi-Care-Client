import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AvailableCamps from "../pages/AvailableCamps/AvailableCamps";
import ContuctUs from "../pages/ContuctUs/ContuctUs";
import Error from "../pages/Error/Error";

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
      ]
    },
  ]);

export default router;