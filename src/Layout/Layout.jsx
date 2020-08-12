import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import pic404 from "../notFound.svg";
import styles from "./styles.scss";

const monthsArr = [
  {
    January: "01",
  },
  {
    February: "02",
  },
  {
    March: "03",
  },
  {
    April: "04",
  },
  {
    May: "05",
  },
  {
    June: "06",
  },
  {
    July: "07",
  },
  {
    August: "08",
  },
  {
    September: "09",
  },
  {
    October: "10",
  },
  {
    November: "11",
  },
  {
    December: "12",
  },
];

const justMonthsNamesArr = monthsArr.map((it) => Object.keys(it)[0]);

const Layout = () => {
  const [events, setEvents] = useState([]);
  const [selectedOption, changeSelectedOption] = useState("");
  const url =
    "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2020/master/events.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setEvents(res));
  }, [url]);
  const onOptionChange = (option) => {
    changeSelectedOption(option);
  };
  const citiesArr = [...new Set(events.map((event) => event.city))];

  const isMonthSelected = justMonthsNamesArr.indexOf(selectedOption) !== -1;
  let filterdEvents;
  if (isMonthSelected) {
    const month = monthsArr.filter((it) => it[selectedOption])[0][
      selectedOption
    ];
    filterdEvents = events.filter((event) => event.date.slice(3, 5) === month);
  } else {
    filterdEvents = events.filter((event) => event.city === selectedOption);
  }
  const dataToPass = selectedOption === "" ? events : filterdEvents;

  return (
    <div className={styles.outerContainer}>
      <h1 className={styles.heading}>Event Listing</h1>
      <div className={styles.select}>
        <Dropdown
          title="City"
          options={citiesArr}
          onOptionChange={onOptionChange}
        />
        <Dropdown
          title="Month"
          options={justMonthsNamesArr}
          onOptionChange={onOptionChange}
        />
      </div>
      {dataToPass.length !== 0 ? (
        <div className={styles.cardFolder}>
          {dataToPass.map((event) => (
            <Link key={event.id} to={`/${event.id}`} className={styles.link}>
              <Card {...event} />
            </Link>
          ))}
        </div>
      ) : (
        <img
          src={pic404}
          alt="404 error picture"
          className={styles.notFoundPic}
        />
      )}
    </div>
  );
};

export default Layout;
