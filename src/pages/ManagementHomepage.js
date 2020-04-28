import React from "react";
import Intro from "../block/Intro";
import Header from "../block/Header";
import axios from "axios";
import "../styles/managementHomePage.css";
import { NavLink } from "react-router-dom";
//import ManagementEvents from "../block/ManagementEvents";
import ManagementTable from "../block/ManagementTable";

class ManagementHomePage extends React.Component {
  state = {
    events: [],
    eventName: "",
    booked: [],
    firstname: [],
    lastname: [],
  };

  componentDidMount() {
    axios.get("http://localhost:4000/events").then((result) => {
      this.setState({
        events: result.data,
        booked: result.data,
      });
    });
    axios.get("http://localhost:4000/users").then((result) => {
      this.setState({
        firstname: result.data,
        lastname: result.data,
      });
    });
  }

  render() {
    console.log(this.setState);
    return (
      <>
        <Header header="Management HomePage" />
        <div class="main" />
        <div class="form-p" />
        <Intro intro="See who is attending TDP Events or click the link to create a new event" />
        <div>
          <NavLink to="/eventcreation">
            <p className="underline">Create a new TDP event, click here:</p>
          </NavLink>
        </div>
        <div>
          {/* <ManagementEvents eventsDetail={this.state.events} /> */}
          <ManagementTable eventsDetails={this.state.events} />
        </div>
      </>
    );
  }
}
export default ManagementHomePage;
