import React from "react";
import ListItem from "./ListItem";

//further tasks:
//separate data file, remove object from Welcome.js

const Events = props => {
  return props.eventsDetail.map(
    event =>
      event.cohort.includes(props.cohortIntake) && (
        <ListItem
          eventName={event.name}
          eventDate={event.date}
          eventLocation={event.location}
        />
      )
  );
};

// old way of doing above for context
// for(i = 0; i < props.eventsDetail.length; i++){
//     if(props.eventsDetail[i].cohort.includes(props.cohortIntake)){
//         //do stuff
//     }
// }

export default Events;
