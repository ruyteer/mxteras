import React from "react";
import "./create-product.css";
import AdminNavBar from "../dashboard/AdminNavBar";
import { useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL;

function CreateProduct() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(`${url}/product/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        alert("Produto criado com sucesso!");
        navigate("/admin/dashboard/products");
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
          <div className="left">
            <div className="input-label">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Digite o nome do produto aqui"
              />
            </div>
            <div className="input-label">
              <label htmlFor="description">Descrição:</label>
              <textarea
                type="text"
                name="description"
                id="description"
                required
                placeholder="Digite a descrição do produto aqui"
              />
            </div>
            <button type="submit">Criar Produto</button>
          </div>
          <div className="right">
            <div className="input-label">
              <label htmlFor="price">Preço:</label>
              <input
                type="number"
                name="price"
                id="price"
                defaultValue={0}
                min={0}
                required
                placeholder="Digite o preço do produto aqui"
              />
            </div>
            <div className="input-label">
              <label htmlFor="quantity">Quantidade:</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                defaultValue={1}
                min={1}
                required
                placeholder="Digite a quantidade do produto aqui"
              />
            </div>
            <div className="input-label">
              <label htmlFor="files">Fotos:</label>
              <input type="file" name="file" id="files" required multiple />
            </div>
            <div className="input-label">
              <label htmlFor="category">Categoria:</label>
              <select name="category" id="category" required inputMode="text">
                <option value="nadmo">Teras Nadmo</option>
                <option value="ladmo">Teras Ladmo</option>
                <option value="conta">Contas</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
