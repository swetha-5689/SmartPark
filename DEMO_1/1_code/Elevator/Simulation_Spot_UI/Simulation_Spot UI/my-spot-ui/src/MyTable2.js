import React from "react"; //importing different libraries
import { Container, Row, Col } from "reactstrap"; //using the container component from react strap

const MyTable2 = props => {
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
          B1
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B2
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B3
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B4
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B5
        </Col>
      </Row>
      <Row className="justify-content-md-center border border-primary">
        <Col className="justify-content-md-center border border-primary">
          B6
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B7
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B8
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B9
        </Col>
        <Col className="justify-content-md-center border border-primary">
          B10
        </Col>
      </Row>
    </Container>
  );
};

export default MyTable2;
