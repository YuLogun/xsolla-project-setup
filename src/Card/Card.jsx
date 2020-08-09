import React from "react";
import styles from "./Card.styles.scss";

const Card = ({ image, date, name }) => (
  <div className={styles.cardContainer}>
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={styles.imgContainer}
    />
    <div className={styles.dateContainer}>{date.slice(0, 2)}</div>
    <div className={styles.cardName}>{name}</div>
  </div>
);

export default Card;
