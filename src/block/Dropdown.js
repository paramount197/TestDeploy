import React from "react";
import DropDownOption from "./DropDownOption";

const Dropdown = props => {
  return props.intakeProgrammeDetails.map(option => (
    <DropDownOption intakeValue={option} intakeText={option} />
  ));
};

export default Dropdown;
