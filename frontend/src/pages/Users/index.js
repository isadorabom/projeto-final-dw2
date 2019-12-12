import React, { useState, useEffect } from "react";

import "./users.css";
import { toast } from "react-toastify";
import AppArea from "../../components/AppArea";
import UserList from "../../components/UserList";
import api from "../../services/api";

export default function Users() {
	const [user, setUser] = useState({ name: "", email: "", password: "" });
	const [usersData, setUsersData] = useState("");
	function handleInputChange(e) {
		const { id, value } = e.target;
		setUser({
			...user,
			[id]: value
		});
	}
	async function getUsersData() {
		const response = await api.get("/user").then(res => {
			setUsersData(res.data);
		});
		return response;
	}
	useEffect(() => {}, [getUsersData()]);
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
			<div className="list">
				<UserList users={usersData} />
			</div>
			<form onSubmit={handleSubmit}>
				<h1 className="title-form">CADASTRAR</h1>
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
					<input type="radio"></input>
				</div>
				<button type="submit" onClick={getUsersData}>
					CADASTRAR
				</button>
			</form>
		</AppArea>
	);
}
