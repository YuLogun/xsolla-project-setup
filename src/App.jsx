import { hot } from "react-hot-loader/root";
import React from "react";

import styles from "./styles.scss";

import logoSrc from "./logo.png";

const App = () => (
  <div className={styles.message}>
    <img src={logoSrc} className={styles.logo} />
    <p>Hello React!!! Hello</p>
    <input type="text" />
  </div>
);

export default hot(App);
