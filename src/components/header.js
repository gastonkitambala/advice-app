import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default () => (
  <Navbar
    variant="light"
    fixed="top"
    className="justify-content-center"
    style={{ backgroundColor: "#064884" }}>
    <Navbar.Brand> <marquee>Random Advice Generator</marquee></Navbar.Brand>
  </Navbar>
);