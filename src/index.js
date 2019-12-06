import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Registration from "./pages/Registration";
import UsersGuide from "./pages/UsersGuide";
import NotFound from "./pages/NotFound";
import Image from "./block/Image";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Clock from "./block/Clock";
import Nationwidelogo from "./images/Nationwidelogo.jpeg";

const routing = (
  <Router>
    <Link to="/">
      <Image
        src={Nationwidelogo}
        styleName="eventPageImage"
        alt="Nationwide logo"
      />
    </Link>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/registration">Registration</Link>
        </li>
        <li>
          <Link to="/signin">Sign-in</Link>
        </li>
        <li>
          <Link to="/usersguide">UsersGuide</Link>
        </li>
        <li>
          <Clock />
        </li>
      </ul>
    </div>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/registration" component={Registration} />
      <Route path="/signin" component={SignIn} />
      <Route path="/profile" component={Profile} />
      <Route path="/usersguide" component={UsersGuide} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();