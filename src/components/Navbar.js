import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loginToggle, setLoginToggle] = useState(true);

  const toggleButton = () => setLoginToggle(!loginToggle);

  return (
    <>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li className="Loginbutton" onClick={toggleButton}>
            {loginToggle ? "Login" : "Logout"}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
