import { motion } from "framer-motion";
import { fadeIn } from "../../../components/Variants/variants";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AboutUs = () => {
  return (
    <div className="my-6">
      <SectionTitle heading={'About Us'}></SectionTitle>
      <div className="hero min-h-[400px]">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial= "hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}>
          <img
            src="https://img.freepik.com/free-photo/group-people-working-team_23-2147656716.jpg?w=740&t=st=1699549601~exp=1699550201~hmac=0a50924245c6d89ae498844e009aa2c55c2b594b755f64c76190bddbd2751d23"
            className="md:max-w-xl rounded-lg shadow-2xl"
          />
          </motion.div>
          <motion.div
          variants={fadeIn("left", 0.2)}
            initial= "hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.9}}>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Details</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
