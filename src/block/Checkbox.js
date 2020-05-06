import React from "react";
import "../styles/checkbox.css";

const Checkbox = (props) => {
  return (
    <div className={props.className}>
      {props.checkboxOptions.map((intakeName) => (
        <label for={intakeName}>
          <br />
          {intakeName}
          <input
            type="checkbox"
            id={props.name}
            name={intakeName}
            value={intakeName}
            onChange={props.onChange}
          />
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
