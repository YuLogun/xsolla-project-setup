import React from "react";
import Dropdown from "../../Dropdown/Dropdown";

import styles from "./Filters.styles.scss";

const Filters = ({ cities, months, onOptionChange }) => {
  return (
    <div className={styles.selectContainer}>
      <Dropdown title="City" options={cities} onOptionChange={onOptionChange} />
      <Dropdown
        title="Month"
        options={months}
        onOptionChange={onOptionChange}
      />
    </div>
  );
};

export default Filters;
