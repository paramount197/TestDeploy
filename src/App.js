import React from "react";
import "./App.css";
import Header from "./block/Header";
import Intro from "./block/Intro";
import Events from "./block/Events";
import Button from "./block/Button";
import { NavLink } from "react-router-dom";

const events = require("./data/events.json");
//imports all the data from a json file accessible everywhere
//rather than objects/array that are stored and repeated
//in various components

function App() {
  return (
    <>
      <Header header="TDP Events" />
      <Intro intro="Welcome to our TDP Event booking" />
      <div className="buttonDiv">
        <NavLink to="/signin">
          <Button name="SIGN IN" />
        </NavLink>
        <NavLink to="/registration">
          <Button name="REGISTER" />
        </NavLink>
        <Button name="USER-GUIDE" />
      </div>
      <div className="eventList">
        <Events
          eventsDetail={events.tdpEventsList}
          cohortIntake={events.cohortToggle}
        />
        {/* Above passes the tdpEventsList array to the Events component as a single object */}
      </div>
    </>
  );
}

export default App;