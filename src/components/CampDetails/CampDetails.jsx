import { Button } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const CampDetails = () => {
    const camp = useLoaderData();
    const {_id, campName, image, campFees, scheduledDateTime, venueLocation, specializedServices, healthcareProfessionals, targetAudience, description}= camp;
    return (
        <div>
            <div className="mb-10">
          <img className="w-full max-h-[600px] mx-auto" src={image} alt="" />
          <div className="space-y-5">
            <h3 className="text-3xl bg-opacity-20 p-6 bg-black">{campName}</h3>
            <p className="text-xl">Camp Fee: ${campFees}</p>
            <p><span className="font-bold">Already Participant: </span>{}</p>
            <p><span className="font-bold">Date: </span> {scheduledDateTime}</p>
            <p><span className="font-bold">Location: </span>{venueLocation}</p>
            <p><span className="font-bold">Audience: </span>{targetAudience}</p>
            <p>{description}</p>
            <Button gradientMonochrome="info">Join Camp</Button>
           
         </div>     
          </div>
        </div>
    );
};

export default CampDetails;