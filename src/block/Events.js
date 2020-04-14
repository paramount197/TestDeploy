import React from "react";
import ListItem from "./ListItem";
import axios from "axios";

// will need to change no. of attendees to an integer!!

const Events = (props) => {
  const fullEventCheck = (event) => {
    if (event.booked.length >= event.attendees) {
      return true; //+ console.log("this is full", event.booked.length, event.attendees)
    } else return false;
    // false +
    // console.log("there is space", event.booked.length, event.attendees)
  };

  const buttonClicked = (event) => {
    if (fullEventCheck(event) === false) {
      event.booked.push(props.currentUserEmail);
      axios.patch(`http://localhost:4000/events/${event.id}`, {
        booked: event.booked,
      });
      window.location.reload();
    } else {
      console.log("This event is full");
    }
  };
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
      buttonClick={buttonClicked.bind(null, event)}
      //{fullEventCheck.bind(null, event)}
      //{buttonClicked.bind(null, event)}
      // fullEventCheck();
      //   if (fullEventCheck === true) {
      //     event.booked.push(props.currentUserEmail);
      //     axios.patch(`http://localhost:4000/events/${event.id}`, {
      //       booked: event.booked,
      //     });
      //     window.location.reload();
      //   } else {
      //     console.log("This event is full");
      //   }
      // }}
      buttonText={fullEventCheck(event) ? "Full" : "Book"}
    />
  ));
};

export default Events;
