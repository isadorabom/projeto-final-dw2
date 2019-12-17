import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Reports from "../pages/Reports";
import ControlCards from "../pages/ControlCards";
import Users from "../pages/Users";
import Error404 from "../pages/Error404";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} isPrivate />
        <Route path="/controlcards" exact component={ControlCards} isPrivate />
        <Route path="/menu" exact component={Menu} isPrivate />
        <Route path="/reports" exact component={Reports} isPrivate />
        <Route path="/users" exact component={Users} isPrivate isAdmin />

        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}
