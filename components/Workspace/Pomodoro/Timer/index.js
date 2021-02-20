import React, { Component } from "react";
import Session from "../Session";
import styles from "./styles.module.css";
import Image from "next/image";

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      Session: true,
      TimerSecond: 0,
      intervalId: 0,
    };

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
  }

  start() {
    let intervalId = setInterval(this.decreaseTimer, 1000);

    this.setState({
      intervalId: intervalId,
    });
  }

  stop() {
    clearInterval(this.state.intervalId);
  }

  reset() {
    this.stop();
    this.props.ResetTimer();
    this.setState({
      TimerSecond: 0,
    });
  }

  decreaseTimer() {
    switch (this.state.TimerSecond) {
      case 0:
        if (this.props.TimerMinute === 0) {
          if (this.state.Session) {
            this.setState({
              Session: false,
            });
            this.props.ToggleSession(this.state.Session);
          } else {
            this.setState({
              Session: true,
            });
            this.props.ToggleSession(this.state.Session);
          }
        }

        this.props.decreaseTimerMinute();
        this.setState({
          TimerSecond: 59,
        });
        break;
      default:
        this.setState((prevState) => {
          return {
            TimerSecond: prevState.TimerSecond - 1,
          };
        });
    }
  }

  render() {
    return (
      <div>
        <div className={styles.timerStatus}>
          {this.state.Session === true ? "Study" : "Break"}
        </div>
        <span className={styles.timerFont}>{this.props.TimerMinute}</span>
        <span className={styles.timerFont}>:</span>
        <span className={styles.timerFont}>
          {this.state.TimerSecond === 0
            ? "00"
            : this.state.TimerSecond < 10
            ? "0" + this.state.TimerSecond
            : this.state.TimerSecond}
        </span>

        <div className={styles.keys}>
          <button className={styles.button1} onClick={this.start}>
            <Image
              src="/../public/start.svg"
              alt="Start"
              width={1000}
              height={550}
            />
          </button>
          <button className={styles.button2} onClick={this.stop}>
            <Image
              src="/../public/stop.svg"
              alt="Stop"
              width={800}
              height={350}
            />
          </button>
          <button className={styles.button3} onClick={this.reset}>
            <Image
              src="/../public/reset.svg"
              alt="Stop"
              width={700}
              height={350}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
