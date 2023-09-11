import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      {/* I use <Outlet /> because I want Header and Footer component always be there, but b/w them children component changes according to path which linked in children property of appRouter in App.js  */}
      <Outlet />{" "}
      {/**Children Component come here in place of <Outlet /> according to routes or path which we hit. <Outlet /> is like a place holder for children which we define in appRouter */}
      <Footer />
    </div>
  );
};

export default AppLayout;
