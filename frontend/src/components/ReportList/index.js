import React from "react";
import "./reportList.css";
export default function ReportList(props) {
  if (props.controlCards === "" || props.controlCards === undefined)
    return <></>;
  console.log(props);
  return props.controlCards.map(controlcard => (
    <div className={"row "} key={controlcard._id}>
      <div className="date">{controlcard.createdAt.substr(0, 10)}</div>
      <div className="datetime">{controlcard.createdAt.substr(11, 5)}</div>
      <div className="table">{controlcard.table}</div>
      <div className="total">R$ {controlcard.total}</div>
      <div className="user">{controlcard.user.name}</div>
    </div>
  ));
}
