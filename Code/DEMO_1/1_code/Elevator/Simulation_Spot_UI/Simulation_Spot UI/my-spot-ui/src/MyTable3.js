import React from "react"; //importing different libraries
import { Container, Row, Col } from "reactstrap"; //using the container component from react strap

const MyTable3 = props => {
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
          C1
        </Col>
        <Col className="justify-content-md-center border border-primary">
          C2
        </Col>
        <Col className="justify-content-md-center border border-primary">
          C3
        </Col>
        <Col className="justify-content-md-center border border-primary">
          C4
        </Col>
        <Col className="justify-content-md-center border border-primary">
          C5
        </Col>
      </Row>
      <Row className="justify-content-md-center border border-primary">
        <Col className="justify-content-md-center border border-primary">
          C6
        </Col>
        <Col className="justify-content-md-center border border-primary">
          C7
        </Col>
        <Col className="justify-content-md-center border border-primary">
          C8
        </Col>
        <Col className="justify-content-md-center border border-primary">
          C9
        </Col>
        <Col className="justify-content-md-center border border-primary">
          C10
        </Col>
      </Row>
    </Container>
  );
};

export default MyTable3;
