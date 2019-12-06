import React from "react";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Dropdown from "../block/Dropdown";
import Input from "../block/Input";
import "../styles/registration.css";
import Submit from "../block/Submit";

const intake = [
  "September 2018",
  "May 2019",
  "September 2019",
  "May 2020",
  "September 2020"
];

const programme = ["Accelerator", "IP", "Degree Apprenticeship"];

const Registration = () => {
  return (
    <>
      <Header header="Registration page" />
      <div className="main">
        <div className="row">
          <div className="form-p">
            <Intro intro="Please enter the details" />
            <form name="Registration" onSubmit>
              <Input styleName="registration" type="text" placeholder="First-Name*" name="fname" required />
              <Input styleName="registration" type="text" placeholder="Last-Name*" name="lname" required />
              <Input styleName="registration" type="email" placeholder="Email-Address*" name="email" required />
              <Input
                styleName="registration"
                type="tel"
                name="phone"
                required
                placeholder="Enter number*"
                styleName="registration"
                pattern="\d{10,11}"
              //^\+?(?:\d\s?){10,11}$ - more complicated regex but I don't
              //understand it fully, full explanation on teams
              />
              <div className="intake">
                <label>TDP Intake</label>
                <select>
                  <Dropdown intakeProgrammeDetails={intake} />
                </select>
              </div>
              <div className="programme">
                <label>TDP Programme</label>
                <select>
                  <Dropdown intakeProgrammeDetails={programme} />
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