import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import axios from "axios";
class AddVehicle extends React.Component {
  render() {
    return (
      <div class="page">
        <Form>
          <h1>Vehicle Information</h1>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Make</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Model</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Color</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>License PLate</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <>
            <Button
              variant="dark"
              as="input"
              type="submit"
              value="Add Vehicle"
            />{" "}
          </>
        </Form>
      </div>
    );
  }
}
export default AddVehicle;
