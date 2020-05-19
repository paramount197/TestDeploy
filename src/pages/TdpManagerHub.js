import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../block/Button";
import Header from "../block/Header";
import axios from "axios";
import Events from "../block/Events";

function TdpManagerHub() {
  const [events, setEvents] = useState([]);
  const [updateEvents, setUpdateEvents] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:4000/events").then((result) => {
      setEvents(result.data);
    });
  }, [updateEvents]);

  return (
    <>
      <Header header="TDP Manager Hub" />
      <div className="buttonDiv">
        <NavLink to="/eventCreation">
          <Button name="CREATE EVENT" className="homeButton" />
        </NavLink>

        <p>Current events:</p>
        <Events
          eventsDetail={events}
          showButton={true}
          /* 
                        Delete causes all useres to be removed because of the attribute 'userId'
                        until this is resolve we can't show the delete button to managers
                    */
          handleClick={() => setUpdateEvents(!updateEvents)}
          task="Delete"
        />
      </div>
    </>
  );
}

export default TdpManagerHub;
