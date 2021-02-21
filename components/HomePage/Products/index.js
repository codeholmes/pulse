import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const whiteLink = styled.a`
  color: white;
`;

export default function Products() {
  return (
    <div>
      <div className={styles.productBox}>
        <div className="row d-flex justify-content-around">
          <div className="col-xs">
            <div className={styles.productBox1}>
              <span className={styles.productBox0}>
                <div className="d-flex justify-content-around">
                  <Image
                    src="/../public/todolist.svg"
                    alt="To-do List"
                    width={200}
                    height={200}
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="col-xs">
            <div className={styles.productBox2}>
              <p className={styles.productTitle}>
                <Link href="/workspace" passHref>
                  <whiteLink>
                    {<span style={{ cursor: "pointer" }}>To-do List</span>}
                  </whiteLink>
                </Link>
              </p>
              <p className={styles.productDetails}>
                Stay organised with this task management web application. It is
                integrated in your workspace section, so you can make the most
                of it.
              </p>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-around">
          <div className="col-xs">
            <div className={styles.productBox1}>
              <span className={styles.productBox0}>
                <div className="d-flex justify-content-around">
                  <Image
                    src="/../public/pomodoro.svg"
                    alt="Pomodoro Timer"
                    width={200}
                    height={200}
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="col-xs">
            <div className={styles.productBox2}>
              <p className={styles.productTitle}>Pomodoro Timer</p>
              <p className={styles.productDetails}>
                Use pomodoro timer to focus on one task. Deep focus for 25 mins.
                Take 5 mins break. Repeat. <br /> Make the most of this
                technique by using it in your workspace section.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-around">
          <div className="col-xs">
            <div className={styles.productBox1}>
              <span className={styles.productBox0}>
                <div className="d-flex justify-content-around">
                  <Image
                    src="/../public/tracker.svg"
                    alt="Habit Tracker"
                    width={200}
                    height={200}
                  />
                </div>
              </span>
            </div>
          </div>
          <div className="col-xs">
            <div className={styles.productBox2}>
              <p className={styles.productTitle}>Habit Tracker</p>
              <p className={styles.productDetails}>
                This tool will help you track your habit. Add your goals, you
                would like to make it as habit, it could by anything, like,
                reading 20 pages a day, etc. Make a habit streak with Habit
                Tracker.
              </p>
            </div>
          </div>
        </div>
      </div>
      <span className={styles.space} />
    </div>
  );
}
