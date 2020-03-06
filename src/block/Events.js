import React from "react";
import ListItem from "./ListItem";
import axios from "axios"

const Events = props => {
  return props.eventsDetail.map(event => (
    <ListItem
      className="event"
      eventName={event.name}
      text="on the"
      eventDate={event.date}
      text2="at "
      eventLocation={event.location}
      name={props.name}
      attendees={event.attendees}
      showButton={props.showButton}
      //userId={props.testUser}
      bookEvent={() => {
        console.log(event.id);
        // setState(
        //   {eventsId: event.id}
        // )
        // axios.put("http://localhost:4000/events?id=3",
        //   {
        //     attendees: '4'
        //   }
        // ).then(result => { console.log(result.data) });
        // axios.get("http://localhost:4000/events?id=3")
        //   .then(event => { console.log(event.data[0]) });

        axios.put(`http://localhost:4000/events/${event.id}`, {
          "id": event.id,
          "name": event.name,
          "date": "2020-02-22",
          "location": "test",
          "attendees": "3",
          "intake": "September 2018",
          "programme": "Degree Apprenticeship",
          "coreSelection": "noncore",
          "peopleGoing": [props.testUser]
        })
          .then(event => { console.log(event.data[0]) });

      }} />
  ))
};

export default Events;
