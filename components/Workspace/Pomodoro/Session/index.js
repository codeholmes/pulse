import React from "react";
import styles from "./styles.module.css";

export default function Session(props) {
  function increaseTime() {
    if (props.session === 120) {
      return;
    }
    props.increaseSession();
  }

  function decreaseTime() {
    if (props.session === 25) {
      return;
    }
    props.decreaseSession();
  }

  return (
    <div>
      <div className={styles.SessionTitle}>Study</div>
      <div className={styles.Row}>
        <button className={styles.Buttons} onClick={increaseTime}>
          +
        </button>
        <div className={styles.Digit}>{props.session}</div>
        <button className={styles.Buttons} onClick={decreaseTime}>
          -
        </button>
      </div>
    </div>
  );
}
