import React, { useEffect, useState } from "react";
import "./products.css";
const url = import.meta.env.VITE_URL;
import AdminNavBar from "../dashboard/AdminNavBar";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProduct] = useState([{ images: "" }]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleDeleteProduct = async (result) => {
    const productId = result.target.className;

    try {
      const response = await fetch(`${url}/product/delete/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert("Produto excluído com sucesso!");
        navigate("/admin/dashboard/products");
      } else {
        alert("Houve algum erro! Faça login novamente.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetProducts = async () => {
    try {
      const response = await fetch(`${url}/products`);

      const responseJson = await response.json();

      setProduct(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-products">
      <AdminNavBar />

      <div className="p-content">
        <h1>Lista de Produtos</h1>
        <button>
          <Link
            style={{ color: "white" }}
            to={"/admin/dashboard/products/create"}
          >
            Criar Produto
          </Link>
        </button>

        <ul>
          {products ? (
            products.map((result) => (
              <>
                <li>
                  <div className="item">
                    <img
                      src={result.images[0]}
                      style={{
                        width: "60px",
                      }}
                      alt="product image"
                    />
                    <p className="title">{result.name}</p>
                    <p className="price">R${result.price}</p>
                    <p>Quantidade: {result.quantity}</p>

                    <div className="buttons">
                      <button>
                        <Link
                          style={{ color: "white" }}
                          to={`/admin/dashboard/products/edit/${result.id}`}
                        >
                          Editar
                        </Link>
                      </button>
                      <button
                        onClick={handleDeleteProduct}
                        className={result.id}
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </li>
              </>
            ))
          ) : (
            <>Você não tem produtos no estoque, adicione algum!</>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Products;
