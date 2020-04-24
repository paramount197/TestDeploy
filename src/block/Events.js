import React from "react";
import ListItem from "./ListItem";
import axios from "axios";

const Events = (props) => {
  return props.eventsDetail.map((event) => (
    <ListItem
      className="event"
      text={`${event.name} on the ${event.date} at ${
        event.location
      }. Spaces remaining - ${event.attendees - event.booked.length} `}
      showButton={props.showButton}
      buttonClick={() => {
        event.booked.push(props.currentUserEmail);
        axios
          .patch(`http://localhost:4000/events/${event.id}`, {
            booked: event.booked,
          })
          .then(function (response) {
            props.handleClick();
          });
        window.location.reload();
      }}
      buttonText="Book"
    />
  ));
};

export default Events;
