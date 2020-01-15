import React from "react";
import ListItem from "./ListItem";
const Eventsjson = props => {
  return props.events.map(
    event => (
        <ListItem
          className="event"
          eventName={event.name}
          eventDate={event.date}
          eventLocation={event.location}
        />
      )
  );
};

export default Eventsjson;
