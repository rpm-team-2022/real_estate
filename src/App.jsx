import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import LandingPage from "./components/landing_page/LandingPage";
import PropertyDetails from "./components/property_details/PropertyDetails";
import Footer from "./components/footer/Footer";
import { data } from "./mockData/data";
import "./App.css";

const initialState = {
  properties: [],
  isPropertySelected: false,
};

function App() {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    setState({ ...state, properties: data });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      {!state.isPropertySelected ? <LandingPage state={state} /> : <PropertyDetails />}
      <Footer />
    </div>
  );
}

export default App;
