import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Search from "./Search";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { FETCH_RESTAURANT_URL } from "../config";

const Body = () => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [filterRestaurantList, setfilterRestaurantList] = useState([]);

  // Extract this from here and make custom hook and then off load it as custom hook.

  useEffect(() => {
    // error handling pending
    restrauntData();
  }, []);

  const restrauntData = async () => {
    // error handling pending
    const restraunt = await fetch(FETCH_RESTAURANT_URL);
    const data1 = await restraunt.json();
    console.log(
      data1?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    const cardData =
      data1?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantDetails(cardData);
    setfilterRestaurantList(cardData);
  };

  //early return (not render component)
  // if(!restaurantDetails) return null; // When API breaks and data not loaded

  // Show restaurant not found , when search restaurant not available

  const isOnline = useOnline();

  if (!isOnline) return <h1> Chech internet connection </h1>;

  return (
    <div className="body">
      <Search
        setRestaurantDetails={setRestaurantDetails}
        filterRestaurantList={filterRestaurantList}
      />
      {restaurantDetails?.length === 0 || !restaurantDetails ? (
        <div className="restraunt-list">
          <Shimmer />
        </div>
      ) : (
        <div className="restraunt-list">
          {restaurantDetails?.map((item) => (
            <Link to={`/restaurant/${item.info.id}`} key={item.info.id}>
              <RestrauntCard {...item.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
