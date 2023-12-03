import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading}= useAuth()
    const locatin = useLocation()

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to={"/login"} state={{from: locatin}} replace></Navigate>
};

export default PrivateRoute;