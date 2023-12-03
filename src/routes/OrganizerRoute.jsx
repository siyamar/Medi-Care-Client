import { Navigate, useLocation } from "react-router-dom";
import useOrganizer from "../hooks/useOrganizer";
import useAuth from "../hooks/useAuth";

const OrganizerRoute = ({children}) => {
    const {user, loading}= useAuth();
    const [isOrganizer, isOrganizerLoading] = useOrganizer();
    const locatin = useLocation()

    if(loading || isOrganizerLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isOrganizer){
        return children
    }
    return <Navigate to={"/login"} state={{from: locatin}} replace></Navigate>
};

export default OrganizerRoute;