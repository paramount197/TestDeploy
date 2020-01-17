import React from "react";
import "./App.css";
import Header from "./block/Header";
import Intro from "./block/Intro";
import Events from "./block/Events";
import Button from "./block/Button";
import { NavLink } from "react-router-dom";
import Post from "./Axios/Post";
import axios from "axios";

// REWRITE A Component that fills in app js with the whole events section

const events = require("./data/events.json");
//this should be replaced by a get to JSON Server
class App extends React.Component {
  state = {
    events: []
  };
  componentDidMount() {
    axios.get("http://localhost:4000/events").then(res => {
      console.log("this is the events app response", res);
      this.setState({ events: res.data });
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
            <Events
              eventsDetail={this.state.events}
              cohortIntake={events.cohortToggle}
            />
            <Post />
          </div>
        </div>
      </>
    );
  }
}
export default App;
