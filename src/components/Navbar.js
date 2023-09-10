import React, { useState } from "react";

const Navbar = () => {
  const [loginToggle, setLoginToggle] = useState(true);

  const toggleButton = () => setLoginToggle(!loginToggle);

  return (
    <>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
