import React, { Component } from "react";
import styles from "./styles.module.css";
import Break from "./Break";
import Session from "./Session";
import Timer from "./Timer";

class Pomodoro extends Component {
  constructor() {
    super();
    this.state = {
      break: 1,
      session: 25,
      TimerMinute: 25,
    };
    this.onIncreaseSession = this.onIncreaseSession.bind(this);
    this.onDecreaseSession = this.onDecreaseSession.bind(this);
    this.onIncreaseBreak = this.onIncreaseBreak.bind(this);
    this.onDecreaseBreak = this.onDecreaseBreak.bind(this);
    this.onToggleSession = this.onToggleSession.bind(this);
    this.onDecreaseTimerMinute = this.onDecreaseTimerMinute.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onIncreaseSession() {
    this.setState((prevState) => {
      return {
        session: prevState.session + 5,
        TimerMinute: prevState.session + 5,
      };
    });
  }

  onDecreaseSession() {
    this.setState((prevState) => {
      return {
        session: prevState.session - 5,
        TimerMinute: prevState.session - 5,
      };
    });
  }

  onIncreaseBreak() {
    this.setState((prevState) => {
      return {
        break: prevState.break + 1,
      };
    });
  }

  onDecreaseBreak() {
    this.setState((prevState) => {
      return {
        break: prevState.break - 1,
      };
    });
  }

  onDecreaseTimerMinute() {
    this.setState((prevState) => {
      return {
        TimerMinute: prevState.TimerMinute - 1,
      };
    });
  }

  onToggleSession(Session) {
    if (Session) {
      this.state({
        TimerMinute: this.state.session,
      });
    } else {
      this.setState({
        TimerMinute: this.state.break,
      });
    }
  }

  onReset() {
    this.setState({
      TimerMinute: this.state.session,
    });
  }

  render() {
    return (
      <div>
        <div className={styles.Container}>
          <div className={styles.Row}>
            <div className={styles.Session}>
              <Session
                session={this.state.session}
                increaseSession={this.onIncreaseSession}
                decreaseSession={this.onDecreaseSession}
              ></Session>
            </div>

            <div className={styles.OuterCircle}>
              <div className={styles.InnerCircle}>
                <Timer
                  TimerMinute={this.state.TimerMinute}
                  break={this.state.break}
                  decreaseTimerMinute={this.onDecreaseTimerMinute}
                  ToggleSession={this.onToggleSession}
                  ResetTimer={this.onReset}
                />
              </div>{" "}
            </div>
            <div className={styles.Break}>
              <Break
                break={this.state.break}
                increaseBreak={this.onIncreaseBreak}
                decreaseBreak={this.onDecreaseBreak}
              ></Break>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pomodoro;
