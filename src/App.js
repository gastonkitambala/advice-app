import React from "react";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Advice from "./components/Advice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Row>
          <Col style={{ marginTop: 80 }}>
            <Advice />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
