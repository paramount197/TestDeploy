import React from "react";
import DropDownOption from "./DropDownOption";
import DefaultDropDownOption from "./DefaultDropDownOption";

const Dropdown = props => {
  return (
    <>
      <DefaultDropDownOption />
      {props.dropdownOptions.map(option => (
        <DropDownOption
          text={option}
          value={option}
        />
      ))}
    </>
  );
};

export default Dropdown;
