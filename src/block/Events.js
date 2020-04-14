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
          event.booked.push(props.currentUserEmail);
          axios.patch(`http://localhost:4000/events/${event.id}`, {
            booked: event.booked
          });
          window.location.reload();
        }
        else if (props.task === 'Unbook') {
          const index = event.booked.indexOf(props.currentUserEmail);
          event.booked.splice(index, 1);
          axios.patch(`http://localhost:4000/events/${event.id}`, {
            booked: event.booked
          });
          window.location.reload();
        }
      }}
      buttonText={props.task}
    />
  ));
};

export default Events;
