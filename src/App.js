import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./block/Button";
import Welcome from "./pages/Welcome";

function App() {
  // Change pageNumber to a number for you to work on and ONLY see your page.
  // D 1, A 2, O 3, G 4
  var pageNumber = 0;
  return (
    <>
      {/*Ifstatement below to only show welcome page if pageNumber is 0*/}
      {pageNumber === 0 && <Welcome />}

    

    </>
  );
}

export default App;
