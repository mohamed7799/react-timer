import React, { Component } from "react";
import "./App.css";
import Header from "./comp/header/header";
import Timer from "./comp/timer/timer";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <div className="timer-container">
          <Timer></Timer>
        </div>
      </div>
    );
  }
}
