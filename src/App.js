import React from "react";
import "./App.css";
import Button from "./block/Button";

function App() {
  var date = new Date();
  var getdate = date.toLocaleString();
 
  return (
    <>
    <h1>------App.js-----</h1>
      <Button name={getdate}/>
     </>
  );
}

export default App;