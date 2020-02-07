import React from "react";
import "../styles/SignIn.css";
import Header from "../block/Header";
import Input from "../block/Input";
import { NavLink } from "react-router-dom";
import Submit from "../block/Submit";
import Button from "../block/Button";

function SignIn(props) {
  return (
    <>
      <Header header="Welcome Back" />
      <div class="main">
        <div class="row">
          <div class="form-p">
            <form>
              <Input
                type="text"
                placeholder="Username"
                name="Username"
                required
              />
              <Input
                type="password"
                placeholder="Password"
                name="Password"
                required
              />
              <NavLink to="/profile">
                <Submit />
              </NavLink>
              <NavLink to="/forgotpassword">
                <Button name="Forgot your Password?" />
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
