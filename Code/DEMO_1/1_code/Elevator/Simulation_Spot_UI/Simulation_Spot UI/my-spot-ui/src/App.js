import React, { Component } from "react"; //importing libraries
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //Bootstrap is to make the components that are prettier than normal react components
import MyTable from "./MyTable"; //importing the different JS table components for the spot UI
import MyTable2 from "./MyTable2";
import MyTable3 from "./MyTable3";
import MyTable4 from "./MyTable4";
import MyTable5 from "./MyTable5";
//the main page that connects all the tables together
function App() {
  return (
    <div className="App">
      <h1
        style={{
          //styled text
          color: "black",
          fontFamily: "Georgia",
          fontWeight: "bolder"
        }}
      >
        {" "}
        Spots{" "}
      </h1>
      <br /> {/* inserting line break*/}
      <MyTable />
      {/* rendering different tabular components in the file in order*/}
      <br />
      <br />
      <MyTable2 />
      <br />
      <br />
      <MyTable3 />
      <br />
      <br />
      <MyTable4 />
      <br />
      <br />
      <MyTable5 />
    </div>
  );
}

export default App;
