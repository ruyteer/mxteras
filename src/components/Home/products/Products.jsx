import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL;

function Products({ category, limit }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleNavigate = (id) => {
    const navigate = useNavigate();

    navigate(`/buy/${id}`);
  };

  const handleGetProduct = async () => {
    try {
      const response = await fetch(`${url}/products`, {
        method: "GET",
      });

      const responseJson = await response.json();

      setProduct(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = product
    .filter((result) => {
      if (category === "nadmo") {
        return result.category === "nadmo";
      } else if (category === "ladmo") {
        return result.category === "ladmo";
      } else if (category === "conta") {
        return result.category === "conta";
      }

      return true;
    })
    .slice(0, limit);

  return (
    <section className="products">
      <div className="product-card">
        <ul>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((result) => (
              <>
                {result.quantity > 0 ? (
                  <Link to={`/product/${result.id}`} style={{ color: "black" }}>
                    <li>
                      <div className="items">
                        <img
                          src={result.images[0]}
                          alt="prouct logo"
                          style={{
                            width: "60%",
                            height: "80%",
                          }}
                        />
                        <a>{result.name}</a>
                        <span className="price">R$ {result.price}</span>
                        <p>em até 12x de R$ {(result.price / 12).toFixed(2)}</p>

                        <div className="stock">
                          {result.quantity === 1 ? (
                            <>
                              <p style={{ color: "red", fontSize: "13px" }}>
                                Apenas {result.quantity} unidade restante
                              </p>
                            </>
                          ) : result.quantity < 1 ? (
                            <>
                              <p style={{ color: "red", fontSize: "13px" }}>
                                Esgotado!
                              </p>
                            </>
                          ) : (
                            <>Em estoque, {result.quantity} unidades</>
                          )}
                        </div>
                        {result.quantity > 0 ? (
                          <>
                            <Link to={`/buy/${result.id}`}>
                              <button>Comprar agora</button>
                            </Link>
                          </>
                        ) : (
                          <>
                            <button className="button">
                              <Link style={{ color: "white" }} to={`#`}>
                                Esgotado
                              </Link>
                            </button>
                          </>
                        )}
                      </div>
                    </li>
                  </Link>
                ) : (
                  <Link style={{ color: "black" }}>
                    <li>
                      <div className="items">
                        <img
                          src={result.images[0]}
                          alt="prouct logo"
                          style={{
                            width: "60%",
                            height: "80%",
                          }}
                        />
                        <a>{result.name}</a>
                        <span className="price">R$ {result.price}</span>
                        <p>em até 12x de R$ {(result.price / 12).toFixed(2)}</p>

                        <div className="stock">
                          {result.quantity === 1 ? (
                            <>
                              <p style={{ color: "red", fontSize: "13px" }}>
                                Apenas {result.quantity} unidade restante
                              </p>
                            </>
                          ) : result.quantity < 1 ? (
                            <>
                              <p style={{ color: "red", fontSize: "13px" }}>
                                Esgotado!
                              </p>
                            </>
                          ) : (
                            <>Em estoque, {result.quantity} unidades</>
                          )}
                        </div>
                        {result.quantity > 0 ? (
                          <>
                            <Link to={`/buy/${result.id}`}>
                              <button>Comprar agora</button>
                            </Link>
                          </>
                        ) : (
                          <>
                            <button className="button">
                              <Link style={{ color: "white" }} to={`#`}>
                                Esgotado
                              </Link>
                            </button>
                          </>
                        )}
                      </div>
                    </li>
                  </Link>
                )}
              </>
            ))
          ) : (
            <>
              <p
                className="alert"
                style={{
                  margin: "50px",
                  fontSize: "16px",
                }}
              >
                Não há nada no estoque!
              </p>
            </>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Products;
