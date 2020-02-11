import React from "react";
import Header from "../block/Header";
import Events from "../block/Events";
import axios from "axios";

const events = require("../data/events.json");

class Profile extends React.Component {
  state = {
    events: []
  };

  componentDidMount() {
    axios.get("http://localhost:4000/events").then(results => {
      this.setState({ events: results.data });
    });
  }

  render() {
    return (
      <>
        <Header header="Welcome back!" />
        <div className="CoreEvents">
          <h2> Core events </h2>
          <Events
            eventsDetail={this.state.events}
            cohortIntake={events.cohortToggle}
          />
        </div>

        <div className="NonCoreEvents">
          <h2> Non core events </h2>
          <Events
            eventsDetail={this.state.events}
            cohortIntake={events.cohortToggle}
          />
        </div>
      </>
    );
  }
}

export default Profile;
