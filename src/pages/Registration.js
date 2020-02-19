import React from "react";
import axios from "axios";
import "../styles/registration.css";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Dropdown from "../block/Dropdown";
import Input from "../block/Input";
import Submit from "../block/Submit";

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
      programme: "",
      intakeDetails: [],
      programmeDetails: [],
      intakeRequired: "Intake is required"
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.intakeDetails.length[0]) {
      console.log("this was empty");
    }

    axios
      .post("http://localhost:4000/users", {
        id: this.state.id,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        phoneNumber: this.state.phoneNumber,
        intake: this.state.intake,
        programme: this.state.programme,
        tdpManagement: "No"
      })
      .then(() => {
        window.location.href = "http://localhost:3000/signin";
      });
  };

  componentDidMount() {
    axios.get("http://localhost:4000/tdpDetails").then(result => {
      this.setState({
        intakeDetails: result.data.intake,
        programmeDetails: result.data.programme
      });
    });
  }

  render() {
    return (
      <>
        <Header header="Registration page" />
        <div className="main">
          <div className="row">
            <div className="form-p">
              <Intro intro="Please enter your details below" />
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
                      intakeProgrammeDetails={this.state.intakeDetails}
                    />
                  </select>
                  {/* <p>{this.state}</p> */}
                </div>
                <div className="programme">
                  <label>TDP programme</label>
                  <select name="programme" onChange={this.onChange}>
                    <Dropdown
                      intakeProgrammeDetails={this.state.programmeDetails}
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
