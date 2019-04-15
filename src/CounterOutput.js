import React from "react";
import "./CounterOutput.css";

const counterOutput = props => (
  <div className="CounterOutput">
    <div>Current Counter: {props.value}</div>
  </div>
);

export default counterOutput;
