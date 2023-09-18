import React, { useEffect, useState } from "react";
import "./banner.css";
import AdminNavBar from "../dashboard/AdminNavBar";
import { Link, useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL;

function Banner() {
  const [banners, setBanners] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    handleGetBanners();
  }, []);

  const handleGetBanners = async () => {
    const response = await fetch(`${url}/banners`);
    const responseJson = await response.json();
    setBanners(responseJson);
  };

  const handleDeleteBanner = async (result) => {
    const bannerId = result.target.className;

    try {
      const response = await fetch(`${url}/banner/delete/${bannerId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Banner excluído com sucesso!");
        navigate("/admin/dashboard/banners");
      } else {
        alert("Houve algum erro! Faça login novamente.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="banners">
      <AdminNavBar />

      <div className="banners-content">
        <h1>Banners</h1>
        <button>
          <Link
            style={{ color: "white" }}
            to={"/admin/dashboard/banners/create"}
          >
            Criar Banner
          </Link>
        </button>

        <ul>
          {banners ? (
            banners.map((result) => (
              <>
                <li>
                  <div className="item">
                    <img
                      src={result.image}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      alt="product image"
                    />
                    <div className="buttons">
                      <button
                        onClick={handleDeleteBanner}
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

export default Banner;
