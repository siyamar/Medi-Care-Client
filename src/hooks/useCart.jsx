import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
// import { axiosSecure } from "./useMenu/useAxiosSecure";

const useCart = () => {
    // tanStack query
    const {user} = useAuth();
    const {refetch, data: cart=[]}= useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async()=>{
            const res = await useAxiosPublic.get(`/registered?email=${user.email}`)
            return res.data;
        }
    })
    return[cart, refetch]
};

export default useCart;