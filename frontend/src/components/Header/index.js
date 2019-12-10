import React from "react";
import "./header.css";
import { userLocal } from "../../services/auth";
import { FiUser } from "react-icons/fi";
import { string } from "postcss-selector-parser";
export default function Header() {
	return (
		<header>
			<img className="logo" src="/images/logo.png" alt="logo" />
			<div className="user">
				<FiUser id="icon" color="#eee" size={36} />
				<span id="name">{userLocal().name.toUpperCase()}</span>
			</div>
		</header>
	);
}
