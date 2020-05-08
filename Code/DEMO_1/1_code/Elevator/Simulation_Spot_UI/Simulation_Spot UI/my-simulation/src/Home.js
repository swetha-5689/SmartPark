import React from "react"; //import the specific libraries
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //import bootstrap
import ExButton from "./Button"; //import button component from the src file
import { Link } from "react-router-dom"; //import reacter router to link pages together

function Home() {
  //Home Page
  return (
    <div className="App">
      <h1
        style={{
          //setting the attributes of the home page of the simulation of the header text
          color: "rgba(0, 0, 0, 1.0)",
          fontSize: 60,
          textAlign: "center",
          marginTop: 150
        }}
      >
        Car Enters Garage
      </h1>
      <Link to="/scanned">
        {" "}
        {/*using the Button component which has been imported, and linking it to the scanned page*/}
        <ExButton />
      </Link>
    </div>
  );
}

export default Home;
