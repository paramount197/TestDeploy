import React from "react";
import "../styles/listitem.css";

function ListItem(props) {
  return (
    <li className={props.className}>
      {props.eventName} on the {props.eventDate} at {props.eventLocation}
    </li>
  );
}

export default ListItem;
