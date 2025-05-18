import { useState } from "react";
import { initialTravelPlan } from "../../../data/places";
import PlaceTree from "./PlaceTree";

function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;
  return (
    <div>
      <h2>Places to visit 😍</h2>
      <ol>
        {planets.map((place) => (
          <PlaceTree place={place} key={place.id} />
        ))}
      </ol>
    </div>
  );
}

export default TravelPlan;
