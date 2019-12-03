import React from "react";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Dropdown from "../block/Dropdown";
import Input from "../block/Input";
import "../styling/registration.css";

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
      <Intro intro="Please create an account" />
      <form name="Registration" onSubmit>
        <Input label="First Name" type="text" name="fname" required />
        <Input label="Last Name" type="text" name="lname" required />
        <Input label="Email Address" type="email" name="email" required />
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          required
          placeholder="Enter number"
          styleName="test"
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
        <Input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Registration;
