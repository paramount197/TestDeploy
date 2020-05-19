import React from "react";
import ListItem from "./ListItem";
import axios from "axios";

const Events = (props) => {
  return props.eventsDetail.map((event) => (
    <ListItem
      className="event"
      text={`${event.name} on ${event.date} at ${event.location}. Spaces remaining - ${event.capacity - event.attendees.length} `}
      showButton={props.showButton}
      buttonClick={() => {
        if (props.task === 'Book') {
          bookEvent(event, props.currentUserEmail, props.handleClick, props.eventFullMessage);
        }
        else if (props.task === 'Unbook') {
          unBookFromEvent(event, props.currentUserEmail, props.handleClick)
        }
      }}
      buttonText={showButtonText(event, props.task)}
    />
  ));
};

const fullEventCheck = (event) => {
  return event.attendees.length >= event.capacity;
};

function showButtonText(event, task) {
  if (task === 'Book' && fullEventCheck(event) === true) {
    return 'Full'
  }
  else {
    return task;
  }
}

function bookEvent(event, currentUserEmail, handleClick, eventFullMessage) {
  if (!event.attendees.includes(currentUserEmail) && fullEventCheck(event) === false) {
    event.attendees.push(currentUserEmail);
    axios.patch(`http://localhost:4000/events/${event.id}`, {
      attendees: event.attendees
    }).then(response => handleClick());
  }
  else if (fullEventCheck(event)) {
    eventFullMessage();
  }
}

function unBookFromEvent(event, currentUserEmail, handleClick) {
  const index = event.attendees.indexOf(currentUserEmail);
  event.attendees.splice(index, 1);
  axios.patch(`http://localhost:4000/events/${event.id}`, {
    attendees: event.attendees
  }).then(response => handleClick());
}

export default Events;
