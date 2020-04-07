import React from "react";
import ListItem from "./ListItem";
import axios from "axios";

// will need to change no. of attendees to an integer!!

const Events = (props) => {
  const fullEventCheck = () => {
    console.log("done");
    console.log(props);
    if (props.eventsDetail.booked.length >= props.eventsDetail.attendees) {
      return true;
    } else return false;
  };

  const buttonClicked = (event) => {
    console.log("bacaejpa");
    if (fullEventCheck === false) {
      event.booked.push(props.currentUserEmail);
      axios.patch(`http://localhost:4000/events/${event.id}`, {
        booked: event.booked,
      });
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
      buttonClick={buttonClicked(event)}
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
      buttonText={fullEventCheck ? "Full" : "Book"}
    />
  ));
};

export default Events;
