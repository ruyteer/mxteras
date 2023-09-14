import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:3000";

function AdminLogin() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${url}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const responseJson = await response.json();

      if (response.ok) {
        localStorage.setItem("token", responseJson);
        navigate("/admin/dashboard");
      } else {
        setError("Invalid credentials!");
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="admin-login">
      <h1>Admin Dashboard</h1>

      <form onSubmit={handleFormSubmit}>
        <div className="input-label">
          <label htmlFor="email">Login:</label>
          <input
            type="text"
            name="email"
            id="email"
            required
            placeholder="email@gmail.com"
          />
        </div>
        <div className="input-label">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="password123"
          />
        </div>

        <button className="button">Login</button>

        <div
          className="error-admin"
          style={{
            marginTop: "20px",
            color: "red",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
