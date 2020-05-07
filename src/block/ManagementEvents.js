import React from "react";
import ListItem from "./ListItem";

const ManagementEvents = (props) => {
  return props.eventsDetail.map((event) => (
    <ListItem
      className="event"
      text={`${event.name} on the ${event.date} at ${event.location} Currently Attending - ${event.attendees}`} />
  ));
};

export default ManagementEvents;