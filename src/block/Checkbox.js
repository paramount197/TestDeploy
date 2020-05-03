import React from "react";

const Checkbox = (props) => {
  return props.checkboxOptions.map((intakeName) => (
    <div>
      <label for={intakeName}>
        {" "}
        {intakeName}
        {/* {(onchange = props.onChange)} */}
        <input
          type="checkbox"
          //id={props.name}
          name={intakeName}
          value={intakeName}
          onChange={props.onChange}
        />
      </label>
    </div>
  ));
};

export default Checkbox;
