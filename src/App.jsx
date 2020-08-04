import React from "react";

import styles from "./styles.css";

import logoSrc from "./logo.png";

const App = () => (
  <div className={styles.message}>
    <img src={logoSrc} className={styles.logo} />
    Hello React!
  </div>
);

export default App;
