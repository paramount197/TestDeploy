import React from "react";
import ListItem from "./ListItem";

// old way of doing below for context
// for(i = 0; i < props.eventsDetail.length; i++){
//     if(props.eventsDetail[i].cohort.includes(props.cohortIntake)){
//         //do stuff
//     }
// }

const Events = props => {
  return (

    props.eventsDetail.map(
      event =>
        //event.cohort.includes(props.cohortIntake) && (
        (
          <ListItem
            className="event"
            eventName={event.name}
            text="on the"
            eventDate={event.date}
            text2="at"
            eventLocation={event.location}
          />
        )
    )
  );
};

export default Events;
