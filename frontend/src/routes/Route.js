import React from "react";
import { Route, Redirect } from "react-router-dom";

import { toast } from "react-toastify";
import {
	isAuthenticated,
	userLocal,
	isTokenExpired,
	logout
} from "../services/auth";

export default function RouteWrapper({
	component: Component,
	isPrivate = false,
	isAdmin = false,
	...rest
}) {
	if (!isAuthenticated() && isPrivate) {
		return <Redirect to="/login" />;
	}
	if (isAuthenticated() && isAdmin && !userLocal().isAdmin) {
		toast.error("Sem permissões para esta ação!");
		return <Redirect to="/" />;
	}

	if (isTokenExpired()) {
		logout();
		return <Redirect to="/login" />;
	}

	// if (isAuthenticated()) {
	// 	return <Redirect to="/" />;
	// }
	// verifica se é admin
	// if (isAuthenticated() && isPrivate && isAdmin && !userLocal().isAdmin) {
	// 	return <Redirect to="/" />;
	// }

	return (
		<>
			<Route {...rest} component={Component} />
		</>
	);
}
