import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loginToggle, setLoginToggle] = useState(false);

  const toggleButton = () => setLoginToggle(!loginToggle);

  //useSelector is bridge b/w redux store and component
  // Using useSelector we subscribe the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log("navbar", cartItems);
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
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to="/cart">Cart- {cartItems.length} items</Link>
          </li>
          <li className="Loginbutton" onClick={toggleButton}>
            <Link to="/authentication">{loginToggle ? "Login" : "Logout"}</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
