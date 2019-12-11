import React from "react";
import { NavLink } from "react-router-dom";
import { FiArrowLeft, FiChevronRight } from "react-icons/fi";
import "./navigator.css";
export default function AppArea(props) {
	function getNamePT() {
		switch (props.children) {
			case "menu":
				return "cardápio";
			case "cards":
				return "comandas";
			case "reports":
				return "relatórios";
			case "users":
				return "usuários";
		}
	}
	return (
		<div id="navigator">
			<NavLink to="/">
				<FiArrowLeft className="icon" />
			</NavLink>
			<span>{getNamePT().toUpperCase()}</span>
			<FiChevronRight />
		</div>
	);
}
