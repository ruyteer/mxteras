import React, { useEffect, useState } from "react";
const url = "http://localhost:3000";

function Products({ category }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    handleGetProduct();
  }, []);

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

  const filteredProducts = product.filter((result) => {
    if (category === "nadmo") {
      return result.category === "nadmo";
    } else if (category === "ladmo") {
      return result.category === "ladmo";
    } else if (category === "conta") {
      return result.category === "conta";
    }

    return true;
  });

  return (
    <section className="products">
      <div className="product-card">
        <ul>
          {filteredProducts.map((result) => (
            <>
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
                  <a href="/">{result.name}</a>
                  <span className="price">R$ {result.price}</span>
                  <p>em até 12x de R$ {(result.price / 12).toFixed(2)}</p>
                  <ul>
                    <li className="stock">
                      {result.quantity === 1 ? (
                        <>
                          <p style={{ color: "red", fontSize: "13px" }}>
                            Apenas {result.quantity} unidade restante
                          </p>
                        </>
                      ) : result.quantity < 1 ? (
                        <>Esgotado!</>
                      ) : (
                        <> Em estoque, {result.quantity} unidades</>
                      )}
                    </li>
                  </ul>
                  <button>Comprar agora</button>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Products;
