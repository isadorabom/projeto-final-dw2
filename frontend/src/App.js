import React from "react";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

function App() {
	return (
		<>
			<Routes />
			<ToastContainer autoClose={3000} />
		</>
	);
}

export default App;
