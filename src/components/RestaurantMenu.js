import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
  // Here we read a dynamic URL params
  const para = useParams();

  /*destructure obj on the fly
  const {id} = useParams();*/

  //destructure obj
  const { id } = para;
  console.log(para);

  const [restaurantInfo, setRestaurantInfo] = useState("");
  const [restaurantMenuItem, setRestaurantMenuItem] = useState(null);

  const restaurantDetail = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9154969&lng=77.6987092&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const detail = await data.json();
    console.log(
      detail.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards?.map(
        (item) => item.card.info.name
      )
    );
    setRestaurantInfo(detail?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenuItem(
      detail.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };

  useEffect(
    () => {
      restaurantDetail();
    }, // eslint-disable-next-line
    []
  );

  return (
    <div className="restaurantMenu">
      <div>
        <h1>
          {" "}
          Restaurant id : {id} - matches : {restaurantInfo.id}
        </h1>
        {restaurantInfo !== "" && (
          <img
            src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
            alt="restaurantImg"
          />
        )}
        <h1>{restaurantInfo.name}</h1>
        <h2>{restaurantInfo.city}</h2>
        <h3>{restaurantInfo.city}</h3>
      </div>
      <div>
        {restaurantMenuItem?.map((item, index) => (
          <h4 key={item.card.info.id}>
            {index} : {item.card.info.name}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
