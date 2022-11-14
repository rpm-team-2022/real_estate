import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./components/landing_page/LandingPage";
import PropertyDetails from "./components/property_details/PropertyDetails";
import Footer from "./components/footer/Footer";
import ManageProperties from "./components/admin_dashboard/propertyManagement/ManageProperties";
import AddProperty from "./components/admin_dashboard/propertyManagement/AddProperty";
import { data } from "./mockData/data";
import AdminLanding from "./components/admin_dashboard/AdminLanding";
import PrivateRoutes from "./helpers/PrivateRoute";
import Login from "./components/admin_dashboard/auth/Login";
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

  React.createContext(state.isLoggedIn);

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
        <Route path="login" element={<Login state={state} setState={setState} />} />
        <Route element={PrivateRoutes(state.isLoggedIn)}>
          <Route path="admin" exact>
            <Route index element={<AdminLanding state={state} setState={setState} />} />
            <Route
              path="manage-properties"
              element={<ManageProperties state={state} setState={setState} />}
            />
            <Route
              path="add-property"
              element={<AddProperty state={state} setState={setState} />}
            />
          </Route>
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
