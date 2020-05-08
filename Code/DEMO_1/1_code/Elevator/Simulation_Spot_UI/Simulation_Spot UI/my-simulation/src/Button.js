import React, { Component } from "react"; //importing necessary libraries
import { Button } from "reactstrap"; //importing reactstrap to work with more attractive styles for the components
//component page
class ExButton extends Component {
  render() {
    return (
      //specific button with attributes
      <div className="mb-2 text-center" style={{ marginTop: "5%" }}>
        <Button variant="contained" color="primary" size="lg">
          Car Comes to Elevator Terminal{" "}
          {/*styling the Search button in a specific way to put it on the home page */}
        </Button>
      </div>
    );
  }
}

export default ExButton;
/*
<Button color="secondary">secondary</Button>{' '}
<Button color="success">success</Button>{' '}
<Button color="info">info</Button>{' '}
<Button color="warning">warning</Button>{' '}
<Button color="danger">danger</Button>{' '}
<Button color="link">link</Button>
*/
