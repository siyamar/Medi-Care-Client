import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/Variants/variants";
import { useEffect, useState } from "react";
import axios from "axios";

const CampCart = ({ camp }) => {
    const {_id, campName, image, campFees, scheduledDateTime, venueLocation, specializedServices, healthcareProfessionals, targetAudience, description, participat}= camp;

  return (
    <div>
      <Card
        className="max-w-full h-[700px]"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={image}
        
      >
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {campName}
          </h5>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Camp Fee: ${campFees}
          </h5>
          <p className="font-bold text-gray-700 dark:text-gray-400">
            Date: {scheduledDateTime}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Location:</span>  {venueLocation}.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Services:</span>  {specializedServices}.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Healthcare Professionals:</span> {healthcareProfessionals}.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Target Audience:</span> {targetAudience}.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <span className="font-bold">Participat:</span> {participat}
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex gap-2 mt-4"
        >
          <Link to={`/camp-details/${_id}`}>
            <Button size="lg" gradientDuoTone="pinkToOrange">
              Details
            </Button>
          </Link>
          {/* <Button
            // onClick={handleAddWishlist}
            size="lg"
            outline
            gradientDuoTone="pinkToOrange"
            className={`border-none`}
            // disabled={!userEmail}
          >
            Add to Wishlist
          </Button> */}
        </motion.div>
      </Card>
    </div>
  );
};

export default CampCart;
