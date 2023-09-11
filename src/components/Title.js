import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img className="logo" src={Logo} alt="logo" />
    </Link>
  );
};

export default Title;
