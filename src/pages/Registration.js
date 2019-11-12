import React from "react";
import Header from "../block/Header";
import Button from "../block/Button";
import Intro from "../block/Intro";

// Questions
// Would you pass header name hear or from app.js as props

//Actions
// pass intro text as props
// Review input fields in React
// Create the input fields
// create Button
// if time try and store the data in local storage and show it om new page

const Registration = props => {
  return (
    <>
      <Header header="Registration page" />;
      <Intro />
      <Button />
    </>
  );
};

export default Registration;
