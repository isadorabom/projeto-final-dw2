import React from "react";

import "./home.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeOption from "../../components/HomeOption";
import { NavLink } from "react-router-dom";
// import api from "../../services/api";

export default function Home() {
	// async function handleSubmit(e) {
	// 	e.preventDefault();
	// }
	return (
		<div id="home-page">
			<Header />
			<div className="area">
				<div className="menu">
					<NavLink to="/menu">
						<HomeOption id="COMANDAS" />
					</NavLink>
					<HomeOption id="CARDÁPIO" />
					<HomeOption id="RELATÓRIOS" />
					<HomeOption id="USUÁRIOS" />
					<HomeOption id="CONFIGURAÇÕES" />
					<HomeOption id="LOGOUT" />
				</div>
			</div>
			<Footer />
		</div>
	);
}
