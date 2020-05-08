import React from "react"; //importing different libraries
import { Container, Row, Col } from "reactstrap"; //using the container component from react strap

const MyTable4 = props => {
  return (
    <Container //styling the container in a specific way
      className="themed-container border border-primary"
      fluid="lg"
      style={{
        backgroundColor: "lightblue",
        borderWidth: "thick",
        fontFamily: "Georgia",
        fontWeight: "bolder",
        fontSize: "larger",
        color: "purple"
      }}
    >
      <Row className="justify-content-md-center border border-primary">
        {/*setting the row and column attributes with the class names */}
        <Col className="justify-content-md-center border border-primary">
          D1
        </Col>
        <Col className="justify-content-md-center border border-primary">
          D2
        </Col>
        <Col className="justify-content-md-center border border-primary">
          D3
        </Col>
        <Col className="justify-content-md-center border border-primary">
          D4
        </Col>
        <Col className="justify-content-md-center border border-primary">
          D5
        </Col>
      </Row>
      <Row className="justify-content-md-center border border-primary">
        <Col className="justify-content-md-center border border-primary">
          D6
        </Col>
        <Col className="justify-content-md-center border border-primary">
          D7
        </Col>
        <Col className="justify-content-md-center border border-primary">
          D8
        </Col>
        <Col className="justify-content-md-center border border-primary">
          D9
        </Col>
        <Col className="justify-content-md-center border border-primary">
          D10
        </Col>
      </Row>
    </Container>
  );
};

export default MyTable4;
