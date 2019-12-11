import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Navigator from "../../components/Navigator";
import "./appArea.css";
export default function AppArea(props) {
	return (
		<div className="app-area">
			<Header />
			<div id="box" className={props.id === "home-page" ? "home" : ""}>
				{console.log(props)}
				{props.id !== "home-page" ? <Navigator>{props.id}</Navigator> : ""}
				<div id={props.id}>{props.children}</div>
			</div>
			<Footer />
		</div>
	);
}
