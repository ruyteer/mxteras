import React, { useEffect, useState } from "react";
import "./one-product.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import ImageMagnifier from "./Lupa";

const url = "http://localhost:3000";

function OneProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({ images: [] });
  const [imageSrc, setImageSrc] = useState({});

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleNavigate = () => {
    const navigate = useNavigate();

    navigate(`/buy/${product.id}`);
  };

  const handleImageSrc = (e) => {
    e.preventDefault();

    setImageSrc(e.target);
  };

  const handleGetProduct = async () => {
    try {
      const response = await fetch(`${url}/product/${id}`, {
        method: "GET",
      });

      const responseJson = await response.json();
      setProduct(responseJson);
      console.log(responseJson);
      console.log("aa");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main">
      <nav className="path-links">
        <ul>
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <svg
              class="icon icon--arrow-right"
              viewBox="0 0 8 12"
              role="presentation"
              style={{
                height: "8px",
                width: "6px",
              }}
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M2 2l4 4-4 4"
                fill="none"
                strokeLinecap="square"
              ></path>
            </svg>
          </li>
          <li>
            <Link to={`/contas`}>
              <p style={{ textTransform: "capitalize" }}>{product.category}</p>
            </Link>
          </li>
          <li>
            <svg
              class="icon icon--arrow-right"
              viewBox="0 0 8 12"
              role="presentation"
              style={{
                height: "8px",
                width: "6px",
              }}
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M2 2l4 4-4 4"
                fill="none"
                strokeLinecap="square"
              ></path>
            </svg>
          </li>
          <li>
            <Link to={`/#`}>{product.name}</Link>
          </li>
        </ul>
      </nav>
      <div className="one-product">
        <section className="left-section">
          <div className="gallery">
            <div className="img-list">
              <ul>
                {product && product.images ? (
                  product.images.map((result) => (
                    <li key={result}>
                      <a href={result}>
                        <img
                          src={result}
                          alt=""
                          className="img"
                          onClick={handleImageSrc}
                        />
                      </a>
                    </li>
                  ))
                ) : (
                  <></>
                )}
              </ul>
            </div>
            <div className="principal-img">
              <div className="img">
                <ImageMagnifier
                  src={
                    imageSrc.src
                      ? imageSrc.src
                      : product.images[0]
                      ? product.images[0]
                      : ""
                  }
                  width={540}
                  height={550}
                  magnifieWidth={100}
                  magnifierHeight={100}
                  zoomLevel={2}
                />
              </div>
            </div>
          </div>
          <div className="desc">
            <h1>Descrição</h1>

            <p>{product.description}</p>
          </div>
        </section>
        <section className="right-section">
          <div className="titles">
            <h1>{product.name}</h1>
            <p>
              Vendido e enviado pela{" "}
              <span style={{ fontWeight: 800 }}>MxTeras©</span>
            </p>
            <div className="line"></div>
          </div>

          <div className="content">
            <div className="price">
              <p className="p">Preço:</p>
              <div className="number">
                <h1>R$ {product.price}</h1>
                <p>Em até 12 vezes de {(product.price / 10).toFixed(2)}</p>
                <span
                  style={{
                    marginTop: "10px",
                    padding: "4px 10px 4px 10px",
                    borderRadius: "21px",
                    color: "#0086ff",
                    fontSize: "12px",
                    border: "1px solid #0086ff",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#0086ff"
                    style={{
                      height: "16px",
                      paddingRight: "3px",
                      marginBottom: "-4px",
                    }}
                  >
                    <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 488.6C280.3 518.1 231.1 518.1 200.8 488.6L103.3 391.2H112.6C132.6 391.2 151.5 383.4 165.7 369.2L242.4 292.5zM262.5 218.9C256.1 224.4 247.9 224.5 242.4 218.9L165.7 142.2C151.5 127.1 132.6 120.2 112.6 120.2H103.3L200.7 22.76C231.1-7.586 280.3-7.586 310.6 22.76L407.8 119.9H392.6C372.6 119.9 353.7 127.7 339.5 141.9L262.5 218.9zM112.6 142.7C126.4 142.7 139.1 148.3 149.7 158.1L226.4 234.8C233.6 241.1 243 245.6 252.5 245.6C261.9 245.6 271.3 241.1 278.5 234.8L355.5 157.8C365.3 148.1 378.8 142.5 392.6 142.5H430.3L488.6 200.8C518.9 231.1 518.9 280.3 488.6 310.6L430.3 368.9H392.6C378.8 368.9 365.3 363.3 355.5 353.5L278.5 276.5C264.6 262.6 240.3 262.6 226.4 276.6L149.7 353.2C139.1 363 126.4 368.6 112.6 368.6H80.78L22.76 310.6C-7.586 280.3-7.586 231.1 22.76 200.8L80.78 142.7H112.6z"></path>
                  </svg>
                  <h>
                    Até{" "}
                    <span>
                      <b>5% OFF</b>
                    </span>{" "}
                    no PIX
                  </h>
                </span>
              </div>
            </div>

            <div className="stock">
              <p>Estoque:</p>
              <span>
                {product.quantity === 1 ? (
                  <>
                    <p style={{ color: "red", fontSize: "15px" }}>
                      Apenas {product.quantity} unidade restante
                    </p>
                  </>
                ) : product.quantity < 1 ? (
                  <>
                    <p style={{ color: "red", fontSize: "15px" }}>Esgotado!</p>
                  </>
                ) : (
                  <>Em estoque, {product.quantity} unidades</>
                )}
              </span>
            </div>

            {product.quantity > 0 ? (
              <>
                <button onClick={handleNavigate}>
                  <Link style={{ color: "white" }} to={`/buy/${product.id}`}>
                    Comprar agora
                  </Link>
                </button>
              </>
            ) : (
              <>
                <button onClick={handleNavigate}>
                  <Link style={{ color: "red" }} to={`#`}>
                    Esgotado
                  </Link>
                </button>
              </>
            )}

            <div
              style={{
                padding: "12px 20px 1px 20px",
                borderRadius: "10px 10px 0 0",
                background: "#f5f5f5",
                marginTop: "40px",
                display: "flex",
              }}
            >
              <div style={{ marginRight: "18px" }}>
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 488.636 488.636"
                  width="45"
                  height="45"
                  style={{
                    width: "45px",
                  }}
                  xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        fill="var(--product-cor-dos-titles)"
                        d="M384.936,125.936c7.1,0,9.1-9.6,2.7-12.5l-249.9-110.8c-15.2-6.8-33.1,0-39.9,15.3l-87.5,196.2 c-6.8,15.2,0,33.1,15.3,39.9l50.4,21.8c6.3,2.8,13.5-1.8,13.5-8.7v-83.3c0-31.9,25.9-57.8,57.8-57.8h237.6V125.936z"
                      ></path>
                      <path
                        fill="#404040"
                        d="M450.336,153.136h-303.1c-16.9,0-30.6,13.7-30.6,30.6v214.1c0,16.9,13.7,30.6,30.6,30.6h40.7c-1-6-1.5-12.1-1.5-18.3 c0-7,0.7-13.8,1.9-20.5h-32.8v-102.5h286.6v102.4h-32.9c1.2,6.7,1.9,13.5,1.9,20.5c0,6.2-0.5,12.3-1.5,18.3h40.7 c16.9,0,30.6-13.7,30.6-30.6v-214C480.936,166.836,467.236,153.136,450.336,153.136z M442.136,224.036h-286.6v-32.1h286.6V224.036 z"
                      ></path>
                      <path
                        fill="var(--product-cor-dos-titles)"
                        d="M298.836,331.436c-43.4,0-78.6,35.2-78.6,78.6s35.2,78.6,78.6,78.6s78.6-35.2,78.6-78.6S342.236,331.436,298.836,331.436z M321.436,441.036c-3.4,4.2-7.9,7-13.1,8.4c-2.3,0.6-3.3,1.8-3.2,4.2c0.1,2.3,0,4.6,0,7c0,2.1-1.1,3.2-3.1,3.2 c-2.5,0.1-5,0.1-7.5,0c-2.2,0-3.2-1.3-3.2-3.4c0-1.7,0-3.4,0-5.1c0-3.7-0.2-3.9-3.8-4.5c-4.6-0.7-9.1-1.8-13.3-3.8 c-3.3-1.6-3.7-2.4-2.7-5.9c0.7-2.6,1.4-5.2,2.2-7.7c0.9-3,1.7-3.3,4.5-1.9c4.7,2.4,9.6,3.8,14.8,4.4c3.3,0.4,6.6,0.1,9.7-1.3 c5.8-2.5,6.7-9.2,1.8-13.2c-1.7-1.4-3.5-2.4-5.5-3.2c-5.1-2.2-10.4-3.9-15.1-6.8c-7.8-4.6-12.7-11-12.1-20.5 c0.6-10.7,6.7-17.3,16.5-20.9c4-1.5,4.1-1.4,4.1-5.6c0-1.4,0-2.9,0-4.3c0.1-3.2,0.6-3.7,3.8-3.8c1,0,2,0,2.9,0 c6.8,0,6.8,0,6.8,6.8c0,4.8,0,4.8,4.8,5.5c3.6,0.6,7.1,1.6,10.5,3.1c1.9,0.8,2.6,2.1,2,4.1c-0.8,2.9-1.6,5.9-2.6,8.7 c-0.9,2.7-1.8,3.1-4.4,1.9c-5.3-2.6-10.8-3.6-16.6-3.3c-1.5,0.1-3,0.3-4.4,0.9c-5,2.2-5.9,7.8-1.6,11.2c2.2,1.7,4.6,3,7.2,4.1 c4.5,1.8,8.9,3.6,13.2,6C327.236,412.636,330.936,429.536,321.436,441.036z"
                      ></path>
                    </g>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </div>

              <p
                style={{
                  lineHeight: "20px",
                  fontSize: "14px",
                }}
              >
                Parcele suas compras
                <br />
                <b
                  style={{
                    color: "black",
                  }}
                >
                  nas melhores bandeiras
                </b>
              </p>
            </div>

            <div
              className="cards-div"
              style={{
                padding: "8px",
                background: "#ffffff",
                borderRadius: "0 0 10px 10px",
                boxShadow: "0px 10px 30px -10px #0000002e",
              }}
            >
              <div
                class="payment-list list-unstyled d-flex justify-content-center"
                style={{ padding: "0", top: "0" }}
              >
                <img
                  class="payment-list__item"
                  src="//cdn.shopify.com/s/files/1/0590/0963/0400/t/4/assets/amex.svg?v=4820021115096198109"
                />
                <img
                  class="payment-list__item"
                  src="//cdn.shopify.com/s/files/1/0590/0963/0400/t/4/assets/boleto.svg?v=14312488300961080651"
                />
                <img
                  class="payment-list__item"
                  src="//cdn.shopify.com/s/files/1/0590/0963/0400/t/4/assets/mastercard.svg?v=5325054530245235231"
                />
                <img
                  class="payment-list__item"
                  src="//cdn.shopify.com/s/files/1/0590/0963/0400/t/4/assets/visa.svg?v=4363052815883027950"
                />
                <img
                  class="payment-list__item"
                  src="//cdn.shopify.com/s/files/1/0590/0963/0400/t/4/assets/elo.svg?v=16013123390887651456"
                />
                <img
                  class="payment-list__item"
                  src="//cdn.shopify.com/s/files/1/0590/0963/0400/t/4/assets/icon-pix.png?v=7952458606773305251"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OneProduct;
