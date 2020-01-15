import React from "react";
import axios from "axios";

const Getter = props => {
  let results;

  axios.get(this.props.url).then(res => {
    console.log("this is the user response", res);
    results = res;
  });
  return results;
};

export default Getter;
