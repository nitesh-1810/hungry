import React from "react";
import { IMG_CDN_URL } from "../config";

const FoodItem = ({ name, description, price, imageId }) => {
  //   const { name, cuisines, avgRating, sla, cloudinaryImageId } = restrauntList; // object destructuring
  return (
    <div className="card">
      <img alt="restaurant_img" src={IMG_CDN_URL + imageId} />
      <h4>{name}</h4>
      <h5>{description}</h5>
      <h5>{price / 100} : Rupees</h5>
    </div>
  );
};

export default FoodItem;
