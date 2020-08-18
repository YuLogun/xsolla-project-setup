import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import CardInfo from "./CardInfo/CardInfo";

const About = () => <h2>About</h2>;

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Layout />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/:eventId">
        <CardInfo />
      </Route>
    </BrowserRouter>
  );
};

export default hot(App);
