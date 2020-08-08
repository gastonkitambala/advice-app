import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default (props) => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <div
            style={{
              textAlign: "",
              justifyContent: "center",
              marginLeft: "40",
              marginTop: "800",
            }}
          >
            {props.myAdv}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
