import React from "react"; //importing specific libraries
import "./App.css";
import { Link } from "react-router-dom"; //used for linking pages together
import AfterScanButton from "./Button_aftScan"; //button component is being imported
import FailButton from "./FailButton"; //button component is being imported

function NotScanned() {
  //Not Scanned Page
  return (
    <div className="App">
      <h1
        style={{
          //change the formatting of the text
          color: "rgba(0, 0, 0, 1.0)",
          fontSize: 50,
          textAlign: "center",
          marginTop: 50
        }}
      >
        <br />
        Enter Membership Number Below:
        <br />
        <br />
      </h1>
      <div class="input-group input-group-lg">
        <input
          class="form-control form-control-lg" //text box and formatting it to look a specific way
          type="text"
          placeholder="Enter Membership Number"
        />
        <div class="input-group-append">
          <Link to="/found">
            {" "}
            {/*using the router dom to link the different pages that were created with the buttons created using bootstrap
             */}
            <AfterScanButton />
          </Link>
        </div>
      </div>
      <Link to="/notFound">
        <FailButton />
      </Link>
    </div>
  );
}

export default NotScanned;
