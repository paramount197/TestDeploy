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
      firstName: "",
      lastName: "",
      id: "",
      password: "",
      phoneNumber: "",
      intake: "",
      programme: ""
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/users", {
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        intake: this.state.intake
      })
      .then(result => {
        console.log(result);
        window.location.href = "http://localhost:3000/signin";
      });
  };

  render() {
    return (
      <>
        <Header header="Registration page" />
        <div className="main">
          <div className="row">
            <div className="form-p">
              <Intro intro="Please enter the details" />
              <button
                onClick={() =>
                  (window.location.href = "http://localhost:3000/eventCreation")
                }
              >
                Click here if you are TDP Management
              </button>
              <form name="Registration" onSubmit={this.onSubmit}>
                <Input
                  type="text"
                  placeholder="First Name*"
                  name="firstName"
                  required
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  placeholder="Last Name*"
                  name="lastName"
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
                  name="password"
                  required
                  onChange={this.onChange}
                />
                <Input
                  type="tel"
                  name="phoneNumber"
                  required
                  placeholder="Enter number*"
                  onChange={this.onChange}
                  pattern="\d{10,11}"
                />
                <div className="intake">
                  <label>TDP intake</label>
                  <select name="intake" onChange={this.onChange}>
                    <Dropdown
                      intakeProgrammeDetails={tdpData.tdpDetails.intake}
                    />
                  </select>
                </div>
                <div className="programme">
                  <label>TDP programme</label>
                  <select name="programme" onChange={this.onChange}>
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
