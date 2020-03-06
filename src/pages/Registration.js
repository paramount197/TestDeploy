import React from "react";
import axios from "axios";
import "../styles/registration.css";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Dropdown from "../block/Dropdown";
import Input from "../block/Input";
import Submit from "../block/Submit";
const securityQuestions = require("../data/securityQuestions.json");

class Registration extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      id: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      intake: "",
      programme: "",
      programmeValueName: [],
      intakeValueName: [],
      userId: undefined
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
        intake: this.state.intake,
        programme: this.state.programme,
        tdpManagement: "No",
        userId: this.state.userId
      })
      .then(() => {
        window.location.href = "http://localhost:3000/signin";
      });
  };

  componentDidMount() {
    axios.get("http://localhost:4000/tdpDetails").then(result => {
      this.setState({
        programmeValueName: result.data.programmeValueName,
        intakeValueName: result.data.intakeValueName
      });
      axios.get("http://localhost:4000/users").then(result => {
        this.setState({
          userId: result.data.length + 1
        });
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
                  type="password"
                  placeholder="Confirm Password*"
                  name="confirmPassword"
                  required
                  onChange={this.onChange}
                />
                {this.state.password !== "" &&
                  this.state.confirmPassword !== "" &&
                  this.state.password !== this.state.confirmPassword && (
                    <p>Passwords do not match</p>
                  )}
                <Input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter number"
                  onChange={this.onChange}
                  pattern="\d{10,11}"
                />
                <div className="selectDropdown">
                  <label>Security Question</label>
                  <select>
                    <Dropdown
                      intakeProgrammeDetails={
                        securityQuestions.securityQuestion.Questions
                      }
                    />
                  </select>
                </div>
                <Input
                  type="text"
                  placeholder="Write Security Answer Here"
                  name="Answer"
                  required
                />
                <div className="intake">
                  <label>TDP intake</label>
                  <select
                    name="intake"
                    onChange={this.onChange}
                    required={true}
                  >
                    <Dropdown
                      intakeProgrammeDetails={this.state.intakeValueName}
                    />
                  </select>
                </div>
                <div className="programme">
                  <label>TDP programme</label>
                  <select
                    name="programme"
                    onChange={this.onChange}
                    required={true}
                  >
                    <Dropdown
                      intakeProgrammeDetails={this.state.programmeValueName}
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
