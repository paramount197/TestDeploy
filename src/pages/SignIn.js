import React from "react";
import "../styles/SignIn.css";
import Header from "../block/Header";
import Input from "../block/Input";
import { NavLink } from "react-router-dom";
import Submit from "../block/Submit";
import axios from "axios";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      password: "",
      users: []
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.state.users.map(check => {
      if (
        //need to fix this loop, should not be a map
        //should use .includes!
        this.state.password === check.password &&
        this.state.id === check.id
      ) {
        console.log(
          "matched " + check.password + " with " + this.state.password,
          "matched" + check.id + "with" + this.state.id
        );
        window.location.href = "http://localhost:3000/profile";
      } else {
        alert(
          "Please check you have entered your email and password correctly"
        );
      }
    });
  };
  componentDidMount() {
    axios.get("http://localhost:4000/users").then(res => {
      console.log("on load getting the logins", res);
      this.setState({ users: res.data });
      //console.log(this.state.users[1].password);
    });
  }

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
