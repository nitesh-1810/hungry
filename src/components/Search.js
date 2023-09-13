import React, { useState } from "react";

const Search = ({ setRestaurantDetails, filterRestaurantList }) => {
  const [searchInput, setSearchInput] = useState("");
  const [toggle, setToggle] = useState(false);
  // Extract this from here and make custom hook and then off load it as custom hook.
  const filterRestaurant = (searchInput, restrauntList) => {
    searchInput !== "" ? setToggle(true) : setToggle(false);
    setRestaurantDetails(
      restrauntList?.filter((item) =>
        item?.info?.name
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
        placeholder="Search Restaurant....."
        type="text"
        className="search-input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <button
        className="search-btn"
        onClick={() => filterRestaurant(searchInput, filterRestaurantList)}
      >
        Search
      </button>
      <h4>{toggle && `Looking for : ${searchInput.trim("")}`}</h4>
    </div>
  );
};

export default Search;
