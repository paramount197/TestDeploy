import React from "react";
import axios from "axios";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Input from "../block/Input";
import Submit from "../block/Submit";
import "../styles/forgotpassword.css";
import "../styles/input.css";

class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      emailHasBeenInput: false,
      email: "",
      securityQuestion: "",
      securityAnswer: "",
      userAnswer: "",
      securityAnswerPassed: false,
      updatedPassword: "",
      message: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getUserData() {
    axios
      .get(`http://localhost:4000/users?id=${this.state.email}`)
      .then(result => {
        if (result.data.length !== 0) {
          this.setState({
            emailHasBeenInput: true,
            securityQuestion: result.data[0].securityQuestion,
            securityAnswer: result.data[0].securityAnswer,
            message: ""
          });
        } else {
          this.setState({
            message: "Please check you have entered your details correctly"
          });
        }
      });
  }

  handleSecurityQuestion() {
    if (this.state.userAnswer === this.state.securityAnswer) {
      this.setState({ securityAnswerPassed: true, message: "" });
    } else {
      this.setState({
        message: "Please check you have entered your security answer correctly"
      });
    }
  }

  handleUpdatedPassword() {
    axios
      .patch(`http://localhost:4000/users/${this.state.email}`, {
        password: this.state.updatedPassword
      })
      .then(
        this.setState({
          message:
            "Your password has been successfully changed, you are now able to sign in"
        })
      );
  }

  render() {
    return (
      <>
        <Header header="Forgot Password?" />
        <div class="main">
          <div class="row">
            <div class="form-p">
              {!this.state.emailHasBeenInput && (
                <>
                  <Intro intro="Please enter your Nationwide email address" />
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      this.getUserData();
                    }}
                  >
                    <Input
                      type="email"
                      placeholder="Enter Nationwide Email Address"
                      name="email"
                      required
                      onChange={this.onChange}
                    />
                    <Submit />
                  </form>
                </>
              )}
              {this.state.emailHasBeenInput &&
                !this.state.securityAnswerPassed && (
                  <div className="securityQuestions">
                    <label>Security Question</label>
                    <p>{this.state.securityQuestion}</p>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        this.handleSecurityQuestion();
                      }}
                    >
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
              {this.state.securityAnswerPassed && (
                <>
                  <form
                    form
                    onSubmit={e => {
                      e.preventDefault();
                      this.handleUpdatedPassword();
                    }}
                  >
                    <Intro intro="Thank you, please enter a new password" />
                    <Input
                      type="password"
                      placeholder="Enter new password"
                      name="updatedPassword"
                      required
                      onChange={this.onChange}
                    />
                    <Submit />
                  </form>
                </>
              )}
              <p>{this.state.message}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ForgotPassword;
