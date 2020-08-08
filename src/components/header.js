import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default () => (
  <Navbar
    variant="dark"
    fixed="top"
    className="justify-content-center"
    style={{ backgroundColor: "#064884" }}
  >
    <Navbar.Brand>Random Advice Generator</Navbar.Brand>
  </Navbar>
);
