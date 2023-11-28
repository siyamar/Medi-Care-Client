import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useMedicalCamps = () => {
    const axiosPublic = useAxiosPublic();

    const {data: medicalCamps=[], isPending: loading, refetch} = useQuery({
        queryKey: ['medicalCamps'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/medicalCamps');
            return res.data;
        }
    })
    return [medicalCamps, loading, refetch]
    
};

export default useMedicalCamps;