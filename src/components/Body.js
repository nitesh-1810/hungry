import React, { useState } from "react";
import RestrauntCard from "./RestrauntCard";
import { restrauntList } from "../config";
import Search from "./Search";

const Body = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(restrauntList);
  return (
    <>
      <Search setRestaurantDetails={setRestaurantDetails} />
      <div className="restraunt-list">
        {restaurantDetails.map((item) => (
          <RestrauntCard {...item.info} key={item.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
