import React from "react";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Events from "../block/Events";
import Image from "../block/Image";

// This is an array of objects that currently holds the event details.
// This will eventually be provided via the eventBrite API
// create dropdown for cohort
let tdpEventsList = [
  {
    name: "Open Forum",
    date: "01/12/2019",
    location: "Nationwide house",
    programme: ["Accelerator", "IP"],
    cohort: ["Sept 2018"]
  },
  {
    name: "Christmas Party",
    date: "01/01/2019",
    location: "Hilton",
    programme: ["Accelerator", "IP"],
    cohort: ["Sept 2018", "May 2019", "Sept 2019", "May 2020"]
  },
  {
    name: "Wellbeing",
    date: "01/12/2020",
    location: "Wake house",
    programme: ["Accelerator", "IP"],
    cohort: ["Sept 2019"]
  }
];

var cohortToggle = "May 2019";

function Welcome() {
  return (
    <>
      <Header header="TDP Events Page"/>
      <Intro/>
      <div className="eventList">
        <Events eventsDetail={tdpEventsList} cohortIntake={cohortToggle} />
        {/* Above passes the tdpEventsList array to the Events component as a single object */}
      </div>
    </>
  );
}

 
export default Welcome;
