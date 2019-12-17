import React, { useState, useEffect } from "react";
import { FiSearch, FiPlus, FiCheck, FiX } from "react-icons/fi";

import "./menu.css";
import { toast } from "react-toastify";
import AppArea from "../../components/AppArea";
import MenuItems from "../../components/MenuItems";
import api from "../../services/api";

export default function Menu() {
  const [searchMenuItem, setSearchMenuItem] = useState("");
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [newMenuItem, setNewMenuItem] = useState({
    cod: "",
    description: "",
    category: "",
    price: ""
  });
  async function cancelNewItem() {
    setNewMenuItem({
      cod: "",
      description: "",
      category: "",
      price: ""
    });
    setIsCreatingNew(false);
  }
  async function createNewItem() {
    try {
      await api.post("/menuitem/", newMenuItem);
      setNewMenuItem({ cod: "", description: "", category: "", price: "" });
      setIsCreatingNew(false);
      getMenuData();
    } catch (e) {
      console.log(e);
    }
  }

  async function getMenuData() {
    await api.get("/menuitem").then(res => {
      setMenuItems(res.data);
    });
  }

  async function deleteItem(itemId) {
    try {
      await api.delete("/menuitem/" + itemId);
      getMenuData();
      toast.success("Item deletado com sucesso!");
    } catch (err) {
      toast.error("Erro ao deletar item!");
    }
  }

  async function searchItem(e) {
    e.preventDefault();
    await api.get("/menuitem/" + e.target.value).then(res => {
      setMenuItems(res.data);
    });
  }
  async function handleNew(e) {
    e.preventDefault();
    setIsCreatingNew(true);
  }

  function handleInputChange(e) {
    const { className, value } = e.target;
    setNewMenuItem({
      ...newMenuItem,
      [className]: value
    });
  }

  useEffect(() => {
    getMenuData();
  }, []);

  return (
    <AppArea id="menu">
      <div id="head">
        <form id="searchForm" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Pesquise pelo item do cardápio aqui"
            value={searchMenuItem}
            onChange={e => {
              setSearchMenuItem(e.target.value);
              searchItem(e);
            }}
          />
          <button type="submit">
            <FiSearch className="icon" />
            PESQUISAR
          </button>
        </form>
        <button id="btn-new" onClick={handleNew} type="submit">
          <FiPlus className="icon" />
          ADICIONAR
        </button>
      </div>
      <div className="table">
        <div className="row header">
          <input className="cod" value="COD" disabled />
          <input className="description" value="DESCRIÇÃO" disabled />
          <input className="category" value="CATEGORIA" disabled />
          <input className="price" value="PREÇO" disabled />
          <input className="control-title" value="ATUALIZAR" disabled />
        </div>
        <div className={!isCreatingNew ? "hidden" : "row create-form"}>
          <input
            className="cod"
            value={newMenuItem.cod}
            onChange={handleInputChange}
          />
          <input
            className="description"
            value={newMenuItem.description}
            onChange={handleInputChange}
          />
          <input
            className="category"
            value={newMenuItem.category}
            onChange={handleInputChange}
          />
          <input
            className="price"
            type="number"
            min="0"
            step="0.1"
            value={newMenuItem.price}
            onChange={handleInputChange}
          />
          <div className="controls">
            <span className="control cancel">
              <FiX onClick={() => cancelNewItem()} />
            </span>
            <span className="control submit">
              <FiCheck onClick={() => createNewItem()} />
            </span>
          </div>
        </div>
        <MenuItems items={menuItems} functions={{ deleteItem }} />
      </div>
    </AppArea>
  );
}
