import React from "react";

function Button(props) {
  return <button onClick={props.onClick}>Hello {props.name}</button>;
}

export default Button;
