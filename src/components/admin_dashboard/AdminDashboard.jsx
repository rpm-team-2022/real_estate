import React from "react";
import AdminLanding from "./AdminLanding";
import Login from "./auth/Login";

const AdminDashboard = ({ state, setState }) => {
  return (
    <div>
      {state.isLoggedIn ? (
        <AdminLanding state={state} setState={setState} />
      ) : (
        <>
          <p>Please Login to proceed</p>
          <Login state={state} setState={setState} />
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
