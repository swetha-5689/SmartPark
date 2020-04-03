import React, { Component } from "react"; //importing specific libraries
import "./App.css";
import { Link } from "react-router-dom"; //used for linking pages together
import GoBackButton from "./GoBackButton"; //button component is being imported

function NotFound() {
  //Not Found Page
  return (
    <div className="App">
      <h1
        style={{
          //set the attributes of the text
          color: "rgba(0, 0, 0, 1.0)",
          fontSize: 50,
          textAlign: "center",
          marginTop: 60
        }}
      >
        We found no reservation under your name. <br />
        Please try again or Proceed to the Walk-In Terminal.
      </h1>
      <Link to="/">
        {" "}
        {/*link to the home page*/}
        <GoBackButton /> {/*the button that was created is being used here*/}
      </Link>
    </div>
  );
}

export default NotFound;
