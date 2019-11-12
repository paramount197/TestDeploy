import React from "react";
import logo from "./logo.svg";
import logo1 from "./Images/Nationwidelogo.jpeg"
import "./App.css";
import Button from "./block/Button";
import Welcome from "./pages/Welcome";
import Header from "./block/Header";

function App() {
  // Change pageNumber to a number for you to work on and ONLY see your page.
  // D 1, A 2, O 3, G 4
  var pageNumber = 0;
  var date = new Date();
  var getdate = date.toLocaleString();
  
  return (
   <> 
      {/*Ifstatement below to only show welcome page if pageNumber is 0*/}
      {pageNumber === 0 && <Welcome />}
      <img src={logo1} /> 
  </>
  );
}

export default App;
