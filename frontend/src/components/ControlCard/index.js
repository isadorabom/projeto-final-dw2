import React from "react";
import "./controlCard.css";
export default function ControlCard(props) {
  if (
    props.orders[0] === "" ||
    props.orders.length === 0 ||
    props.orders[0].product === undefined
  )
    return <></>;
  console.log("props", props);
  return props.orders.map(order => (
    <div className={"row "} key={order.product._id}>
      <div className="quantity">{order.quantity}</div>
      <div className="description">{order.product.description}</div>
      <div className="price">{order.product.price}</div>
      <div className="price-total">{order.product.price * order.quantity}</div>
    </div>
  ));
}
