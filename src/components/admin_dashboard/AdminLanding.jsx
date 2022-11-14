import React from "react";
import { Link } from "react-router-dom";

const AdminLanding = ({ state, setState }) => {
  const clickHandler = () => {
    setState({ ...state, isLoggedIn: false });
  };
  return (
    <div>
      <h4> Welcome Back Samer</h4>
      <p> select an option</p>
      <div className="admin_options">
        <button>
          <Link to={"manage-properties"}>Manage Properties</Link>
        </button>
        <button>
          <Link to={"add-property"}>Add a new Property</Link>
        </button>
        <button onClick={() => clickHandler()}>Logout</button>
      </div>
    </div>
  );
};

export default AdminLanding;
