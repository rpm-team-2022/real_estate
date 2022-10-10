import React from "react";
import Property from "../property/Property";
import "./Properties.css";

const Properties = ({ state, setState }) => {
  return (
    <div>
      <h3>Featured Properties</h3>
      <div className="properties">
        {state.properties.length ? (
          state.properties.map((property, idx) => {
            return (
              <Property
                key={property.ID}
                property={property}
                state={state}
                setState={setState}
              />
            );
          })
        ) : (
          <p> There was an error retrieving properties, please check again later</p>
        )}
      </div>
    </div>
  );
};

export default Properties;
