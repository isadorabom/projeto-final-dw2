import React from "react";
import "./tableNumber.css";
import { GiTabletopPlayers } from "react-icons/gi";
export default function MenuItem(props) {
  return props.tables.map(table => (
    <div
      className={
        "table " + (props.controlCard.table === table ? "selected" : "")
      }
      id={table}
      key={table}
      onClick={() => props.functions.setTableSelected(table)}
    >
      <GiTabletopPlayers className="icon" />
      <span className="title">{table}</span>
    </div>
  ));
}
