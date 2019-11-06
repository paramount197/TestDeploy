import React from "react";

function ListItem(props) {
  return (
    <li>
      {props.eventName} on {props.eventDate}
    </li>
  );
}

export default ListItem;
