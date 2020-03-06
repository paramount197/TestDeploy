import React from "react";
import "../styles/listitem.css";

function ListItem(props) {
  return (
    <li className={props.className}>
      {props.eventName} {props.text} {props.eventDate} {props.text2}
      {props.eventLocation}{props.attendees}
      {/* <span> ....</span> */}
      {props.showButton === true &&
        <button type="button" onClick={props.bookEvent}>Book</button>}
    </li>
  );
}

export default ListItem;
