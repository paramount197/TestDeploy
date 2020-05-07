import React from "react";
import "./App.css";
import Header from "./block/Header";
import Intro from "./block/Intro";
import Events from "./block/Events";
import Button from "./block/Button";
import { NavLink } from "react-router-dom";
import axios from "axios";

class App extends React.Component {
  state = {
    events: [],
  };
  componentDidMount() {
    axios.get("http://localhost:4000/events").then((result) => {
      let upcomingEvents = result.data.filter((event) => {
        let fourWeeks = 2.592e9;
        let todaysDate = Date.now();
        let eventDate = Date.parse(event.date);

        if (eventDate > todaysDate && eventDate <= todaysDate + fourWeeks) {
          return true;
        }
        return false;
      });
      this.setState({ events: upcomingEvents });
    });
  }

  render() {
    return (
      <>
        <Header header="TDP Events" />
        <Intro intro="Welcome to our TDP Event booking" />
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
            {this.state.events.length > 0 ? (
              <Events eventsDetail={this.state.events} />
            ) : (
              "No upcoming events: log in to see more"
            )}
          </div>
        </div>
      </>
    );
  }
}
export default App;
