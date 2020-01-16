import React from "react";
import Header from "../block/Header";
import Events from "../block/Events";

const events = require("../data/events.json");

function Profile() {
    return (
        <>
            <Header header="Welcome back!" />
            <div className="CoreEvents">
                <h2> Core events </h2>
                <Events
                    eventsDetail={events.tdpEventsList}
                    cohortIntake={events.cohortToggle}
                />
            </div>

            <div className="NonCoreEvents">
                <h2> Non core events </h2>
                <Events
                    eventsDetail={events.NonCoreEvents}
                    cohortIntake={events.cohortToggle}
                />
            </div>
        </>
    );
}

export default Profile;
