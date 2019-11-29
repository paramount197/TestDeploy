import React from "react";

const DropOption = props => {
  return <option value={props.intakeValue}>{props.intakeText}</option>;
};

export default DropOption;
