import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import { MDBContainer } from "mdbreact";
import axios from "axios";
import Moment from "react-moment";
class Pricing extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOverstayChange = this.handleOverstayChange.bind(this);
    this.handleNoShowChange = this.handleNoShowChange.bind(this);
    this.handleWalkInChange = this.handleWalkInChange.bind(this);
    this.handleHourlyChange = this.handleHourlyChange.bind(this);
    this.state = {
      validated: false,
      overstay: 0,
      hourly: 0,
      noShow: 0,
      walkIn: 0,
    };
  }
  componentDidMount() {
    axios
      .get("https://cryptic-depths-70075.herokuapp.com/api/prices/")
      .then((response) => {
        this.setState({
          overstay: response.data[0].overstay,
          hourly: response.data[0].hourly,
          walkIn: response.data[0].walkIn,
          noShow: response.data[0].noShow
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleOverstayChange(event) {
    this.setState({ overstay: event.target.value });
  }
  handleNoShowChange(event) {
    this.setState({ noShow: event.target.value });
  }
  handleWalkInChange(event) {
    this.setState({ walkIn: event.target.value });
  }
  handleHourlyChange(event) {
    this.setState({ hourly: event.target.value });
  }
  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ validated: true });
    axios({
      method: "post",
      url: "https://cryptic-depths-70075.herokuapp.com/api/prices/",
      data: {
        overstay: this.state.overstay,
        hourly: this.state.hourly,
        noShow: this.state.noShow,
        walkIn: this.state.walkIn
      },
    }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  render() {
    return (
      <>
      <h3 className="md-5">
          Prices for <Moment format="LLLL">{Date.now()}</Moment>
        </h3>
        <MDBContainer className="w-100 p-3 md -5">
          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={this.handleSubmit}
          >
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Overstay Fee</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    onChange={this.handleOverstayChange}
                    value={this.state.overstay}
                    type="number"
                    placeholder={this.state.overstay}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid price.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Hourly</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    onChange={this.handleHourlyChange}
                    value={this.state.hourly}
                    type="number"
                    placeholder={this.state.hourly}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid price.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Walk-in</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    onChange={this.handleWalkInChange}
                    value={this.state.walkIn}
                    type="number"
                    placeholder={this.state.walkIn}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid price.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>No-Show Fee</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    onChange={this.handleNoShowChange}
                    value={this.state.noShow}
                    type="number"
                    placeholder={this.state.noShow}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid price.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Button type="submit">Change Prices</Button>
          </Form>
        </MDBContainer>
      </>
    );
  }
}

export default Pricing;
