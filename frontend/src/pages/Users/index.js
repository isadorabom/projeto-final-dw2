import React, { useState, useEffect } from "react";

import "./users.css";
import { toast } from "react-toastify";
import AppArea from "../../components/AppArea";
import UsersList from "../../components/UsersList";
import api from "../../services/api";

export default function Users() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false
  });
  const [usersList, setUsersList] = useState([]);

  function handleInputChange(e) {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value
    });
  }
  async function getUsersData() {
    const response = await api.get("/user").then(res => {
      setUsersList(res.data);
    });
    return response;
  }

  async function createUser(e) {
    e.preventDefault();
    try {
      await api.post("/user", user);
      setUser({ name: "", email: "", password: "", isAdmin: user.isAdmin });
      getUsersData();
      toast.success("Usuário cadastrado!");
    } catch (err) {
      toast.error("Erro durante o cadastro!");
    }
  }
  async function deleteUser(usersId) {
    try {
      await api.delete("/user/" + usersId);
      getUsersData();
      toast.success("Usuário deletado com sucesso!");
    } catch (err) {
      toast.error("Erro ao deletar usuário!");
    }
  }

  useEffect(() => {
    getUsersData();
  }, []);

  return (
    <AppArea id="users">
      <div className="list">
        <UsersList users={usersList} functions={{ deleteUser }} />
      </div>
      <form onSubmit={createUser}>
        <div id="head">
          <h1 className="title-form">CADASTRAR</h1>

          <button
            type="button"
            id={user.isAdmin ? "isAdmin" : "isNotAdmin"}
            onClick={() => {
              setUser({ ...user, isAdmin: !user.isAdmin });
            }}
          >
            ADMIN
          </button>
        </div>
        <input
          id="name"
          type="name"
          placeholder="Nome"
          value={user.name}
          onChange={handleInputChange}
          required
        />
        <input
          id="email"
          type="email"
          placeholder="E-mail"
          value={user.email}
          onChange={handleInputChange}
          required
        />
        <input
          id="password"
          type="password"
          placeholder="Senha"
          value={user.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">CADASTRAR</button>
      </form>
    </AppArea>
  );
}
