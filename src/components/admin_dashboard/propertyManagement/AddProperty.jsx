import React from "react";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate("/admin");
  };
  return (
    <div>
      <p>Add Property</p>
      <button onClick={() => clickHandler()}>go back to the dashboard</button>
    </div>
  );
};

export default AddProperty;
