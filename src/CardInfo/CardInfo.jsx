import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./CardInfo.styles.scss";
import { connect } from "react-redux";

const CardInfo = ({ reducerData }) => {
  const { eventId } = useParams();

  const myData = reducerData.filter((it) => it.id === eventId)[0];

  return (
    <div
      className={styles.outerContainer}
      style={{ backgroundImage: `url(${myData.image})` }}
    >
      <Link to="/" className={styles.link}>
        go home
      </Link>
      <div className={styles.container}>
        <div className={styles.smallContainer}>
          <div>{myData.name}</div>
          <div>{myData.date}</div>
          <div>{myData.city}</div>
          <div>{myData.genre}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ reducerData }) => {
  return {
    reducerData,
  };
};

export default connect(mapStateToProps)(CardInfo);
