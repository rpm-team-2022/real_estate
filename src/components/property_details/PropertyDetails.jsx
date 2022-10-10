import React from "react";

const PropertyDetails = ({ state, setState }) => {
  const property = state.currentProperty;
  const clickHandler = () => {
    setState({ ...state, currentProperty: null });
  };
  return (
    <div className="property_details">
      <button onClick={() => clickHandler()}>Go back</button>
      <div>
        <div className="prop_images">
          {property.images.map((image, idx) => {
            return (
              <div key={idx} className="prop_image">
                <img src={image} alt="" />
              </div>
            );
          })}
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
          <p>Property Details: {property.details}</p>
          <p>Amenities:</p>
          <ul>
            {property.amenities.map((amentity, idx) => {
              return <li key={idx}>{amentity}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
