import React from "react";

function ListItem(props) {
  return (
    <li>
      {props.eventName} on the {props.eventDate} at {props.eventLocation}
    </li>
  );
}

export default ListItem;
