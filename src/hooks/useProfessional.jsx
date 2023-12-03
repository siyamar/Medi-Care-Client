import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useProfessional = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const {data: isProfessional, isPending: isProfessionalLoading} = useQuery({
     queryKey: [user?.email, 'isProfessional'],
     queryFn: async()=>{
         const res = await axiosPublic.get(`/users/professional/${user.email}`)
         console.log(res.data)
         return res.data?.admin;
     }
    })
    return [isProfessional, isProfessionalLoading]
};

export default useProfessional;