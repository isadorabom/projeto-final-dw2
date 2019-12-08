import React, { Component } from "react";

import "./login.css";
import api from "../../services/api";

export default class Login extends Component {
	state = {
		email: "",
		password: ""
	};

	handleSubmit = async e => {
		e.preventDefault();

		const { email, pass } = this.state;

		if (email === "" || pass === "") return alert("Preencha todos os campos!");

		try {
			const response = await api.post("/session", {
				email: this.state.email,
				password: this.state.password
			});

			await localStorage.setItem("token", response.data.token);
		} catch (err) {
			console.log(err);
			return alert("Erro de autenticação!");
		}
	};

	render() {
		return (
			<div id="login-page">
				<div className="filter"></div>
				<div className="sidebar">
					<img className="logo" src="/images/logo.png" alt="logo" />
					<form>
						<h1 className="title-form">IDENTIFIQUE-SE</h1>
						<input
							type="email"
							placeholder="E-mail"
							value={this.state.email}
							onChange={e => this.setState({ email: e.target.value })}
						/>
						<input
							type="password"
							placeholder="Senha"
							value={this.state.password}
							onChange={e => this.setState({ password: e.target.value })}
						/>
						<button type="submit" onClick={this.handleSubmit}>
							Entrar
						</button>
					</form>
				</div>
			</div>
		);
	}
}
