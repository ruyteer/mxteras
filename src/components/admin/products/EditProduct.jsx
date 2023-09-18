import React, { useEffect, useState } from "react";
import "./create-product.css";
import AdminNavBar from "../dashboard/AdminNavBar";
import { useNavigate, useParams } from "react-router-dom";
const url = import.meta.env.VITE_URL;

function EditProduct() {
  const [product, setProduct] = useState({ images: [""] });
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleGetProduct = async () => {
    try {
      const response = await fetch(`${url}/product/${id}`);

      const responseJson = await response.json();

      setProduct(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;
    const category = document.getElementById("category").value;
    const formData = {
      name,
      description,
      price,
      quantity,
      category,
    };

    try {
      const response = await fetch(`${url}/product/update/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Produto editado com sucesso!");
        navigate("/admin/dashboard/products");
      } else {
        alert("Houve algum erro! Faça login novamente.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-product">
      <AdminNavBar />
      <div className="content-create">
        <h1>Editar Produto</h1>
        <form onSubmit={handleSubmit}>
          <div className="left">
            <div className="input-label">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={product.name}
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
                defaultValue={product.description}
                required
                placeholder="Digite a descrição do produto aqui"
              />
            </div>
            <button type="submit">Editar Produto</button>
          </div>
          <div className="right">
            <div className="input-label">
              <label htmlFor="price">Preço:</label>
              <input
                type="text"
                name="price"
                id="price"
                defaultValue={product.price}
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
                defaultValue={product.quantity}
                min={1}
                required
                placeholder="Digite a quantidade do produto aqui"
              />
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

export default EditProduct;
