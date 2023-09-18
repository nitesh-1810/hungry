import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item)); // dispatch an action which is addItem -> addItem('item/Banana example' as argument of action.payload parameter in cartSlice -> reducers -> addItem function (state, action.payload'item/Banana')).
  };

  return (
    <div className="restaurantMenu">
      <div>
        <h1>
          {" "}
          Restaurant id : {id} - matches : {restaurantInfo.id}
        </h1>
        {restaurantInfo !== "" && (
          <img
            style={{ width: 200, height: 200 }}
            src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId}
            alt="restaurantImg"
          />
        )}
        <h1>{restaurantInfo.name}</h1>
        <h2>{restaurantInfo.city}</h2>
      </div>

      <div>
        <h3>Menu</h3>
        {restaurantMenuItem?.map((item, index) => (
          <h4 key={item.card.info.id}>
            {index} : {item.card.info.name}{" "}
            <button onClick={() => addFoodItem(item)}>Add</button>
          </h4>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
