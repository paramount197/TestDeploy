import React from "react";
import "../styles/button.css";

function Button(props) {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.name}
    </button>
  );
}

export default Button;
