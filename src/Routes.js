import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Datasets, FoodWebSimulator, NotFound } from "./pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/simulator" />
        </Route>
        <Route exact path="/manage-data" component={Datasets} />
        <Route exact path="/simulator" component={FoodWebSimulator} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
