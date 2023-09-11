import React from "react";

const Shimmer = () => {
  return Array(20)
    .fill("")
    .map((item, index) => <div key={index} className="shimmer-effect"></div>);
};

export default Shimmer;
