import React from "react";
import DropDownOption from "./DropDownOption";

const Dropdown = props => {
  return props.dropdownOptions.map(option => (
    <DropDownOption
      text={option}
      value={option}
    />
  ));
};

export default Dropdown;
