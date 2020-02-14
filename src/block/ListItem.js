import React from "react";
import "../styles/listitem.css";

function ListItem(props) {
  return (
    <li className={props.className}>
      {props.eventName} {props.text} {props.eventDate} {props.text2}
      {props.eventLocation}
    </li>
  );
}

export default ListItem;
