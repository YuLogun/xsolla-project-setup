import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";

import styles from "./EventsList.styles.scss";

const EventsList = ({ data }) => {
  return (
    <>
      {data.length !== 0 ? (
        <div className={styles.cardFolder}>
          {data.map((event) => (
            <Link key={event.id} to={`/${event.id}`} className={styles.link}>
              <Card {...event} />
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.notFound}>Sorry, nothing is found</div>
      )}
    </>
  );
};

export default EventsList;
