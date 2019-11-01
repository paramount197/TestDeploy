import React from "react";
import Button from "../block/Button";
import Intro from "../block/Intro";
import EventList from "../block/List";

function Welcome() {
  return (
    <>
      <Intro />
      <h1>Welcome page</h1>
      <p>Welcome to our amazing TDP calendar page</p>
      <h2>Please enter your name</h2>
      <input></input>
      <Button name="submit" />
      <EventList eventName="Open Forum" eventDate="1st of January" />
      <EventList eventName="WellBeing" eventDate="1st of December" />
    </>
  );
}

export default Welcome;
