import React from "react";
import "./usersList.css";
import { FiTrash2 } from "react-icons/fi";
export default function UserList(props) {
  if (props.users === "" || props.users === undefined) return <></>;

  return props.users.map(user => (
    <div className={"row "} key={user._id}>
      <div className="row1">
        <div className="name">{user.name}</div>
        <div className="admin">{user.isAdmin ? "admin" : ""}</div>
        <div className="control delete">
          <FiTrash2 onClick={() => props.functions.deleteUser(user._id)} />
        </div>
      </div>
      <div className="email">{user.email}</div>
    </div>
  ));
}
