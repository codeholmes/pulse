import styles from "./styles.module.css";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const whiteLink = styled.a`
  color: white;
`;

export default function GetStarted() {
  return (
    <div>
      <div className={styles.getStartedBox}>
        <span className={styles.getStartedBox2}>
          <span className={styles.space}></span>
          <div className={styles.hideImage}>
            <div className="d-flex justify-content-center text-center">
              <Image
                src="/../public/getStarted.png"
                alt="Pomodoro Timer"
                width={843}
                height={373}
              />
            </div>
          </div>
          <span className="d-flex justify-content-center text-center">
            <span className={styles.tagLine}>
              One workspace to rule them all.
            </span>
          </span>

          <div className="d-flex justify-content-center text-center">
            <div className={styles.wsBtn1}>
              <button className={styles.wsBtn0}>
                <Link href="/workspace" passHref>
                  <whiteLink>
                    {<div style={{ color: "#0058db" }}>Open Workspace</div>}
                  </whiteLink>
                </Link>
              </button>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
