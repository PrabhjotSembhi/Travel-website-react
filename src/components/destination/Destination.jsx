import React, { useState } from "react";
import "./destination.css";

const Destination = (props) => {
  const [ativeDestination, setActiveDestination] = useState(false);
  return (
    <div className="DestinationContainer">
      <div className="destinationImg">
        <img src={props.Img} alt="" />
      </div>

   


      {ativeDestination && (
        <div className="destinationDesc">
          <h3 className="destinationName">{props.Title}</h3>
          <p className="destinationDesc">{props.Desc}</p>
        </div>
      )}
    </div>
  );
};

export default Destination;
