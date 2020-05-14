import React from "react";
import "../styles/checkbox.css";

const Checkbox = (props) => {
  return (
    <div className={props.className}>
      {props.checkboxOptions.map((intakeName) => (
        <label for={intakeName} className="checkboxLabel">
          <input
            type="checkbox"
            id={props.name}
            name={intakeName}
            value={intakeName}
            onChange={props.onChange}
          />
          {intakeName}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
