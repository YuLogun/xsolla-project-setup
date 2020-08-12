import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styles from "./CardInfo.styles.scss";

const CardInfo = () => {
  const { eventId } = useParams();
  const [eventToShow, setEventToShow] = useState({});
  const url =
    "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json";
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => data.filter((it) => it.id === eventId))
      .then((res) => setEventToShow(...res));
  }, []);
  //console.log(eventToShow);
  return (
    <div
      className={styles.outerContainer}
      style={{ backgroundImage: `url(${eventToShow.image})` }}
    >
      <Link to="/" className={styles.link}>
        go home
      </Link>
      <div className={styles.container}>
        <div className={styles.smallContainer}>
          <div>{eventToShow.name}</div>
          <div>{eventToShow.date}</div>
          <div>{eventToShow.city}</div>
          <div>{eventToShow.genre}</div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
