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
    events: []
  };
  componentDidMount() {
    axios.get("http://localhost:4000/events").then((result) => {
      let eventDateType = result.data.filter((e) => {
        let twoWeeks = 1.296e+9;
        let fourWeeks = 2.592e+9;
        if (Date.parse(e.date) > Date.now()) {
          if (Date.parse(e.date) <= Date.now() + twoWeeks) {
            return true;
          }
          else if (Date.parse(e.data) <= Date.now() + fourWeeks) {
            return true;
          }
        }
        else {
          return false;
        }
      })
      this.setState({ events: eventDateType });
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
            {(this.state.events.length > 0) ?
              (<Events eventsDetail={this.state.events} />) :
              ("No upcoming events: log in to see more")}
          </div>
        </div>
      </>
    );
  }
}
export default App;
