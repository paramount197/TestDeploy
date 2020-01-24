import React from "react";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Dropdown from "../block/Dropdown";
import Input from "../block/Input";
import "../styles/registration.css";
import Submit from "../block/Submit";
import axios from "axios";

const tdpData = require("../data/tdpData.json");

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      id: "",
      Password: "",
      PhoneNumber: "",
      Intake: "",
      Programme: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //would need to parseInt to make the number a number

  onSubmit = e => {
    e.preventDefault();
    //const { FirstName, lname, email } = this.state;

    axios
      .post("http://localhost:4000/users", {
        id: this.state.id,
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        PhoneNumber: this.state.PhoneNumber,
        Intake: this.state.Intake,
        Programme: this.state.Programme,
        password: this.state.Password
      })
      .then(result => {
        console.log(result);
        window.location.href = "http://localhost:3000/signin";
      });
  };

  render() {
    //const { fname, lname, email } = this.state;
    return (
      <>
        <Header header="Registration page" />
        <div className="main">
          <div className="row">
            <div className="form-p">
              <Intro intro="Please enter the details" />
              <form name="Registration" onSubmit={this.onSubmit}>
                <Input
                  type="text"
                  placeholder="First Name*"
                  name="FirstName"
                  required
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  placeholder="Last Name*"
                  name="LastName"
                  required
                  onChange={this.onChange}
                />
                <Input
                  type="email"
                  placeholder="Email Address*"
                  name="id"
                  required
                  onChange={this.onChange}
                />
                <Input
                  type="password"
                  placeholder="Password*"
                  name="Password"
                  required
                  onChange={this.onChange}
                />
                <Input
                  type="tel"
                  name="PhoneNumber"
                  required
                  placeholder="Enter number*"
                  onChange={this.onChange}
                  pattern="\d{10,11}"
                  //^\+?(?:\d\s?){10,11}$ - more complicated regex but I don't
                  //understand it fully, full explanation on teams
                />
                <div className="intake">
                  <label>TDP Intake</label>
                  <select name="Intake" onChange={this.onChange}>
                    <Dropdown
                      intakeProgrammeDetails={tdpData.tdpDetails.intake}
                    />
                  </select>
                </div>
                <div className="programme">
                  <label>TDP Programme</label>
                  <select name="Programme" onChange={this.onChange}>
                    <Dropdown
                      intakeProgrammeDetails={tdpData.tdpDetails.programme}
                    />
                  </select>
                </div>
                <Submit />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Registration;
