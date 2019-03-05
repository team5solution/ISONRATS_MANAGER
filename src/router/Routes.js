import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import LoginPage from "../components/login/index";
import Product from "../components/products/index";
import requireAuth from "../utils/requireAuth";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/home" component={requireAuth(Home)} />
      <Route path="/product" component={requireAuth(Product)} />
    </Switch>
  );
};
