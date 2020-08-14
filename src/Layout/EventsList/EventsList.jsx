import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";

import styles from "./EventsList.styles.scss";

const EventsList = ({ data }) => {
  return (
    <div className={styles.cardFolder}>
      {data.map((event) => (
        <Link key={event.id} to={`/${event.id}`} className={styles.link}>
          <Card {...event} />
        </Link>
      ))}
    </div>
  );
};

export default EventsList;
