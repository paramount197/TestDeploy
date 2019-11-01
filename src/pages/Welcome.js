import React from "react";
import Button from "../block/Button";
import Intro from "../block/Intro";
import ListItem from "../block/ListItem";

function Welcome() {
  return (
    <>
      <Intro />
      <h1>Welcome page</h1>
      <p>Welcome to our amazing TDP calendar page</p>
      <h2>Please enter your name</h2>
      <input></input>
      <Button name="submit" />
      <div className="eventList">
        <ul>
          <ListItem eventName="Open Forum" eventDate="1st of January" />
          <ListItem eventName="WellBeing" eventDate="1st of December" />
        </ul>
      </div>
    </>
  );
}

export default Welcome;
