import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Error404 from "../pages/Error404";

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} isPrivate />
				<Route path="/login" exact component={Login} />

				<Route path="/menu" exact component={Menu} isPrivate />
				<Route path="*" component={Error404} />
			</Switch>
		</BrowserRouter>
	);
}
