import React, { Component } from "react";
import { getDefaultWatermarks } from "istanbul-lib-report";

class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.setState({ time: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <p>{this.state.time.toLocaleTimeString()}</p>;
  }
}

export default Clock;
