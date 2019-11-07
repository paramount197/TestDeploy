import React from "react";
import Button from "../block/Button";
import Header from "../block/Header";

function Welcome() {
  return (
    <>
      <Header header="TDP Events Page"/>
      <Header header="Other test"/>
      <p>Welcome to our amazing TDP calendar page</p>
      <h2>Please enter your name</h2>
      <input></input>
      <Button name="submit" />
    </>
  );
}

export default Welcome;
