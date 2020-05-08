import React, { Component } from "react"; //importing specific libraries
import { Button } from "reactstrap"; //make the button look prettier with this library
//component page
class ProceedButton extends Component {
  render() {
    return (
      //rendering the button component into the style that we want
      <div className="mb-2 text-center" style={{ marginTop: "5%" }}>
        <Button variant="contained" color="primary" size="lg">
          Proceed
        </Button>
      </div>
    );
  }
}

export default ProceedButton;
/*
<Button color="secondary">secondary</Button>{' '}
<Button color="success">success</Button>{' '}
<Button color="info">info</Button>{' '}
<Button color="warning">warning</Button>{' '}
<Button color="danger">danger</Button>{' '}
<Button color="link">link</Button>
*/
