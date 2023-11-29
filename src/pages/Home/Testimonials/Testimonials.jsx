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

const Testimonials = () => {
  const [reviews, setreviews] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/reviews")
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
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-8 flex flex-col items-center">
            <Avatar className="mb-2" img={review.userImage} status="online" size="lg" rounded/>
              <h3 className="text-xl text-gray-400">{review.name}</h3>
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <p className="pt-8 pb-4 text-orange-700 text-2xl">{review.campName}</p>
              <p className="pb-8">{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
