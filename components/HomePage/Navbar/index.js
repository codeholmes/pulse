import styles from "./styles.module.css";
import Image from "next/image";
import React, { Component, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const whiteLink = styled.a`
  color: white;
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStatus: false,
      Burger: false,
    };

    this.searchQuery = ["Todo List", "Pomodoro Timer", "Habit Tracker"];

    this.state = {
      recommend: [],
    };
  }

  onChange = (e) => {
    const value = e.target.value;
    let recommend = [];
    if (value.length > 0) {
      const exp = new RegExp(`^${value}`, "i");
      recommend = this.searchQuery.sort().filter((value) => exp.test(value));
    }
    return this.setState(() => ({ recommend }));
  };

  renderResult() {
    const { recommend } = this.state;
    if (recommend.length === 0) {
      return null;
    } else
      return (
        <ul>
          {recommend.map((searchQuery) => (
            <div className="d-flex text-left">
              {" "}
              <li className={styles.resultItem}>
                <a href="/workspace"> {searchQuery}</a>
              </li>{" "}
            </div>
          ))}
        </ul>
      );
  }

  ShowFn() {
    this.setState({
      searchStatus: true,
    });
  }

  HideFn() {
    this.setState({
      searchStatus: !this.state.searchStatus,
    });
  }

  ShowHideMenu() {
    this.setState({
      Burger: !this.state.Burger,
    });
  }

  render() {
    return (
      <div>
        {this.state.searchStatus ? (
          <div>
            <div className={styles.searchMainContainer}>
              <div className={styles.searchModelBackground}>
                <div className={styles.searchModel}>
                  <div
                    onClick={() => this.HideFn()}
                    className={styles.closeBtn}
                  >
                    X
                  </div>
                  <div className={styles.inputBtnGroup}>
                    <form>
                      <input
                        onChange={this.onChange}
                        className={styles.input}
                        placeholder="Search.."
                      ></input>
                      <div className="d-flex justify-content-center">
                        <ul>
                          <div>{this.renderResult()}</div>
                        </ul>{" "}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className={styles.navbar}>
          <div>
            <nav className="navbar-expand d-flex justify-content-center text-left">
              <div className="navbar-nav">
                <div
                  onClick={() => this.ShowHideMenu()}
                  className={styles.menu}
                >
                  <div className="MenuGroup">
                    <div className={styles.mLine1}></div>
                    <div className={styles.mLine2}></div>
                    <div className={styles.mLine3}></div>
                  </div>
                </div>
                <div className="nav-item">
                  <Link href="/" passHref>
                    <whiteLink>
                      {
                        <div className={styles.brandName}>
                          <span style={{ cursor: "pointer" }}>Pulse</span>
                        </div>
                      }
                    </whiteLink>
                  </Link>
                </div>
                <span className={styles.searchSpace}>
                  <div className={styles.searchFixed}>
                    <div
                      onClick={() => this.ShowFn()}
                      className={styles.searchPointer}
                    >
                      <Image
                        src="/../public/search.png"
                        alt="Search"
                        width={25}
                        height={25}
                      />
                    </div>
                  </div>
                </span>

                <div className="nav-item" className={styles.navLinkSpace}>
                  <span className={styles.navLink}>
                    <Link href="/subscribe" passHref>
                      <whiteLink>
                        {
                          <div>
                            <span style={{ cursor: "pointer" }}>
                              Try Premium
                            </span>
                          </div>
                        }
                      </whiteLink>
                    </Link>
                  </span>
                </div>
                <div></div>
              </div>
            </nav>
          </div>
        </div>
        {this.state.Burger ? (
          <Link href="/subscribe" passHref>
            {
              <div style={{ cursor: "pointer" }} className={styles.PhoneMenu}>
                <whiteLink>
                  <span>Subscribe</span>
                </whiteLink>
              </div>
            }
          </Link>
        ) : null}
      </div>
    );
  }
}

export default Navbar;
