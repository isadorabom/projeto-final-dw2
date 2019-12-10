import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import "./menu.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import api from "../../services/api";

export default function Menu() {
	const [menuItem, setMenuItem] = useState("");
	async function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<div id="menu-page">
			<Header />
			<div className="area">
				<div className="box">
					<form onSubmit={handleSubmit}>
						<input
							id="email"
							type="text"
							placeholder="Pesquise pelo item do cardápio aqui"
							value={menuItem}
							onChange={e => setMenuItem(e.target.value)}
						/>
						<FiSearch className="icon" />
					</form>
					<div className="row header">
						<div className="cod">CÓD</div>
						<div className="description">DESCRIÇÃO</div>
						<div className="category">CATEGORIA</div>
						<div className="value">PREÇO</div>
					</div>
					<div className="menu-items">
						<div className="row">
							<div className="cod">001</div>
							<div className="description">Sanduíche Vegano</div>
							<div className="category">Lanches</div>
							<div className="value">R$16,00</div>
						</div>

						<div className="row">
							<div className="cod">001</div>
							<div className="description">Sanduíche Vegano</div>
							<div className="category">Lanches</div>
							<div className="value">R$16,00</div>
						</div>
						<div className="row">
							<div className="cod">001</div>
							<div className="description">Sanduíche Vegano</div>
							<div className="category">Lanches</div>
							<div className="value">R$16,00</div>
						</div>
						<div className="row">
							<div className="cod">001</div>
							<div className="description">Sanduíche Vegano</div>
							<div className="category">Lanches</div>
							<div className="value">R$16,00</div>
						</div>
						<div className="row">
							<div className="cod">001</div>
							<div className="description">Sanduíche Vegano</div>
							<div className="category">Lanches</div>
							<div className="value">R$16,00</div>
						</div>
						<div className="row">
							<div className="cod">001</div>
							<div className="description">Sanduíche Vegano</div>
							<div className="category">Lanches</div>
							<div className="value">R$16,00</div>
						</div>
						<div className="row">
							<div className="cod">001</div>
							<div className="description">Sanduíche Vegano</div>
							<div className="category">Lanches</div>
							<div className="value">R$16,00</div>
						</div>
						<div className="row">
							<div className="cod">001</div>
							<div className="description">Sanduíche Vegano</div>
							<div className="category">Lanches</div>
							<div className="value">R$16,00</div>
						</div>
						<div className="row">
							<div className="cod">001</div>
							<div className="description">Sanduíche Vegano</div>
							<div className="category">Lanches</div>
							<div className="value">R$16,00</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
