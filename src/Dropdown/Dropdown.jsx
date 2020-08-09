import React from "react";
import styles from "./Dropdown.styles.scss";

const Dropdown = ({ title, options }) => (
  <div className={styles.container}>
    <p className={styles.title}>{title}:</p>
    <select className={styles.selectContainer}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
