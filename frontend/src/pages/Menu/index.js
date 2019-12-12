import React, { useState, useEffect } from "react";
import { ReactDOM } from "react-dom";
import { FiSearch, FiPlus, FiCheck, FiX } from "react-icons/fi";

import "./menu.css";
import AppArea from "../../components/AppArea";
import MenuItem from "../../components/MenuItem";
import api from "../../services/api";

export default function Menu() {
	const [searchMenuItem, setSearchMenuItem] = useState("");
	const [isCreatingNew, setIsCreatingNew] = useState(false);
	const [itemWasClicked, setItemWasClicked] = useState(false);
	const [menuItems, setMenuItems] = useState("");
	const [newMenuItem, setNewMenuItem] = useState({
		cod: "",
		description: "",
		category: "",
		price: ""
	});
	async function cancelNewItem() {
		setNewMenuItem({
			cod: "",
			description: "",
			category: "",
			price: ""
		});
		setIsCreatingNew(false);
	}
	console.log(isCreatingNew);
	async function createNewItem() {
		try {
			const response = await api.post("/menuitem/", newMenuItem);
			setNewMenuItem({ cod: "", description: "", category: "", price: "" });
			console.log(response);
			setIsCreatingNew(false);
			getMenuData();
		} catch (e) {
			console.log(e);
		}
	}

	async function getMenuData() {
		const response = await api.get("/menuitem").then(res => {
			setMenuItems(res.data);
		});
		return response;
	}
	async function deleteItem(itemId) {
		const response = await api.delete("/menuitem/" + itemId);
		console.log(response);
	}
	async function handleSearch(e) {
		e.preventDefault();
	}
	async function handleNew(e) {
		e.preventDefault();
		setIsCreatingNew(true);
	}

	useEffect(() => {
		getMenuData();
	}, [isCreatingNew]);

	function handleInputChange(e) {
		const { className, value } = e.target;
		setNewMenuItem({
			...newMenuItem,
			[className]: value
		});
	}

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
			<div className="table">
				<div className="row header">
					<input className="cod" value="COD" disabled />
					<input className="description" value="DESCRIÇÃO" disabled />
					<input className="category" value="CATEGORIA" disabled />
					<input className="price" value="PREÇO" disabled />
					<input className="control-title" value="ATUALIZAR" disabled />
				</div>
				<div className={!isCreatingNew ? "hidden" : "row create-form"}>
					<input
						className="cod"
						value={newMenuItem.cod}
						onChange={handleInputChange}
					/>
					<input
						className="description"
						value={newMenuItem.description}
						onChange={handleInputChange}
					/>
					<input
						className="category"
						value={newMenuItem.category}
						onChange={handleInputChange}
					/>
					<input
						className="price"
						value={newMenuItem.price}
						onChange={handleInputChange}
					/>
					<div className="control submit">
						<FiX onClick={() => cancelNewItem()} />
					</div>
					<div className="control cancel">
						<FiCheck onClick={() => createNewItem()} />
					</div>
				</div>
				<MenuItem items={menuItems} />
			</div>
		</AppArea>
	);
}
