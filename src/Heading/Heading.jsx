import React from "react";

import styles from "./Heading.styles.scss";

const Heading = ({ title }) => <h1 className={styles.heading}>{title}</h1>;

export default Heading;
