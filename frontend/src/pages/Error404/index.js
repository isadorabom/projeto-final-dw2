import React from "react";
import "./error404.css";
import { NavLink } from "react-router-dom";

export default function Error404() {
	return (
		<div id="error404-page">
			<h1>ERRO 404</h1>
			<h2>Página não encontrada!</h2>
			<NavLink to="/">
				<h3>Clique aqui</h3>
			</NavLink>
		</div>
	);
}
