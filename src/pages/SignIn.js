import React from "react";
import "../styles/SignIn.css";
import Header from "../block/Header";
import Input from "../block/Input";
import Submit from "../block/Submit";
import axios from "axios";

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

  onSubmit = e => {
    e.preventDefault();
    axios.get(`http://localhost:4000/users?id=${this.state.id}`).then(res => {
      console.log("on load getting the logins", res);
      this.setState({ user: res.data }, function() {
        if (
          this.state.password === this.state.user[0].password &&
          this.state.id === this.state.user[0].id
        ) {
          window.location.href = "http://localhost:3000/profile";
        } else {
          alert(
            "Please check you have entered your email and password correctly"
          );
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
