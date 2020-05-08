import React from "react"; //importing different libraries
import { Container, Row, Col } from "reactstrap"; //using the container component from react strap

const MyTable = props => {
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
        {" "}
        {/*setting the row and column attributes with the class names */}
        <Col className="justify-content-md-center border border-primary">
          A1
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A2
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A3
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A4
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A5
        </Col>
      </Row>
      <Row className="justify-content-md-center border border-primary">
        <Col className="justify-content-md-center border border-primary">
          A6
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A7
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A8
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A9
        </Col>
        <Col className="justify-content-md-center border border-primary">
          A10
        </Col>
      </Row>
    </Container>
  );
};

export default MyTable;
