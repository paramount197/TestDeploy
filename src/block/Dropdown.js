import React from "react";
import DropOption from "./DropOption";

//how could I add a please select option?

const Dropdown = props => {
  return props.intakeProgrammeDetails.map(option => (
    <DropOption intakeValue={option} intakeText={option} />
  ));
};

export default Dropdown;
