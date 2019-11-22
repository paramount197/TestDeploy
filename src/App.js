import React from "react";
import logo1 from "./images/Nationwidelogo.jpeg";
import "./App.css";
import Image from "./block/Image";
import Button from "./block/Button";

function App() {
  var date = new Date();
  var getdate = date.toLocaleString();

  return (
    <>
      <Image src={logo1} styleName="eventPageImage" />
      <Button name={getdate} />
    </>
  );
}

export default App;
