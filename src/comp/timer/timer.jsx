import React, { Component } from "react";
import Display from "./display/display";
import Butttons from "./buttons/buttons";
import "./timer.css";
export default class timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "0",
      realTime: "00 : 00 : 00",
      timeId: null,
      active: false,
    };
  }

  formatTime = (t) => {
    if (t.length === 1) {
      return "0" + t;
    } else {
      return t;
    }
  };

  roundTime = () => {
    let sec, min, hr;
    let time = Number(this.state.time);
    hr = this.formatTime(Math.floor(time / 3600).toString());
    time = time % 3600;
    min = this.formatTime(Math.floor(time / 60).toString());
    sec = time % 60;
    sec = this.formatTime(sec.toString());
    this.setState({ realTime: `${hr} : ${min} : ${sec}` });
  };

  change = (e) => {
    if (e.target.value === "") {
      this.setState({ time: "0" }, () => {
        this.roundTime();
      });
    } else if (e.target.value[0] === "0") {
      this.setState({ time: e.target.value.substr(1) }, () => {
        this.roundTime();
      });
    } else {
      this.setState({ time: e.target.value }, () => {
        this.roundTime();
      });
    }
  };

  start = () => {
    this.setState({ active: true }, () => {
      let timeid = setInterval(() => {
        this.setState(
          (prvState) => {
            let temp = Number(prvState.time);
            return { time: `${--temp}`, timeId: timeid };
          },
          () => {
            this.roundTime();
          }
        );
      }, 1000);
    });
  };

  stop = () => {
    clearInterval(this.state.timeId);

    this.setState(
      {
        time: "0",
        realTime: "00 : 00 : 00",
        timeId: null,
        active: false,
      },
      () => {
        alert("the time has ended");
      }
    );
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.realTime === this.state.realTime) {
      return false;
    } else {
      if (this.state.realTime === "00 : 00 : 00" && this.state.active) {
        this.stop();
        return false;
      } else {
        return true;
      }
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="timer">
        <Display
          realTime={this.state.realTime}
          value={this.state.time}
          change={this.change}
          active={this.state.active}
        ></Display>
        <Butttons
          active={this.state.active}
          start={this.start}
          stop={this.stop}
        ></Butttons>
      </div>
    );
  }
}
