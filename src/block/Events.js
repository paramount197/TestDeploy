import React from "react";
import ListItem from "./ListItem";
import axios from "axios";

const Events = (props) => {

  return props.eventsDetail.map((event) => (
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
          bookEvent(event, props.currentUserEmail, props.handleClick, props.eventFullMessage);
        }
        else if (props.task === 'Delete') {
          deleteEvent(event, props.handleClick);
        }
      }}
      buttonText={fullEventCheck(event) ? "Full" : props.task}
    />
  ));
};

const fullEventCheck = (event) => {
  return event.booked.length >= event.attendees;
};

function bookEvent(event, currentUserEmail, handleClick, eventFullMessage) {
  if (!event.booked.includes(currentUserEmail) && fullEventCheck(event) === false) {
    event.booked.push(currentUserEmail);
    axios.patch(`http://localhost:4000/events/${event.id}`, {
      booked: event.booked
    }).then(response => handleClick());
  }
  else if (fullEventCheck(event)) {
    eventFullMessage();
  }
}

function deleteEvent(event, handleClick) {
  console.log('Delete functionality not fully implemented.')
  // axios.delete(`http://localhost:4000/events/${event.id}`).then(response => handleClick())
}

export default Events;
