import React from "react";

import "./home.css";
import AppArea from "../../components/AppArea";
import HomeOption from "../../components/HomeOption";
import { NavLink } from "react-router-dom";
import { logout } from "../../services/auth";
// import api from "../../services/api";

export default function Home() {
	// async function handleSubmit(e) {
	// 	e.preventDefault();
	// }

	return (
		<AppArea id="home-page">
			<NavLink to="/cards">
				<HomeOption id="COMANDAS" />
			</NavLink>
			<NavLink to="/menu">
				<HomeOption id="CARDÁPIO" />
			</NavLink>
			<NavLink to="/reports">
				<HomeOption id="RELATÓRIOS" />
			</NavLink>
			<NavLink to="/users">
				<HomeOption id="USUÁRIOS" />
			</NavLink>
			<NavLink to="/settings" className="disabled">
				<HomeOption id="CONFIGURAÇÕES" />
			</NavLink>

			<NavLink to="/" onClick={logout}>
				<HomeOption id="LOGOUT" />
			</NavLink>
		</AppArea>
	);
}
