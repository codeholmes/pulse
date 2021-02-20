import React from "react";
import styles from "./styles.module.css";

export default function Break(props) {
  function increaseTime() {
    if (props.break === 15) {
      return;
    }
    props.increaseBreak();
  }

  function decreaseTime() {
    if (props.break === 1) {
      return;
    }
    props.decreaseBreak();
  }

  return (
    <div>
      <div className={styles.BreakTitle}>Break</div>
      <div className={styles.Row}>
        <button className={styles.Buttons} onClick={increaseTime}>
          +
        </button>
        <div className={styles.Digit}>{props.break}</div>
        <button className={styles.Buttons} onClick={decreaseTime}>
          -
        </button>
      </div>
    </div>
  );
}