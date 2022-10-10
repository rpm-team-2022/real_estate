import React from "react";
import Properties from "../properties/Properties";
import Contact from "../contact_us/Contact";
import "./LandingPage.css";

const LandingPage = ({ state, setState }) => {
  return (
    <div className="landing__page">
      <Properties state={state} setState={setState} />
      <Contact />
    </div>
  );
};

export default LandingPage;
