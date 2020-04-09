import React from "react";
import Input from "../block/Input";
import Intro from "../block/Intro";
import Header from "../block/Header";
import Submit from "../block/Submit";
import axios from "axios";
import Dropdown from "../block/Dropdown";
import "../styles/managementHomePage.css";
import { NavLink } from "react-router-dom";
import Event from "../block/Events";

class ManagementHomePage extends React.Component {
  state = {
    events: [],
    eventName: "",
    booked: [],
  };

  componentDidMount() {
    axios.get("http://localhost:4000/events").then((result) => {
      this.setState({
        events: result.data,
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Header header="Management HomePage" />
        <div class="main" />
        {/* <div class="row" /> */}
        <div class="form-p" />
        <Intro intro="This page will allow you to see who is attending each event or click the link to create a new event " />
        <div>
          <NavLink to="/eventcreation">
            <p className="underline">Create a new TDP event, click here:</p>
          </NavLink>
        </div>
        <div className="selectDropdown">
          <label>TDP Events</label>
          {/* <select name="events" onChange={this.onChange} required={true}> */}
          {/* <select name="events">
            {/* <Dropdown dropdownOptions={this.state.events} /> */}
          {/* <option>{this.state.events[1].name}</option> */}
          {/* </select> */}
          <Event eventsDetail={this.state.events} />
        </div>
        <Submit />
      </>
    );
  }
}

export default ManagementHomePage;

//getUserData() {
//  axios
//    .get(`http://localhost:4000/users?id=${this.state.email}`)
//  .then(result => {
//    if (result.data.length !== 0) {
//      this.setState({
//        email: true,
//        });
//} else {
//         this.setState({
//           //got stuck here
//     });
//  }
//  });
// }
