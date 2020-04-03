import React, { Component } from "react"; //importing necessary libraries
import { Button } from "reactstrap"; //importing reactstrap to work with more attractive styles for the components
//component page
class FailButton extends Component {
  render() {
    return (
      //specific button with attributes
      <div className="mb-2 text-center" style={{ marginTop: "5%" }}>
        <Button variant="contained" color="primary" size="lg">
          Not Found{" "}
          {/*styling the Search button in a specific way to put it on Not Scanned Page */}
        </Button>
      </div>
    );
  }
}

export default FailButton;
