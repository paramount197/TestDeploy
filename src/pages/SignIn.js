import React from "react";
import axios from "axios";
import "../styles/SignIn.css";
import Header from "../block/Header";
import Input from "../block/Input";
import Submit from "../block/Submit";
import { NavLink } from "react-router-dom";

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
    var url = "http://localhost:3000/profile/" + this.state.user[0].userId;
    if (
      this.state.password === this.state.user[0].password &&
      this.state.id === this.state.user[0].id
    ) {
      if (this.state.user[0].tdpManagement === "Yes") {
        window.location.href = "http://localhost:3000/managementhomepage"; //have redirected TDP management to - Management Home Page
      } else {
        window.location.href = url;
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
        this.setState({ user: result.data }, function () {
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
                    type="email"
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
                <NavLink to="/forgotpassword">
                  <p className="underline">Forgot your Password?</p>
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SignIn;
