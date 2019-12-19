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
          <Button name="SIGN IN" className="homeButton" />
        </NavLink>
        <NavLink to="/registration">
          <Button name="REGISTER" className="homeButton" />
        </NavLink>
        <Button name="USER-GUIDE" className="homeButton userGuide" />
      </div>
      <div className="eventList">
        <Events
          eventsDetail={events.tdpEventsList}
          cohortIntake={events.cohortToggle}
        />
      </div>
    </>
  );
}

export default App;
