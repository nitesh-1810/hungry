import React, { useState } from "react";
import { restrauntList } from "../config";

const Search = ({ setRestaurantDetails }) => {
  const [searchInput, setSearchInput] = useState("");
  const [toggle, setToggle] = useState(false);

  const filterRestaurant = (searchInput, restrauntList) => {
    searchInput !== "" ? setToggle(!toggle) : setToggle(false);
    setRestaurantDetails(
      restrauntList.filter((item) =>
        item.info.name
          .toLowerCase()
          .includes(searchInput.trim("").toLowerCase())
      )
    );
    // console.log(
    //   restrauntList.filter((item) =>
    //     item.info.name
    //       .toLowerCase()
    //       .includes(searchInput.trim("").toLowerCase())
    //   )
    // );
  };

  console.log("Re-render");
  return (
    <div className="search-container">
      <input
        placeholder="Search"
        type="text"
        className="search-input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <button
        className="search-btn"
        onClick={() => filterRestaurant(searchInput, restrauntList)}
      >
        Search
      </button>
      <h4>{toggle && `Looking for : ${searchInput.trim("")}`}</h4>
    </div>
  );
};

export default Search;
