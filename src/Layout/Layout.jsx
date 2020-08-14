import React, { useState, useEffect, Suspense } from "react";
import Heading from "../Heading/Heading";
import { monthsArr, justMonthsNamesArr } from "./months";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

import styles from "./Layout.styles.scss";

const Filters = React.lazy(() => import("./Filters/Filters"));
const EventsList = React.lazy(() => import("./EventsList/EventsList"));

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
      <Heading title="Event Listing" />
      <Suspense fallback={<LoadingIcon />}>
        <Filters
          cities={citiesArr}
          months={justMonthsNamesArr}
          onOptionChange={onOptionChange}
        />
        <EventsList data={dataToPass} />
      </Suspense>
    </div>
  );
};

export default Layout;
