// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useCamp =() =>{
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const {data: camps=[], isPending: loading, refetch} = useQuery({
        queryKey: ['camps', user?.email],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/medicalCamps?email=${user.email}`);
            return res.data;
        }
    })

    return [camps, loading, refetch]
}   

export default useCamp;