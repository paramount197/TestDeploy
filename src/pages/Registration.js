import React from "react";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Dropdown from "../block/Dropdown";
import Input from "../block/Input";
import "../styles/registration.css";
import Submit from "../block/Submit";

const tdpData = require("../data/tdpData.json");
const securityQuestions = require("../data/securityQuestions.json");

const Registration = () => {
  return (
    <>
      <Header header="Registration page" />
      <div className="main">
        <div className="row">
          <div className="form-p">
            <Intro intro="Please enter the details" />
            <form name="Registration" onSubmit>
              <Input
                type="text"
                placeholder="First-Name*"
                name="fname"
                required
              />
              <Input
                type="text"
                placeholder="Last-Name*"
                name="lname"
                required
              />
              <Input
                type="email"
                placeholder="Email-Address*"
                name="email"
                required
              />
              <Input
                type="password"
                placeholder="Password*"
                name="password"
                required
              />
              <Input
                type="password"
                placeholder="Confirm Password*"
                name="passwordConfirm"
                required
              />
              <Input
                type="tel"
                name="phone"
                required
                placeholder="Enter number*"
                pattern="\d{10,11}"
              />
              <div className="selectDropdown">
                <label>Security Question</label>
                <select>
                  <Dropdown
                    intakeProgrammeDetails={
                      securityQuestions.securityQuestion.Questions
                    }
                  />
                </select>
              </div>
              <Input
                type="text"
                placeholder="Write Answer Here"
                name="Answer"
                required
              />
              <div className="selectDropdown">
                <label>TDP Intake</label>
                <select>
                  <Dropdown
                    intakeProgrammeDetails={tdpData.tdpDetails.intake}
                  />
                </select>
              </div>
              <div className="selectDropdown">
                <label>TDP Programme</label>
                <select>
                  <Dropdown
                    intakeProgrammeDetails={tdpData.tdpDetails.programme}
                  />
                </select>
              </div>
              <Submit />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;