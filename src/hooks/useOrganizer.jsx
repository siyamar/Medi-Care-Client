import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useOrganizer = () => {
    const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const {data: isOrganizer, isPending: isOrganizerLoading, refetch} = useQuery({
     queryKey: [user?.email, 'isOrganizer'],
     queryFn: async()=>{
         const res = await axiosPublic.get(`/users/organizer/${user.email}`)
         console.log(res.data)
         return res.data?.organizer;
     }
    })
    return [isOrganizer, isOrganizerLoading, refetch]
};

export default useOrganizer;