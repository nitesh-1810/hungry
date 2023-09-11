import React from "react";
import { useRouteError } from "react-router-dom"; // use to give info about error

const Error = () => {
  const err = useRouteError(); // return error object

  //destructure

  const { status, statusText } = err;

  return (
    <div>
      <h1>Oops !!</h1>
      <h2>SOmething went wrong !!</h2>
      <h3>{status + " : Page " + statusText}</h3>
    </div>
  );
};

export default Error;
