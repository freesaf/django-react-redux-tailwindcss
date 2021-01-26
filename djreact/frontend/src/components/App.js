import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./Test";

export default function App() {
  return (
    <Router>
      <Switch>
        <Test />
      </Switch>
    </Router>
  );
}
