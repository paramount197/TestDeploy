import React from "react";
import Intro from "../block/Intro";
import Header from "../block/Header";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ManagementTable from "../block/managementTable";

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
        <Header header="Management Home Page" />
        <div class="main" />
        <div class="form-p" />
        <Intro intro="Here you can see who is attending TDP Events or click the link to create a new event." />
        <div>
          Create a new TDP event:
          <NavLink to="/eventcreation">
            <p className="underline">Click Here</p>
          </NavLink>
        </div>
        <div>
          <ManagementTable eventsDetails={this.state.events} />
        </div>
      </>
    );
  }
}
export default ManagementHomePage;
