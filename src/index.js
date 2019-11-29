import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";
import logo1 from "./images/Nationwidelogo.jpeg"
import Image from "./block/Image";
import SignIn from "./pages/SignIn";

const routing = (
  <Router>
    <Link to="/">
     <Image src={logo1} styleName="eventPageImage" />
    </Link>
     <div>
       <ul>
         <li>
            <Link to="/">Home </Link>
         </li>
         <li>
           <Link to="/welcome"> Welcome </Link>
          </li>
         <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/signin">Sign-In</Link>
          </li>
       </ul>
     </div>
      <Switch>
        <Route exact path="/" component={App} />
       <Route path="/welcome" component={Welcome} />
       <Route path="/registration" component={Registration} />
       <Route path="/signin" component={SignIn} />
       <Route component={NotFound} />
     </Switch>
   </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
