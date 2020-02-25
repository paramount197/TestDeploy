import React from "react";
import DropDownOption from "./DropDownOption";

const Dropdown = props => {
  return props.intakeProgrammeDetails.map(option => (
    <DropDownOption
      intakeValue={option.value}
      intakeText={option.name}
      onChange={props.onChange}
    />
  ));
};

export default Dropdown;
