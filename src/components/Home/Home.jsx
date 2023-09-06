import React from "react";
import banner1 from "../../assets/banner-1.png";
import banner2 from "../../assets/banner-2.png";
import "./home.css";
import Products from "./products/Products";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <main>
      <section className="slide-show">
        <Carousel>
          <Carousel.Item>
            <img
              src={banner1}
              alt="banner"
              style={{
                width: "1286px",
                height: "428px",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={banner2}
              alt="banner"
              style={{
                width: "1286px",
                height: "428px",
              }}
            />
          </Carousel.Item>
        </Carousel>
      </section>

      <section className="products-page-one">
        <div className="titles">
          <h1>NADMO ou GDMO (Inglês - Global)</h1>
          <a href="/">Ver todos</a>
        </div>
        <div className="line"></div>
        <Products category="nadmo" />
      </section>

      <section className="products-page-one part2">
        <div className="titles">
          <h1>LADMO ou LDMO (Português)</h1>
          <a href="/">Ver todos</a>
        </div>
        <div className="line-ldmo"></div>
        <Products category="ladmo" />
      </section>

      <section className="products-page-one part3">
        <div className="titles">
          <h1>Contas</h1>
          <a href="/">Ver todos</a>
        </div>
        <div className="line-accounts"></div>
        <Products category="contas" />
      </section>

      <section className="info-list">
        <ul>
          <li>
            <svg viewBox="0 0 24 24" role="presentation">
              <g transform="translate(1 1)" fill="none" fillRule="evenodd">
                <circle
                  fill="#000000"
                  fillRule="nonzero"
                  cx="6.5"
                  cy="17.5"
                  r="1.5"
                ></circle>
                <path
                  d="M13 16v4c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                ></path>
                <path
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  d="M22 12H6V0h16zM6 4h16M12 8h-2"
                ></path>
              </g>
            </svg>
            <div className="titles">
              <h1>Compra Segura</h1>
              <p>
                Ambiente seguro para <br />
                pagamentos online
              </p>
            </div>
          </li>
          <li>
            <svg viewBox="0 0 24 22" role="presentation">
              <g
                transform="translate(1 1)"
                strokeWidth="1.5"
                fill="none"
                fillRule="evenodd"
              >
                <path
                  d="M5 10H2M5 15H4"
                  stroke="#000000"
                  strokeLinecap="square"
                ></path>
                <path
                  stroke="#000000"
                  d="M16.829 16H22v-6l-4-2-1-4H9v12h2.171"
                ></path>
                <path d="M0 5h5" stroke="#000000" strokeLinecap="square"></path>
                <path
                  stroke="#000000"
                  strokeLinecap="square"
                  d="M0 0h9v4"
                ></path>
                <circle
                  stroke="#000000"
                  strokeLinecap="square"
                  cx="14"
                  cy="17"
                  r="3"
                ></circle>
                <path
                  stroke="#000000"
                  strokeLinecap="square"
                  d="M13 7v2h2"
                ></path>
              </g>
            </svg>

            <div className="titles">
              <h1>Entrega Rápida</h1>
              <p>
                Entrega na hora ou em <br /> menos de 12 horas
              </p>
            </div>
          </li>

          <li>
            <svg viewBox="0 0 24 22" role="presentation">
              <g strokeWidth="1.5" fill="none" fillRule="evenodd">
                <path
                  stroke="#000000"
                  d="M5 6.1000004L1 9v12h22V9l-4-2.8999996M1 9l22 12M23 9l-11 6"
                ></path>
                <path
                  d="M13.8461533 1C13.0769224 1 12.3846149 1.3846154 12 2c-.3846159-.6153846-1.0769234-1-1.8461542-1C8.9230766 1 8 2 8 3.2307687c0 2.1538463 4 5.4615388 4 5.4615388s4-3.3076925 4-5.4615388C16 2 15.0769224 1 13.8461533 1z"
                  stroke="#000000"
                  strokeLinecap="square"
                ></path>
              </g>
            </svg>

            <div className="titles">
              <h1>Suporte Humanizado</h1>
              <p>
                Separamos alguém da <br />
                equipe apenas para atender <br /> você
              </p>
            </div>
          </li>

          <li>
            <svg viewBox="0 0 23 24" role="presentation">
              <g
                transform="translate(1 1)"
                strokeWidth="1.5"
                fill="none"
                fillRule="evenodd"
              >
                <path stroke="#000000" d="M8 4h8v7"></path>
                <path
                  stroke="#000000"
                  strokeLinecap="square"
                  d="M11 7L8 4l3-3"
                ></path>
                <circle
                  stroke="#000000"
                  strokeLinecap="square"
                  cx="6"
                  cy="20"
                  r="2"
                ></circle>
                <circle
                  stroke="#000000"
                  strokeLinecap="square"
                  cx="18"
                  cy="20"
                  r="2"
                ></circle>
                <path
                  stroke="#000000"
                  strokeLinecap="square"
                  d="M21 5l-2 10H5L3 0H0"
                ></path>
              </g>
            </svg>

            <div className="titles">
              <h1>
                Satisfação ou <br /> Reembolso
              </h1>
              <p>
                Devolução de acordo com a <br /> política de reembolso
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
