import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Research extends Component {
  state = {};

  render() {
    return (
      <div>
        <input
          placeholder="Enter a keyword"
          onChange={this.props.nextAdv}
          style={{ borderRadius: "25" }}
        ></input>
        <Button variant="danger">Search an advice</Button>
      </div>
    );
  }
}

export default Research;
