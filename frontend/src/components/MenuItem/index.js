import React, { useState } from "react";
import "./menuItem.css";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";
export default function MenuItem(props) {
	if (props.items === "" || props.items === undefined) return <></>;

	async function deleteItem(itemId) {
		const response = await api.delete("/menuitem/" + itemId);
		console.log(response);
	}
	console.log(props);
	var str = [];
	for (var i = 0; i < props.items.length; i++) {
		var item = props.items[i];
		console.log(props);
		str.push(
			<div className={"row "} key={item._id}>
				<input className="cod" value={item.cod} disabled />
				<input className="description" value={item.description} disabled />
				<input className="category" value={item.category} disabled />
				<input className="price" value={item.price} disabled />
				<div className="control edit">
					<FiEdit />
				</div>
				<div className="control delete">
					<FiTrash2 onClick={() => deleteItem(item._id)} />
				</div>
			</div>
		);
	}
	return str;
}
