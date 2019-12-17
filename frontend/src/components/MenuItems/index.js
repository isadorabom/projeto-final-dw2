import React from "react";
import "./menuItem.css";
import { FiEdit, FiTrash2 } from "react-icons/fi";
export default function MenuItem(props) {
  if (props.items === "" || props.items === undefined) return <></>;

  return props.items.map(item => (
    <div className={"row "} key={item._id}>
      <input className="cod" defaultValue={item.cod} />
      <input className="description" defaultValue={item.description} />
      <input className="category" defaultValue={item.category} />

      <input
        className="price"
        defaultValue={item.price}
        type="number"
        min="0"
        step="0.1"
      />
      <div className="controls">
        <span className="control edit">{<FiEdit />}</span>
        <span className="control delete">
          {<FiTrash2 onClick={() => props.functions.deleteItem(item._id)} />}
        </span>
      </div>
    </div>
  ));
}
