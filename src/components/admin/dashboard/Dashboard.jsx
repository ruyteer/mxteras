import React, { useEffect, useState } from "react";
import "./dashboard.css";
import AdminNavBar from "./AdminNavBar";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("token");
  const { isExpired } = useJwt(jwt);
  const [logged, setLogged] = useState(false);

  return (
    <div className="dashboard">
      <AdminNavBar />
      <div className="main-card"></div>
    </div>
  );
}

export default Dashboard;
