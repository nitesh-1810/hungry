import React, { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import Search from "./Search";

const Body = () => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [filterRestaurantList, setfilterRestaurantList] = useState([]);

  useEffect(() => {
    // error handling pending
    restrauntData();
  }, []);

  const restrauntData = async () => {
    // error handling pending
    const restraunt = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9154969&lng=77.6987092&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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

  return (
    <div className="body">
      <Search
        setRestaurantDetails={setRestaurantDetails}
        filterRestaurantList={filterRestaurantList}
      />
      {restaurantDetails?.length === 0 || !restaurantDetails ? (
        <h1>Wait.....Shimmer UI</h1>
      ) : (
        <div className="restraunt-list">
          {restaurantDetails?.map((item) => (
            <RestrauntCard {...item.info} key={item.info.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
