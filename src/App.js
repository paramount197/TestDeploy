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
        if (Date.parse(e.date) > Date.now()) {
          if (Date.parse(e.date) <= Date.now() + 1.296e+9) {
            return true;
          }
          else if (Date.parse(e.data) <= Date.now() + 2.592e+9) {
            return true;
          }
          else {
            return "No upcoming events: log in to see more";
          }
        }
        else {
          return "No upcoming events: log in to see more";
        }
      }
      )
      this.setState({ events: eventDateType });
    });
  }

  render() {
    console.log(this.state.events);
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
            <Events eventsDetail={this.state.events} />
          </div>
        </div>
      </>
    );
  }
}
export default App;
