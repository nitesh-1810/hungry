import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      About
      <Outlet /> {/** use to insert children from appRouter */}
    </div>
  );
};

export default About;
