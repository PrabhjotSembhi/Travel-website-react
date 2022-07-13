import React from "react";
import "./service.css";

const Service = (props) => {
  return (
    <div className ="ServiceContainer">
      <div className="ServiceIcon">{props.Icon}</div>

      <div className="content">
        
      <h3>{props.ServiceName}</h3>
      <p>{props.ServiceDesc}</p>
      </div>
    </div>
  );
};

export default Service;
