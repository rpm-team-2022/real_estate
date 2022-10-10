import React from "react";
import "./Property.css";

const Property = ({ property, state, setState }) => {
  const clickHandler = (id) => {
    setState({ ...state, currentProperty: property });
  };
  return (
    <div className="property" onClick={() => clickHandler(property.ID)}>
      <div>
        <div className="propertyImage">
          <img src={property.images[0]} alt="" />
        </div>
        <div className="property_text">
          <p>
            <strong>property type:</strong> {property.type}
          </p>
          <p>
            <strong>price:</strong> {property.price}
          </p>
          <div className="bed_bath">
            <p>
              <strong>Beds:</strong> {property.beds}
            </p>
            <p>
              <strong>Bath:</strong> {property.bath}
            </p>
          </div>
          <p>
            <strong>Location:</strong>
            {` ${property.area}, ${property.city}, ${property.province}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Property;
