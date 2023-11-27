import banner from "../../../assets/image/banner1.png";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../../components/Variants/variants";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full h-[650px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner} className="w-full rounded-xl" />
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="">
            <div className="max-w-lg absolute top-48 left-20">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <h1
                  className="mb-5 text-5xl font-bold text-white"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  Better Life Needs <br /> Better Care
                </h1>
                <p
                  className="mb-5 text-white"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  Get into a low carb lifestyle with an <br /> easy-to-follow
                  meal plan
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-2 mt-10"
              >
                <Link to={"/login"}>
                  {/* <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600">
              Login
            </button> */}
                  <Button size="xl" gradientDuoTone="pinkToOrange">
                    Login
                  </Button>
                </Link>
                {/* <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600 mr-2">
            Details
          </button> */}
                <Button
                  size="xl"
                  outline
                  gradientDuoTone="pinkToOrange"
                  className="border-none"
                >
                  Details
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/smiley-kids-posing-together-class_23-2148673968.jpg"
            className="w-full rounded-xl"
          />
          <div className="hero-overlay absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]"></div>
          <div className="">
            <div className="max-w-lg absolute top-48 left-20 ">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <h1
                  className="mb-5 text-5xl font-bold text-white"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                    Children's Health <br /> Triumph
                  
                </h1>
                <p
                  className="mb-5 text-white"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  Nurturing the health of our youngest members, ensuring a brighter and healthier future for every child.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-2 mt-10"
              >
                <Link to={"/login"}>
                  {/* <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600">
              Login
            </button> */}
                  <Button size="xl" gradientDuoTone="pinkToOrange">
                    Login
                  </Button>
                </Link>
                {/* <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600 mr-2">
            Details
          </button> */}
                <Button
                  size="xl"
                  outline
                  gradientDuoTone="pinkToOrange"
                  className="border-none"
                >
                  Details
                </Button>
              </motion.div>
            </div>
          </div>
          {/* <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-12 w-1/2">
              <h2 className="text-6xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div> */}

          
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/group-people-meeting-with-doctor-sign-that-says-doctor_890746-563.jpg?w=900"
            className="w-full rounded-xl"
          />
          <div className="">
            <div className="max-w-lg absolute top-48 left-20">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <h1
                  className="mb-5 text-5xl font-bold text-white"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  Healing Hearts, <br /> Saving Lives
                </h1>
                <p
                  className="mb-5 text-white"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  Life-saving interventions and compassionate care brought hope and healing to those in critical need.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-2 mt-10"
              >
                <Link to={"/login"}>
                  {/* <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600">
              Login
            </button> */}
                  <Button size="xl" gradientDuoTone="pinkToOrange">
                    Login
                  </Button>
                </Link>
                {/* <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600 mr-2">
            Details
          </button> */}
                <Button
                  size="xl"
                  outline
                  gradientDuoTone="pinkToOrange"
                  className="border-none"
                >
                  Details
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/different-people-doing-volunteer-work-with-food_23-2149012166.jpg?w=740&t=st=1701062837~exp=1701063437~hmac=cf740035883486d3ef4ccd4115241958da7e30b730ae5d29487139a76f3a8b9b"
            className="w-full rounded-xl"
          />
          <div className="hero-overlay absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]"></div>
          <div className="">
            <div className="max-w-lg absolute top-48 left-20">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <h1
                  className="mb-5 text-5xl font-bold text-white"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  Empowering <br /> Women's Health
                </h1>
                <p
                  className="mb-5 text-white"
                  data-aos="fade-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  Providing vital health services, education, and screenings, empowering women for a healthier future.
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-2 mt-10"
              >
                <Link to={"/login"}>
                  {/* <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600">
              Login
            </button> */}
                  <Button size="xl" gradientDuoTone="pinkToOrange">
                    Login
                  </Button>
                </Link>
                {/* <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600 mr-2">
            Details
          </button> */}
                <Button
                  size="xl"
                  outline
                  gradientDuoTone="pinkToOrange"
                  className="border-none"
                >
                  Details
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
