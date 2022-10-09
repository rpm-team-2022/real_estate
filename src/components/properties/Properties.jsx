import React from "react";
import Property from "../property/Property";
import "./Properties.css";

const Properties = ({ state }) => {
  return (
    <div>
      <h3>Featured Properties</h3>
      <div className="properties">
        {state.properties.length ? (
          state.properties.map((property, idx) => {
            return idx < 9 && <Property key={property.ID} property={property} />;
          })
        ) : (
          <p> There was an error retrieving properties, please check again later</p>
        )}
      </div>
    </div>
  );
};

export default Properties;
