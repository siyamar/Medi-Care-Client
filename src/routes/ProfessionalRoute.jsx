import useAuth from '../hooks/useAuth';
import useProfessional from '../hooks/useProfessional';
import { Navigate, useLocation } from 'react-router-dom';

const ProfessionalRoute = ({children}) => {
    const {user, loading}= useAuth();
    const [isProfessional, isProfessionalLoading] = useProfessional();
    const locatin = useLocation()

    if(loading || isProfessionalLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isProfessional){
        return children
    }
    return <Navigate to={"/login"} state={{from: locatin}} replace></Navigate>
};

export default ProfessionalRoute;