import React, { useState, useEffect, Suspense } from "react";
import Heading from "../Heading/Heading";
import { monthsArr, justMonthsNamesArr } from "./months";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

import styles from "./Layout.styles.scss";
import { connect } from "react-redux";
import { fetchData } from "../redux/reducer";

const Filters = React.lazy(() => import("./Filters/Filters"));
const EventsList = React.lazy(() => import("./EventsList/EventsList"));

const Layout = ({ reducerData, getData }) => {
  useEffect(() => {
    if (reducerData.length === 0) {
      getData();
    }
  }, []);
  const [selectedOption, changeSelectedOption] = useState("");

  const onOptionChange = (option) => {
    changeSelectedOption(option);
  };

  const citiesArr = [...new Set(reducerData.map((event) => event.city))];

  const isMonthSelected = justMonthsNamesArr.indexOf(selectedOption) !== -1;
  let filterdEvents;
  if (isMonthSelected) {
    const month = monthsArr.filter((it) => it[selectedOption])[0][
      selectedOption
    ];
    filterdEvents = reducerData.filter(
      (event) => event.date.slice(3, 5) === month
    );
  } else {
    filterdEvents = reducerData.filter(
      (event) => event.city === selectedOption
    );
  }

  const dataToPass = selectedOption === "" ? reducerData : filterdEvents;

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

const mapStateToProps = ({ reducerData }) => {
  return {
    reducerData,
  };
};
const mapDispatchToProps = (dispacth) => {
  return {
    getData: () => dispacth(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
