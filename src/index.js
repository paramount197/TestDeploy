import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Registration from "./pages/Registration";
import UsersGuide from "./pages/UsersGuide";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import ImageGallery from "./pages/ImageGallery";
import ForgotPassword from "./pages/ForgotPassword";
import Image from "./block/Image";
import Clock from "./block/Clock";
import NewNationwideLogo from "./images/NewNationwideLogo.jpeg";
import Footer from "../src/block/Footer";
import EventCreation from "./pages/EventCreation";

const routing = (
  <>
    <Router>
      <div className="header">
        <Link to="/">
          <Image
            src={NewNationwideLogo}
            styleName="eventPageImage"
            alt="Nationwide logo"
          />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/usersguide">User Guide</Link>
          </li>
          <li>
            <Link to="/imagegallery">Image Gallery</Link>
          </li>
          <li className="clock">
            <Clock />
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/registration" component={Registration} />
        <Route path="/signin" component={SignIn} />
        <Route path="/profile" component={Profile} />
        <Route path="/eventCreation" component={EventCreation} />
        <Route path="/usersguide" component={UsersGuide} />
        <Route path="/imagegallery" component={ImageGallery} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
