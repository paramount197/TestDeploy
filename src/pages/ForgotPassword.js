import React from "react";
import axios from "axios";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Input from "../block/Input";
import Submit from "../block/Submit";
import { NavLink } from "react-router-dom";
import "../styles/forgotpassword.css";
import "../styles/input.css";

const securityQuestions = require("../data/securityQuestions.json");

class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      emailHasBeenInput: false,
      email: "",
      securityQuestion: "",
      securityAnswer: "",
      userAnswer: "",
      response: ""
    };
  }

  onChange = e => {
    console.log('onchange')
    this.setState({ [e.target.name]: e.target.value });
  };

  getUserData() {
    axios
      .get(`http://localhost:4000/users?id=${this.state.email}`)
      .then(result => {
        if (result.data.length !== 0) {
          //if user does exist (result.data is NOT empty)
          console.log(result.data)
          this.setState({
            emailHasBeenInput: true,
            securityQuestion: result.data[0].securityQuestion,
            securityAnswer: result.data[0].securityAnswer
          });
        }
        else {
          //if user doesn't exist 
          this.handleIncorrectDetails();
        }
      });
  }

  handleIncorrectDetails = () => {
    this.setState({
      response: "Please check you have entered your details correctly"
    });
  };

  handleSecurityQuestion() {
    console.log(this.state)
    if (this.state.userAnswer === this.state.securityAnswer) {
      console.log('success')
    }
    else {
      console.log('fail')
    }
  }


  render() {
    return (
      <>
        <Header header="Forgot Password?" />
        <div class="main">
          <div class="row">
            <div class="form-p">
              <Intro intro="Please enter your email address and answer your chosen security question below" />
              {!this.state.emailHasBeenInput && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    this.getUserData();
                  }}>
                  <Input
                    type="email"
                    placeholder="Enter Email Address"
                    name="email"
                    required
                    onChange={this.onChange}
                  />
                  <Submit />
                  <p className="response">{this.state.response}</p>
                </form>
              )}
              {this.state.emailHasBeenInput && (
                <div className="securityQuestions">
                  <label>Security Question</label>
                  <p>{this.state.securityQuestion}</p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.handleSecurityQuestion();
                    }}>
                    <Input
                      type="text"
                      placeholder="Write Answer Here"
                      name="userAnswer"
                      required
                      onChange={this.onChange}
                    />
                    <Submit />
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ForgotPassword;
