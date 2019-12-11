import React, { useState, useEffect } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

import "./menu.css";
import AppArea from "../../components/AppArea";
import MenuItem from "../../components/MenuItem";
import api from "../../services/api";

export default function Menu() {
	const [searchMenuItem, setSearchMenuItem] = useState("");
	const [menuItems, setMenuItems] = useState("");
	const { newMenuItem, setNewMenuItem } = useState({
		cod: 0,
		description: "",
		category: "",
		price: 0
	});
	// async function getMenuData() {
	// 	const response = await api.get("/menuitem").then(res => {
	// 		setMenuItems(res);
	// 	});
	// 	console.log(menuItems.data.toArray());
	// 	console.log(this.event.target());
	// 	return response;
	// }
	// getMenuData();
	// function renderMenu() {
	// 	for (var i = 0; i < menuItems.length; i++) {
	// 		<MenuItem data={menuItems[]} />;
	// 	}
	// }
	const [isCreatingNew, setIsCreatingNew] = useState(false);
	async function handleSearch(e) {
		e.preventDefault();
	}
	async function handleNew(e) {
		e.preventDefault();
		setIsCreatingNew(true);
	}
	const props = {
		cod: 10,
		description: "deu certo",
		category: "amém",
		price: 18.9
	};
	return (
		<AppArea id="menu">
			<div id="head">
				<form id="searchForm" onSubmit={handleSearch}>
					<input
						type="text"
						placeholder="Pesquise pelo item do cardápio aqui"
						value={searchMenuItem}
						onChange={e => setSearchMenuItem(e.target.value)}
					/>
					<button type="submit">
						<FiSearch className="icon" />
						PESQUISAR
					</button>
				</form>
				<button id="btn-new" onClick={handleNew} type="submit">
					<FiPlus className="icon" />
					ADICIONAR
				</button>
			</div>
			<div className="table-overflow">
				<table className="menu-items">
					<thead>
						<tr>
							<th className="cod">CÓD</th>
							<th className="description">DESCRIÇÃO</th>
							<th className="category">CATEGORIA</th>
							<th className="price">PREÇO</th>
							<th className="update" colSpan="2">
								ATUALIZAR
							</th>
						</tr>
					</thead>
					<tbody id="table-body">
						<MenuItem newMenuItem />
						{/* {renderMenu()} */}
					</tbody>
				</table>
			</div>
		</AppArea>
	);
}
