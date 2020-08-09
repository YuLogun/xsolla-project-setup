import { hot } from "react-hot-loader/root";
import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Dropdown from "./Dropdown/Dropdown";
import styles from "./styles.scss";

const monthsArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const App = () => {
  const [events, setEvents] = useState([]);
  const url =
    "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setEvents(res));
  }, [url]);
  const citiesArr = [...new Set(events.map((event) => event.city))];

  return (
    <div className={styles.outerContainer}>
      <h1 className={styles.heading}>Event Listing</h1>
      <div className={styles.select}>
        <Dropdown title="City" options={citiesArr} />
        <Dropdown title="Month" options={monthsArr} />
      </div>
      <div className={styles.cardFolder}>
        {events.map((event) => (
          <Card key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default hot(App);
