import React from "react";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate("/admin");
  };
  return (
    <div>
      <button onClick={() => clickHandler()}>go back to the dashboard</button>
      <p>Add Property</p>
    </div>
  );
};

export default AddProperty;
