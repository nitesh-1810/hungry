import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;
