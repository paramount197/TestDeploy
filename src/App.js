import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./block/Button";
import Welcome from "./pages/Welcome";
import Header from "./block/Header";
import { green } from "ansi-colors";

function App() {
  // Change pageNumber to a number for you to work on and ONLY see your page.
  // D 1, A 2, O 3, G 4
  var pageNumber = 0;
  var date = new Date();
  var getdate = date.toLocaleString();
  const divStyle = {
    color: 'RED',

    // backgroundImage: 'url(' + imgUrl + ')',
  };

  
  return (
    <>
      {/*Ifstatement below to only show welcome page if pageNumber is 0*/}
      <Button name={getdate}/>
      {/* <div style={divStyle}>SIGN IN</div>; */}
      <div className="buttonDiv">
          <Button name="SIGN IN" />
          <Button name="REGISTER" />
          <Button name="USER-GUIDE" />
      </div>
      {pageNumber === 0 && <Welcome />}
      
    



    

    </>
  );
}

export default App;
