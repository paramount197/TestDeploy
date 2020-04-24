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
        if (props.task === 'Book') {
          bookEvent(event, props.currentUserEmail, props.handleClick, props.eventFullMessage);
        }
        else if (props.task === 'Delete') {
          deleteEvent(event, props.handleClick);
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
  return event.booked.length >= event.attendees;
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

function unBookFromEvent(event, currentUserEmail, handleClick) {
  const index = event.booked.indexOf(currentUserEmail);
  event.booked.splice(index, 1);
  axios.patch(`http://localhost:4000/events/${event.id}`, {
    booked: event.booked
  }).then(response => handleClick());
}

function deleteEvent(event, handleClick) {
  console.log('Delete functionality not fully implemented.')
  // axios.delete(`http://localhost:4000/events/${event.id}`).then(response => handleClick())
}

export default Events;
