import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Avatar } from "flowbite-react";
import { FaQuoteLeft, FaQuoteRight  } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setreviews] = useState([]);


  useEffect(() => {
    fetch("https://ass-12-medi-connect-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setreviews(data);
      });
  }, []);

  return (
    <section className="my-20 mx-28">
      <SectionTitle
        heading={"Tstimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper bg-yellow-300">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24  my-8 flex flex-col items-center">
            <Avatar className="mb-2" img={review.userImage} status="online" size="lg" rounded/>
              <h3 className="text-xl text-gray-500">{review.name}</h3>
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <FaQuoteLeft className="text-5xl mt-8"></FaQuoteLeft>
              <p className=" pb-4 text-orange-700 font-semibold text-2xl">{review.campName}</p>
              <p className="pb-8 font-semibold text-black">{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
