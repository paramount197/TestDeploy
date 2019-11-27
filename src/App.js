import React from "react";
import logo1 from "./Images/Nationwidelogo.jpeg"
import "./App.css";
import Image from "./block/Image";
import Button from "./block/Button";
import Clock from "./block/Clock";

function App() {
  var date = new Date();
  var getdate = date.toLocaleString();
 
  return (
    <>
    <Clock />
      <Image src={logo1} styleName="eventPageImage"/>
      <Button name={getdate}/>
    </>
  );
}

export default App;