// amend intro to strap line and pass as props
import React from "react";
import DropOption from "./DropOption";

const Dropdown = props => {
  return props.intakeProgrammeDetails.map(option => (
    <DropOption intake={option.intake} />
  ));
};

export default Dropdown;
