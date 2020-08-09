import { hot } from "react-hot-loader/root";
import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import Dropdown from "./Dropdown/Dropdown";
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

const App = () => {
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
      <div className={styles.cardFolder}>
        {dataToPass.map((event) => (
          <Card key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default hot(App);
