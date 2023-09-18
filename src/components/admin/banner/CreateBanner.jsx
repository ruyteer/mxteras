import React from "react";
import "./create-banner.css";
import AdminNavBar from "../dashboard/AdminNavBar";
import { useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL;

function CreateBanner() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(`${url}/banner/create`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Banner criado com sucesso!");
        navigate("/admin/dashboard/banners");
      } else {
        alert("Houve algum erro! Faça login novamente.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-product">
      <AdminNavBar />

      <div className="content-create">
        <h1>Criar Produto</h1>
        <form onSubmit={handleSubmit}>
          <div className="right">
            <div className="input-label">
              <label htmlFor="files">Foto Do Banner:</label>
              <input type="file" name="file" id="files" required multiple />
            </div>
            <button>Criar Banner</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBanner;
