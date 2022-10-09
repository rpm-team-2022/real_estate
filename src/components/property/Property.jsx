import React from "react";
import "./Property.css";

const Property = ({ property }) => {
  return (
    <div className="property">
      <div className="propertyDetails">
        <div className="propertyImage">
          <img src={property.images[0]} alt="" />
        </div>
        <div className="propertyInfo">
          <p>
            <strong>property type</strong> : {property.type}
          </p>
          <p>
            <strong>price</strong>: {property.price}
          </p>
          <div className="bed_bath">
            <p>
              <strong>Beds</strong>: {property.beds}
            </p>
            <p>
              <strong>bath</strong>: {property.bath}
            </p>
          </div>
          <p>
            <strong>Location</strong>:{" "}
            {`${property.area}, ${property.city}, ${property.province}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Property;
