import React, { Component } from "react"; //importing necessary libraries
import "./App.css";
import { Link } from "react-router-dom"; //used to link pages together
import ProceedButton from "./ProceedButton"; //importing the component that needs to be rendered
//Found Page
function Found() {
  return (
    <div className="App">
      <h3
        style={{
          //setting the style of the text on the webpage
          color: "rgba(0, 0, 0, 1.0)",
          fontSize: 50,
          textAlign: "center",
          marginTop: 125
        }}
      >
        Hello Mr. Rogers, <br /> Your Spot Number is 24 on Level 6!
      </h3>
      <Link to="/">
        <ProceedButton /> {/*Button to move to the home page*/}
      </Link>
    </div>
  );
}

export default Found;
