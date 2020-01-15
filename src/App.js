import React from "react";
import "./App.css";
import Header from "./block/Header";
import Intro from "./block/Intro";
import Blurb from "./block/Blurb";
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
      <Blurb Blurb="Hello and welcome to the TDP Events Webpage. Here you'll find all current and future TDP events.
                    You'll be able to confirm your attendence to the events via this webpage. Are you new user? Click 'Register' to sign up. 
                    If you are a returning user, click 'Sign In' to continue. For futher guidence, see the 'Users-Guide'." />
        <div className="buttonDivCont">
        <div className="buttonDiv">
          <NavLink to="/signin">
            <Button name="SIGN IN" className="homeButton" />
          </NavLink>
          <NavLink to="/registration">
            <Button name="REGISTER" className="homeButton" />
          </NavLink>
          <NavLink to="/usersguide">
            <Button name="USER GUIDE" className="homeButton userGuide" />
          </NavLink>
        </div>
        <div className="eventList">
          <p className="eventTitle">Upcoming Events</p>
          <Events
            eventsDetail={events.tdpEventsList}
            cohortIntake={events.cohortToggle}
          />
        </div>
      </div>
    </>
  );
}

export default App;
