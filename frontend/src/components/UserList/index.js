import React from "react";
import "./userList.css";
import { FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
export default function UserList(props) {
	if (props.users === "" || props.users === undefined) return <></>;

	async function deleteuser(usersId) {
		const response = await api.delete("/user/" + usersId);
		console.log(response);
	}
	var str = [];
	for (var i = 0; i < props.users.length; i++) {
		var user = props.users[i];
		str.push(
			<div className={"row "} key={user._id}>
				<div className="name">{user.name}</div>
				{/* <div className="email">{user.email}</div> */}
				<div className="admin">{user.isAdmin ? "admin" : "       "}</div>
				<div className="control delete">
					<FiTrash2 onClick={() => deleteuser(user._id)} />
				</div>
			</div>
		);
	}
	return str;
}
