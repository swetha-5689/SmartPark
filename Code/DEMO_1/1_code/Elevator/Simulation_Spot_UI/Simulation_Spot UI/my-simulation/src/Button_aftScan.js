import React, { Component } from "react"; //importing necessary libraries
import { Button } from "reactstrap"; //importing reactstrap to work with more attractive styles for the components
//component page
class AfterScanButton extends Component {
  //specific button with attributes
  render() {
    return (
      <div className="mb-2 text-center">
        <Button variant="contained" color="primary" size="lg">
          Search{" "}
          {/*styling the Search button in a specific way to put After Scanning the License Plate page */}
        </Button>
      </div>
    );
  }
}

export default AfterScanButton;
