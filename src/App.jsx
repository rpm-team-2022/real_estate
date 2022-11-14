import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./components/landing_page/LandingPage";
import PropertyDetails from "./components/property_details/PropertyDetails";
import Footer from "./components/footer/Footer";
import ManageProperties from "./components/admin_dashboard/propertyManagement/ManageProperties";
import AddProperty from "./components/admin_dashboard/propertyManagement/AddProperty";
import { data } from "./mockData/data";
import AdminDashboard from "./components/admin_dashboard/AdminDashboard";
import "./App.css";

const initialState = {
  properties: [],
  currentProperty: null,
  isLoggedIn: false,
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
      <Routes>
        <Route
          path="/"
          element={
            !state.currentProperty ? (
              <LandingPage state={state} setState={setState} />
            ) : (
              <PropertyDetails state={state} setState={setState} />
            )
          }
        />
        <Route path="/admin" element={<AdminDashboard state={state} setState={setState} />} />
        <Route path="admin/manage-properties" element={<ManageProperties />} />
        <Route path="admin/add-property" element={<AddProperty />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
