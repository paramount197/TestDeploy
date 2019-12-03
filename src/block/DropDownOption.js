import React from "react";

const DropDownOption = props => {
  return <option value={props.intakeValue}>{props.intakeText}</option>;
};

export default DropDownOption;
