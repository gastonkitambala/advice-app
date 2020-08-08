import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class Buttons extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Button
              style={{ marginLeft: 368 }}
              variant="danger"
              size="lg"
              onClick={this.props.getNextAdvice}
            >
              Next Advice
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Buttons;
