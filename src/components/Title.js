import React from "react";
import Logo from "../assets/images/logo.png";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" src={Logo} alt="logo" />
    </a>
  );
};

export default Title;
