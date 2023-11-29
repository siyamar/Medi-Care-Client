import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CampCart from "../../components/CampCart/CampCart";

const AvailableCamps = () => {
    const camps = useLoaderData()
    const [sorted, setSorted] = useState("All");
    const [searchText, setSearchText] = useState("");

    const filteredCamps = camps
    .filter((camp) =>
    camp.campName.toLowerCase().includes(searchText.toLowerCase())||
    camp.scheduledDateTime.toLowerCase().includes(searchText.toLowerCase())||
    camp.venueLocation.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
        switch (sorted) {
          case "Most Registered":
            return b.participat - a.participat;
          case "Alphabetical Order":
            return a.campName.localeCompare(b.campName);
          default:
            return 0;
        }
      });
    return (
        <div className="pt-24">
            <div className="my-6 flex justify-start gap-5">
        <select
          value={sorted}
          onChange={(e) => setSorted(e.target.value)}
          className="select select-success w-full max-w-xs"
        >
          <option value="All">
            Sort by Field
          </option>
          <option value="Most Registered">Most Registered</option>
          <option value="Alphabetical Order">Alphabetical Order</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered input-secondary w-full max-w-xs"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 my-8">
        {filteredCamps.map((camp) => (
          <CampCart camp={camp} key={camp._id}></CampCart>
        ))}
      </div>
        </div>
    );
};

export default AvailableCamps;