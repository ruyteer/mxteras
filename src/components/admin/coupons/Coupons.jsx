import { Link } from "react-router-dom";
import AdminNavBar from "../dashboard/AdminNavBar";
import "./coupons.css";
import React, { useEffect, useState } from "react";
const url = import.meta.env.VITE_URL;

function Coupons() {
  const [coupon, setCoupon] = useState([{}]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    handleGetCoupons();
  }, []);

  const handleGetCoupons = async () => {
    try {
      const response = await fetch(`${url}/coupons`);

      const responseJson = await response.json();
      setCoupon(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCoupon = async (result) => {
    const couponId = result.target.className;

    try {
      const response = await fetch(`${url}/coupon/delete/${couponId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert("Cupom excluído com sucesso!");
        navigate("/admin/dashboard/coupons");
      } else {
        alert("Houve algum erro! Faça login novamente.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="coupons">
      <AdminNavBar />

      <div className="coupons-content">
        <h1>Cupons</h1>
        <Link to={"/admin/dashboard/coupon/create"}>
          <button>Criar cupom</button>
        </Link>

        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Disconto</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody>
            {coupon ? (
              coupon.map((result) => (
                <>
                  <tr>
                    <td>{result.code}</td>
                    <td>{result.discount}</td>
                    <td>
                      <Link to={`/admin/dashboard/coupons/edit/${result.id}`}>
                        <button>Editar</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={handleDeleteCoupon}
                        className={result.id}
                      >
                        Excluir
                      </button>
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

export default Coupons;
