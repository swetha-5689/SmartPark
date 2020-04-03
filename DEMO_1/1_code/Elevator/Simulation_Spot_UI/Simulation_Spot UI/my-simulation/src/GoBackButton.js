import React, { Component } from "react"; //importing necessary libraries
import { Button } from "reactstrap"; //importing button component from the reactstrap
//component page
class GoBackButton extends Component {
  render() {
    return (
      //This button helps us return to the main page, the style is what changed it's attribute
      <div className="mb-2 text-center" style={{ marginTop: "5%" }}>
        <Button variant="contained" color="primary" size="lg">
          Return to Main Page
        </Button>
      </div>
    );
  }
}

export default GoBackButton;
