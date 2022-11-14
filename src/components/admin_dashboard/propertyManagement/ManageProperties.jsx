import React from "react";
import { useNavigate } from "react-router-dom";

const ManageProperties = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate("/admin");
  };
  return (
    <div>
      <button onClick={() => clickHandler()}>go back to the dashboard</button>
      <p> Manage Properties</p>
    </div>
  );
};

export default ManageProperties;
