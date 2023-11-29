import AboutUs from "../AboutUs/AboutUs";
import PeopleAsk from "../PeopleAsk/PeopleAsk";
import PopularCamps from "../PopularCamps/PopularCamps";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";
import UpcomingCamps from "../UpcomingCamps/UpcomingCamps";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularCamps></PopularCamps> 
            <Testimonials></Testimonials>
            <AboutUs></AboutUs>  
            <UpcomingCamps></UpcomingCamps> 
            <PeopleAsk></PeopleAsk>
        </div>
    );
};

export default Home;