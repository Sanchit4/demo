import React from "react";
import "./CounterControl.css";
const counterControl = props => (
  <div className="navbar">
    <button className="CounterControl" onClick={props.clicked}>
      {props.label}
    </button>
  </div>
);

export default counterControl;
