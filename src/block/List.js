import React from "react";

function EventList(props) {
  return (
    <>
      <div>
        <ul>
          <li>
            {props.eventName} on {props.eventDate}
          </li>
        </ul>
      </div>
    </>
  );
}
export default EventList;
