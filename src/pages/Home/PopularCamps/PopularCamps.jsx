import CampCart from "../../../components/CampCart/CampCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMedicalCamps from "../../../hooks/useMedicalCamps";

const PopularCamps = () => {
  const [medicalCamps] = useMedicalCamps();

  medicalCamps.sort((a, b) => b.participat - a.participat);
  const popularCamps = medicalCamps.slice(0, 6);

  
  return (
    <div className="my-10">
      <SectionTitle heading={"Popular Medical Camps"}></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {popularCamps.map((popularCamp) => (
          <CampCart camp={popularCamp} key={popularCamp._id}></CampCart>
        ))}
      </div>
    </div>
  );
};

export default PopularCamps;
