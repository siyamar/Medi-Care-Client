import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://ass-12-medi-connect-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;