import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Authentication = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      Login Page<br></br>
      <h4 style={{ marginBottom: 0 }}>{user.name}</h4>
      <h5 style={{ marginTop: 0 }}>{user.email}</h5>
      <Link to="/"> Login </Link>
    </div>
  );
};

export default Authentication;
