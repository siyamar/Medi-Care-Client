import AboutUs from "../AboutUs/AboutUs";
import PopularCamps from "../PopularCamps/PopularCamps";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularCamps></PopularCamps> 
            <Testimonials></Testimonials>
            <AboutUs></AboutUs>   
        </div>
    );
};

export default Home;