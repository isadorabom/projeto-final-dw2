import React from "react";

import "./cards.css";
import AppArea from "../../components/AppArea";

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
