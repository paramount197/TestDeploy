import React from "react";
import ListItem from "./ListItem";

const ManagementEvents = (props) => {
    return props.eventsDetail.map((event) => (
        <ListItem
            className="event"
            //eventName={event.name}
            //text="on the"
            //eventDate={event.date}
            //text2="at "
            //eventLocation={event.location}
            //text3="Currently attending "
            //booked={event.booked}
            text={`${event.name} on the ${event.date} at ${event.location} Currently Attending - ${event.booked}`} />
    ));
};

export default ManagementEvents;