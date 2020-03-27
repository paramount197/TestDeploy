import React from "react";
import "../styles/listitem.css";

function ListItem(props) {
  return (
    <li className={props.className}>
      {props.eventName} {props.text} {props.eventDate} {props.text2}
      {props.eventLocation}
      {props.attendees}
      {props.showButton === true && (
        <button type="button" onClick={props.buttonClick}>
          {props.buttonText}
        </button>
      )}
    </li>
  );
}

export default ListItem;
