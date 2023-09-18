import React, { useEffect, useState } from "react";
import "./clients.css";
import AdminNavBar from "../dashboard/AdminNavBar";
import { Link, useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL;

function Clients() {
  const [clients, setClients] = useState([{}]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    handleGetClients();
  }, []);

  const handleGetClients = async () => {
    try {
      const response = await fetch(`${url}/users`);

      const responseJson = await response.json();
      setClients(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="clients">
      <AdminNavBar />
      <div className="clients-content">
        <h1>Clientes</h1>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Número</th>
              <th>Nickname</th>
              <th>Compras</th>
            </tr>
          </thead>
          <tbody>
            {clients ? (
              clients.map((result) => (
                <>
                  <tr>
                    <td>{result.name}</td>
                    <td>{result.email}</td>
                    <td>{result.number}</td>
                    <td>{result.nickname}</td>
                    <td>
                      <Link to={`/admin/dashboard/orders/${result.id}`}>
                        <button>Compras</button>
                      </Link>
                    </td>
                  </tr>
                </>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clients;
