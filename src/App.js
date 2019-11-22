import React from "react";
import "./App.css";
import Button from "./block/Button";

function App() {
  var date = new Date();
  var getdate = date.toLocaleString();

  return (
    <>
      <Button name={getdate}/>
    </>
  );
}

export default App;
