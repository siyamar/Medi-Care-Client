import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import { axiosSecure } from "./useMenu/useAxiosSecure";
// import useAuth from "./useAuth/useAuth";

const useCart = () => {
    // tanStack query
    // const {user} = useAuth();
    const {refetch, data: cart=[]}= useQuery({
        queryKey: ['cart'],
        queryFn: async()=>{
            const res = await useAxiosPublic.get(`/registered?email=${user.email}`)
            return res.data;
        }
    })
    return[cart, refetch]
};

export default useCart;