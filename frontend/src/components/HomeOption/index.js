import React from "react";

import {
	FiEdit3,
	FiBookOpen,
	FiFile,
	FiUsers,
	FiSettings,
	FiLogOut
} from "react-icons/fi";

import "./homeOption.css";
export default function Header(props) {
	function getIcon() {
		if (props.id === "COMANDAS") return <FiEdit3 className="icon" />;
		if (props.id === "CARDÁPIO") return <FiBookOpen className="icon" />;
		if (props.id === "RELATÓRIOS") return <FiFile className="icon adm-only" />;
		if (props.id === "USUÁRIOS") return <FiUsers className="icon adm-only" />;
		if (props.id === "CONFIGURAÇÕES") return <FiSettings className="icon" />;
		if (props.id === "LOGOUT") return <FiLogOut className="icon" />;
	}
	return (
		<div className="option" id={props.id}>
			{getIcon()}
			<span className="title">{props.id}</span>
		</div>
	);
}
