import React, { useState, useEffect } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

import "./cards.css";
import AppArea from "../../components/AppArea";
import api from "../../services/api";

export default function Cards() {
	return (
		<AppArea id="cards">
			<div className="top-div">
				<div className="sidebar-data"></div>
				<div className="table-numbers"></div>
			</div>
			<div className="bottom-bar"></div>
		</AppArea>
	);
}
