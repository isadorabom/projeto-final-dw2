import React, { useState, useEffect } from "react";
import "./controlCards.css";
import AppArea from "../../components/AppArea";
import ControlCard from "../../components/ControlCard";
import TableNumber from "../../components/TableNumber";
import { userLocal } from "../../services/auth";
import api from "../../services/api";

export default function ControlCards() {
  const blankControlCard = {
    table: 0,
    orders: [{}],
    createdAt: "0000-00-00"
  };
  const [cod, setCod] = useState("");
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [selectedTable, setSelectedTable] = useState(0);
  const [menuItem, setMenuItem] = useState({
    cod: 0,
    description: "",
    category: "",
    price: 0
  });
  const [controlCard, setControlCard] = useState(blankControlCard);
  var tables = getNTables(20);

  function getTotal() {
    if (selectedTable === 0 || controlCard.table === 0) return;
    var total = 0;
    controlCard.orders.forEach(order => {
      total += order.product.price * order.quantity;
    });
    return total;
  }
  function handleDate(strDate) {
    const [year, month, day] = [
      strDate.substr(0, 4),
      strDate.substr(5, 2),
      strDate.substr(8, 2)
    ];
    return day + "/" + month + "/" + year;
  }
  function handleTime(strDate) {
    const [hour, minute] = [strDate.substr(11, 2), strDate.substr(14, 2)];
    return hour - 4 + ":" + minute;
  }
  async function handleInsert(e) {
    e.preventDefault();
    setControlCard({
      ...controlCard,
      orders: controlCard.orders.concat({
        product: menuItem._id,
        quantity: quantity
      })
    });
    setCod("");
    setQuantity("");
    getControlCard();
    setMenuItem({
      cod: 0,
      description: "",
      category: "",
      price: 0
    });
  }
  async function searchItem() {
    await api.get("/menuitem/" + cod).then(res => {
      if (res.data === null || res.data.length === 0)
        setMenuItem({
          cod: 0,
          description: "",
          category: "",
          price: 0
        });
      else {
        setMenuItem(res.data);
      }
    });
    getControlCard();
  }
  function getNTables(quantity) {
    var tables = [];
    for (var i = 1; i <= quantity; i++) {
      tables.push(i);
    }
    return tables;
  }

  async function getControlCard() {
    await api.get("/controlcard/" + selectedTable).then(res => {
      if (res.data.length === 0) createControlCard();
      else {
        setControlCard(res.data[0]);
      }
    });
  }

  async function createControlCard() {
    await api.post("/controlCard", {
      table: selectedTable,
      user: userLocal()._id
    });
    getControlCard();
  }

  function setTableSelected(table) {
    setSelectedTable(table);
  }
  async function fecharMesa() {
    await api.post("/oldcontrolcard/", { controlCard, total: getTotal() });
    await api.delete("/controlcard/" + controlCard.table);
    setTableSelected(0);
    setControlCard(blankControlCard);
  }
  useEffect(() => {
    getControlCard();
    setTotal(getTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTable]);

  useEffect(() => {
    setTotal(getTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controlCard]);

  useEffect(() => {
    searchItem();
  }, [cod]);

  useEffect(() => {
    api.put("/controlcard/", controlCard);
  }, [handleInsert]);

  return (
    <AppArea id="control-cards">
      <div id="row-div">
        <div id="sidebar-data" className={selectedTable === 0 ? "" : "active"}>
          <div className="head">
            <span className="title">MESA {selectedTable}</span>
            <button onClick={fecharMesa}>FECHAR</button>
          </div>
          <div className="created-at">
            <span className="date">{handleDate(controlCard.createdAt)}</span>
            <span className="time">{handleTime(controlCard.createdAt)}</span>
          </div>
          <div className="orders">
            <div className={"row header"}>
              <div className="quantity">QTD</div>
              <div className="description">DESCRIÇÃO</div>
              <div className="price">R$unt</div>
              <div className="price-total">R$total</div>
            </div>
            <ControlCard orders={controlCard.orders} />
          </div>
          <div className="total-price">
            TOTAL: <span>R${total}</span>
          </div>
        </div>
        <div id="table-numbers">
          <TableNumber
            tables={tables}
            controlCard={selectedTable === 0 ? { table: false } : controlCard}
            functions={{ setTableSelected }}
          />
        </div>
      </div>
      <form
        id="bottom-bar"
        className={selectedTable === 0 ? "" : "active"}
        onSubmit={e => handleInsert(e)}
      >
        <input
          type="number"
          id="cod"
          placeholder="COD"
          value={cod}
          onChange={e => {
            setCod(e.target.value);
          }}
        />
        <input
          type="number"
          id="quantity"
          placeholder="QTD"
          value={quantity}
          min="1"
          onChange={e => {
            setQuantity(e.target.value);
          }}
        />
        <input type="number" id="price" value={menuItem.price} disabled />
        <input
          type="text"
          id="description"
          value={menuItem.description}
          disabled
        />
        <input
          type="number"
          id="total-price"
          value={quantity > 0 ? quantity * menuItem.price : 0}
          disabled
        />
        <button>INSERIR</button>
      </form>
    </AppArea>
  );
}
