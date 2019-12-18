import React, { useState, useEffect } from "react";

import "./reports.css";
import AppArea from "../../components/AppArea";
import ReportList from "../../components/ReportList";
import api from "../../services/api";

export default function Reports() {
  const [controlCards, setControlCards] = useState();
  async function getData() {
    await api.get("/oldcontrolcard/").then(res => {
      setControlCards(res.data);
    });
  }
  useEffect(() => {
    getData();
    console.log(controlCards);
  }, []);
  return (
    <AppArea id="reports">
      <span className="title">VENDAS REALIZADAS</span>
      <div className="table">
        <div className={"row header "}>
          <div className="date">DATA</div>
          <div className="datetime">HORA</div>
          <div className="table">MESA</div>
          <div className="total">VALOR TOTAL</div>
          <div className="user">RESPONSÁVEL</div>
        </div>
        <ReportList controlCards={controlCards} />
      </div>
    </AppArea>
  );
}
