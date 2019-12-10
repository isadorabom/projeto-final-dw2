import React, { useState } from "react";

import "./login.css";
import { login } from "../../services/auth";
import { toast } from "react-toastify";
import api from "../../services/api";

export default function Login({ history }) {
	const [user, setUser] = useState({ email: "", password: "" });

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
			const response = await api.post("/session", user);
			const { error, token, user: userData } = response.data;
			if (error) throw error;
			if (token) {
				login(token, userData);
			}
			history.push("/");
		} catch (err) {
			toast.error("Erro de autenticação!");
		}
	}

	return (
		<div id="login-page">
			<div className="filter"></div>
			<div className="sidebar">
				<img className="logo" src="/images/logo.png" alt="logo" />
				<form onSubmit={handleSubmit}>
					<h1 className="title-form">IDENTIFIQUE-SE</h1>
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
					<button type="submit">Entrar</button>
				</form>
			</div>
		</div>
	);
}
