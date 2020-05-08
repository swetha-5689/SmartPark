import React, { Component } from "react"; //importing necessary libraries
import { Button } from "reactstrap"; //importing reactstrap to work with more attractive styles for the components
//component page
class ScanButton extends Component {
  render() {
    return (
      //specific button with attributes
      <div className="mb-2 text-center" style={{ marginTop: "5%" }}>
        <Button variant="contained" color="primary" size="lg">
          Enter Membership Number{" "}
          {/*styling the Search button in a specific way to put it on the Scanned Page for the user to input their membership number */}
        </Button>
      </div>
    );
  }
}

export default ScanButton;
