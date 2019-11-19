import React from "react";
import logo1 from "./Images/Nationwidelogo.jpeg"
import "./App.css";
import Welcome from "./pages/Welcome";
import Image from "./block/Image";

function App() {
  var date = new Date();
  var getdate = date.toLocaleString();
  
  return (
      <Image src={logo1} />
  );
}

export default App;
