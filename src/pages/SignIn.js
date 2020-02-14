import React from "react";
import axios from "axios";
import "../styles/SignIn.css";
import Header from "../block/Header";
import Input from "../block/Input";
import Submit from "../block/Submit";
import Button from "../block/Button";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      user: {}
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkLoginDetails = () => {
    if (
      this.state.password === this.state.user[0].password &&
      this.state.id === this.state.user[0].id
    ) {
      if (this.state.user[0].tdpManagement === "Yes") {
        window.location.href = "http://localhost:3000/eventCreation";
      } else {
        window.location.href = "http://localhost:3000/profile";
      }
    } else {
      this.handleIncorrectDetails();
    }
  };

  handleIncorrectDetails = () => {
    this.setState({
      response: "Please check you have entered your details correctly"
    });
  };

  onSubmit = e => {
    e.preventDefault();
    axios
      .get(`http://localhost:4000/users?id=${this.state.id}`)
      .then(result => {
        this.setState({ user: result.data }, function() {
          if (this.state.user.length !== 0) {
            this.checkLoginDetails();
          } else {
            this.handleIncorrectDetails();
          }
        });
      });
  };

  render() {
    return (
      <>
        <Header header="Welcome Back" />
        <form onSubmit={this.onSubmit}>
          <div class="main">
            <div class="row">
              <div class="form-p">
                <form>
                  <Input
                    type="text"
                    placeholder="Username (Your email address)"
                    name="id"
                    required
                    onChange={this.onChange}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    required
                    onChange={this.onChange}
                  />
                  <Submit />
                </form>
                <p className="response">{this.state.response}</p>
                <p>Forgot your password?</p>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SignIn;
