import React from "react";
import Header from "../block/Header";
import Intro from "../block/Intro";
import Dropdown from "../block/Dropdown";
import Input from "../block/Input";
import "../styling/registration.css";

const tdpData = require("../data/data.json");

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
            <Dropdown intakeProgrammeDetails={tdpData.tdpDetails.intake} />
          </select>
        </div>
        <div className="programme">
          <label>TDP Programme</label>
          <select>
            <Dropdown intakeProgrammeDetails={tdpData.tdpDetails.programme} />
          </select>
        </div>
        <Input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Registration;
