import React from "react";
import "./App.css";
import Header from "./block/Header";
import Intro from "./block/Intro";
import Events from "./block/Events";
import Button from "./block/Button";
import { NavLink } from "react-router-dom";

let tdpEventsList = [
  {
    name: "Open Forum",
    date: "01/12/2019",
    location: "Nationwide house",
    programme: ["Accelerator", "IP"],
    cohort: ["September 2018"]
  },
  {
    name: "Christmas Party",
    date: "01/01/2019",
    location: "Hilton",
    programme: ["Accelerator", "IP"],
    cohort: ["September 2018", "May 2019", "September 2019", "May 2020"]
  },
  {
    name: "Wellbeing",
    date: "01/12/2020",
    location: "Wake house",
    programme: ["Accelerator", "IP"],
    cohort: ["September 2019"]
  }
];

var cohortToggle = "September 2018";

function App() {
  return (
    <>
      <Header header="TDP Events Page" />
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
        <Events eventsDetail={tdpEventsList} cohortIntake={cohortToggle} />
        {/* Above passes the tdpEventsList array to the Events component as a single object */}
      </div>
    </>
  );
}

export default App;