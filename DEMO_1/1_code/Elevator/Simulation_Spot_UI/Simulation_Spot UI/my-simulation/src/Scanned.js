import React, { Component } from "react"; //importing specific libraries
import "./App.css";
import { Link } from "react-router-dom"; //used for linking pages together
import ScanButton from "./Button_scan"; //button component is being imported
import ProceedButton from "./ProceedButton"; //button component is being imported
//Scanned JS page, where the license plate is scanned
function Scanned() {
  return (
    <div className="App">
      <h1
        style={{
          //set the attributes of the text
          color: "rgba(0, 0, 0, 1.0)",
          fontSize: 60,
          textAlign: "center",
          marginTop: 50
        }}
      >
        Scanning License Plate
      </h1>
      <br />
      <br />
      <div class="spinner-border" role="status">
        {" "}
        {/*the loading spinner class with it's attributes  */}
        <span class="sr-only">Loading...</span>
      </div>
      <Link to="/found">
        {/*using the router dom to link the different pages that were created with the buttons created using
         bootstrap*/}
        <ProceedButton />
      </Link>
      <Link to="./notScanned">
        <ScanButton />
      </Link>
    </div>
  );
}

export default Scanned;
