import React from "react";
import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({
  name,
  cuisines,
  avgRating,
  sla,
  cloudinaryImageId,
}) => {
  //   const { name, cuisines, avgRating, sla, cloudinaryImageId } = restrauntList; // object destructuring
  return (
    <div className="card">
      <img alt="Burger King" src={IMG_CDN_URL + cloudinaryImageId} />
      <h4>{name}</h4>
      <h3>{cuisines.join(", ")}</h3>
      <h5>{avgRating} stars</h5>
      <h5>Last Mile Travel : {sla.lastMileTravel}</h5>
    </div>
  );
};

export default RestrauntCard;
