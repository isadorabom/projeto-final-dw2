import React from "react";

import "./controlCards.css";
import AppArea from "../../components/AppArea";

export default function ControlCards() {
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
