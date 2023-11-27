import { Link } from "react-router-dom";
import error from "../../assets/404/404.gif"

const Error = () => {
    return (
        <div className='text-center relative'>
            <img className="md:top-[20px] md:left-[300px] top-[70px] left-[0px] absolute" src={error} alt="" />
            <Link to={'/'}><button className="btn btn-error text-xl font-bold top-[350px] left-[170px]  md:top-[550px] md:left-[700px] absolute">Go Back</button></Link>
        </div>
    );
};

export default Error