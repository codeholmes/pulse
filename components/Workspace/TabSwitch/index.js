import styles from "./styles.module.css";
import TodoList from "../TodoList";
import Pomodoro from "../Pomodoro";
import React, { setState } from "react";

const DATA = [];

class TabSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pomodoro: false,
      todolist: true,
    };
  }

  ShowPomo() {
    this.setState({
      pomodoro: true,
      todolist: false,
    });
  }

  HidePomo() {
    this.setState({
      pomodoro: false,
      todolist: true,
    });
  }

  render() {
    return (
      <div className="d-flex justify-content-center text-center">
        <div className={styles.mainContainer}>
          <div className="d-flex justify-content-center text-center">
            <div className={styles.tabBox}>
              <div
                              onClick={() => this.HideTodo()}
                              onClick={() => this.ShowPomo()}


                className={styles.pomodoroTab}
              >
                Pomodoro
              </div>
              <div className="d-flex justify-content-center">
                <div
                  onClick={() => this.ShowTodo()}
                  onClick={() => this.HidePomo()}
                  className={styles.todolistTab}
                >
                  To-do List
                </div>
              </div>
              <div className={styles.trackerTab}>Tracker</div>
            </div>

            <div className={styles.tool1}>
              {this.state.todolist ? <TodoList tasks={DATA}></TodoList> : null}

              {this.state.pomodoro ? (
                <div className={styles.tool2}>
                  {this.state.pomodoro ? <Pomodoro></Pomodoro> : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TabSwitch;
