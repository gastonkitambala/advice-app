import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Research from "./research";
import Buttons from "./buttons";
import axios from "axios";

import Loader from "./loader";
import AdviceDetails from "./AdviceDetails";
import { Container } from "react-bootstrap";
const apiEndpoint = "https://api.adviceslip.com/advice";
const searchApiEndpoint = "https://api.adviceslip.com/advice/search/";

class Advice extends Component {
  state = {
    advices: null,
    loading: true,
    results: [],
    randomAdv: "",
  };

  getAdv(advArray) {
    console.log("string");
    console.log(advArray);
    console.log(advArray[Math.floor(Math.random() * advArray.length)].advice);
    return advArray[Math.floor(Math.random() * advArray.length)].advice;
  }

  getKeyword = (e) => {
    // get the task name being entered.
    console.log(e.target.value);

    axios
      .get(searchApiEndpoint + e.target.value)
      .then((res) => {
        console.log(res.data);
        if (res.data.slips) {
          this.setState({ results: res.data.slips });
          this.setState({ randomAdv: this.getAdv(res.data.slips) });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchData() {
    axios
      .get(apiEndpoint)
      .then((res) => {
        console.log(res.data);
        this.setState({ advices: res.data.slip.advice, loading: false });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  nextAdvice = () => {
    this.setState({ loading: true });
    this.fetchData();
  };

  componentDidMount() {
    this.fetchData();
  }

  renderAdvice() {
    return <AdviceDetails myAdv={this.state.advices} />;
  }

  render() {
    const { loading, advices } = this.state;
    return (
      <Container>
        <Row style={{ marginTop: 85, marginLeft: 300 }}>
          <Research nextAdv={this.getKeyword} />
        </Row>

        <Row style={{ marginTop: 60 }}>
          {loading ? <Loader /> : null}

          {advices && this.renderAdvice()}
        </Row>
        <Row>
          <AdviceDetails
            myAdv={this.state.randomAdv}
            style={{ marginLeft: "" }}
          ></AdviceDetails>
        </Row>
        <Row style={{ marginTop: 30 }}>
          <Buttons getNextAdvice={this.nextAdvice} />
        </Row>
      </Container>
    );
  }
}
export default Advice;
