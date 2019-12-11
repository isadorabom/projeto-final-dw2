import React, { useState, useEffect } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

import "./users.css";
import { toast } from "react-toastify";
import AppArea from "../../components/AppArea";
import api from "../../services/api";

export default function Users() {
	const [user, setUser] = useState({ name: "", email: "", password: "" });
	function handleInputChange(e) {
		const { id, value } = e.target;
		setUser({
			...user,
			[id]: value
		});
	}
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const response = await api.post("/user", user);
			const { error, user: userData } = response.data;
			if (error) throw error;

			toast.success("Usuário cadastrado!");
		} catch (err) {
			toast.error("Erro durante o cadastro!");
		}
	}
	return (
		<AppArea id="users">
			<form onSubmit={handleSubmit}>
				<h1 className="title-form">CADASTRAR USUÁRIO</h1>
				<input
					id="name"
					type="name"
					placeholder="Nome"
					value={user.name}
					onChange={handleInputChange}
					required
				/>
				<input
					id="email"
					type="email"
					placeholder="E-mail"
					value={user.email}
					onChange={handleInputChange}
					required
				/>
				<input
					id="password"
					type="password"
					placeholder="Senha"
					value={user.password}
					onChange={handleInputChange}
					required
				/>
				<div className="form-radio">
					<input type="radio" value="SIM"></input>
					<input type="radio"></input>
				</div>
				<button type="submit">CADASTRAR</button>
			</form>
		</AppArea>
	);
}
