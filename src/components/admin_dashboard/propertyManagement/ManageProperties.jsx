import React from "react";
import { useNavigate } from "react-router-dom";

const ManageProperties = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate("/admin");
  };
  return (
    <div>
      <p> Manage Properties</p>
      <button onClick={() => clickHandler()}>go back to the dashboard</button>
    </div>
  );
};

export default ManageProperties;
