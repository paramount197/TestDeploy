import React from "react";
import ListItem from "./ListItem";
import axios from "axios";

const Events = props => {
  return props.eventsDetail.map(event => (
    <ListItem
      className="event"
      eventName={event.name}
      text="on the"
      eventDate={event.date}
      text2="at "
      eventLocation={event.location}
      attendees={event.attendees}
      showButton={props.showButton}
      buttonClick={() => {
        if (props.task === 'Book') {
          bookEvent(event, props.currentUserEmail, props.handleClick);
        }
        else if (props.task === 'Delete') {
          deleteEvent(event, props.handleClick);
        }
      }}
      buttonText={props.task}
    />
  ));
};

function bookEvent(event, currentUserEmail, handleClick) {
  if (!event.booked.includes(currentUserEmail)) {
    event.booked.push(currentUserEmail);
    axios.patch(`http://localhost:4000/events/${event.id}`, {
      booked: event.booked
    }).then(response => handleClick());
  }
}

function deleteEvent(event, handleClick) {
  axios.delete(`http://localhost:4000/events/${event.id}`).then(response => handleClick())
}

export default Events;