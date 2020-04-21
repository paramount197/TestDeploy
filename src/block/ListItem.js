import React from "react";
import "../styles/listitem.css";

function ListItem(props) {
  return (
    <li className={props.className}>
      {props.text}
      {props.showButton === true && (
        <button type="button" onClick={props.buttonClick}>
          {props.buttonText}
        </button>
      )}
    </li>
  );
}

export default ListItem;
