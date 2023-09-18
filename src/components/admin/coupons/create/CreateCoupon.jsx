import React from "react";
import AdminNavBar from "../../dashboard/AdminNavBar";
import { useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL;

function CreateCoupon() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const code = document.getElementById("code").value;
    const discount = document.getElementById("discount").value;

    try {
      const response = await fetch(`${url}/coupon/create`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, discount }),
      });

      if (response.ok) {
        alert("Cupom criado com sucesso!");
        navigate("/admin/dashboard/coupons");
      } else {
        alert("Houve um erro! Faça login novamente!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-product">
      <AdminNavBar />

      <div className="content-create">
        <h1>Criar Cupom</h1>
        <form onSubmit={handleSubmit}>
          <div className="left">
            <div className="input-label">
              <label htmlFor="code">Código do Cupom:</label>
              <input
                type="text"
                name="code"
                id="code"
                required
                placeholder="Digite o código do produto aqui"
              />
            </div>
            <div className="input-label">
              <label htmlFor="discount">Desconto:</label>
              <input
                type="number"
                min={1}
                defaultValue={1}
                max={100}
                name="discount"
                id="discount"
                required
              />
            </div>
            <button type="submit">Criar Cupom</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCoupon;
