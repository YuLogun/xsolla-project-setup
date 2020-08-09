import React, { useState } from "react";
import styles from "./Dropdown.styles.scss";

const Dropdown = ({ title, options, onOptionChange }) => {
  const [month, setMonth] = useState("");
  const handleChange = (e) => {
    setMonth(e.target.value);
    onOptionChange(e.target.value);
  };
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}:</p>
      <select
        className={styles.selectContainer}
        value={month}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
