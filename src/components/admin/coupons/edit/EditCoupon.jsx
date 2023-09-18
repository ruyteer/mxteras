import React from "react";
import { useNavigate, useParams } from "react-router-dom";
const url = import.meta.env.VITE_URL;
import AdminNavBar from "../../dashboard/AdminNavBar";

function EditCoupon() {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const code = document.getElementById("code").value;
    const discount = document.getElementById("discount").value;

    try {
      const response = await fetch(`${url}/coupon/edit/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ code, discount }),
      });

      if (response.ok) {
        alert("Produto editado com sucesso!");
        navigate("/admin/dashboard/coupons");
      } else {
        alert("Houve um erro! Faça login novamente");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="create-product">
        <AdminNavBar />

        <div className="content-create">
          <h1>Editar Cupom</h1>
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
              <button type="submit">Editar Cupom</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCoupon;
