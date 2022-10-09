import React from "react";
import Properties from "../properties/Properties";
import Contact from "../contact_us/Contact";
import "./LandingPage.css";

const LandingPage = ({ state }) => {
  return (
    <div className="landing__page">
      <Properties state={state} />
      <Contact />
    </div>
  );
};

export default LandingPage;
