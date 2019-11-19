import React from "react";
import "../styling/input.css";

const Input = props => {
  return (
    <label className="input">
      {props.label}
      <input type={props.type} name={props.name} value={props.value} />
    </label>
  );
};

export default Input;
