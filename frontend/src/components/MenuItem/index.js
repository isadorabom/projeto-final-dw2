import React from "react";
import "./menuItem.css";
import { FiEdit, FiTrash2 } from "react-icons/fi";
export default function MenuItem(props) {
	const { cod, description, category, price } = props.data ? props.data : "";
	const isEditable = props.data ? false : true;

	return (
		<tr className={"row " + props.isCreatingNew ? "" : ""}>
			<td className="cod" contentEditable={isEditable}>
				{cod}
			</td>
			<td className="description" contentEditable={isEditable}>
				{description}
			</td>
			<td className="category" contentEditable={isEditable}>
				{category}
			</td>
			<td className="price" contentEditable={false}></td>
			<td className="edit">
				<FiEdit />
			</td>
			<td className="delete">
				<FiTrash2 />
			</td>
		</tr>
	);
}
