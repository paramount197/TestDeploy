import React from "react";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Dropdown from "../block/Dropdown";
import Input from "../block/Input";
import "../styling/input.css";
import "../styling/registration.css";

const intake = [
  "September 2018",
  "May 2019",
  "September 2019",
  "May 2020",
  "September 2020"
];
const programme = ["Accelerator", "IP", "Degree Apprenticeship"];

//Actions
// pass intro text as props

const Registration = props => {
  return (
    <>
      <Header header="Registration page" />
      <Intro intro="Please create an account" />
      <form name="Registration" onSubmit>
        <Input label="First Name" type="text" name="fname" />
        <Input label="Last Name" type="text" name="lname" />
        <Input label="Email Address" type="email" name="email" />
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          pattern=" [0-9]{11}"
          required
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
        <Input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Registration;
