import React from "react";
import "./footer.css";
import logo from "/logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <div className="contact">
          <img
            src={logo}
            alt="logo mxteras"
            style={{
              marginTop: "23px",
              width: "300px",
              height: "90px",
            }}
          />
          <span className="section-title">Atendimento ao cliente</span>
          <h3>Horário de Atendimento</h3>

          <p className="hour">Domingo a domingo das 12:00 às 00:00</p>

          <h3>
            Email: <span>sac@mxtera.com</span>
          </h3>
          <h3>
            Tel/Whatsapp: <span>+55 (83) 999849-0964</span>
          </h3>

          <h3>
            CPF/CNPJ: <span>122.576.504-84</span>
          </h3>

          <p class="address">
            © MxTeras
            <br />
            <a
              target="_blank"
              rel="nofollow"
              href="https://pt.shopify.com?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore"
            >
              CPF/CPNJ : 122.576.504-84 | R. Pedro Gondim, 3 - Monte Horebe - PB
            </a>
          </p>
        </div>
        <div className="infos">
          <span className="section-title">Informações</span>
          <ul>
            <li>
              <a href="">Teras</a>
            </li>
            <li>
              <a href="">Política de Privacidade</a>
            </li>
            <li>
              <a href="">Política de Entrega</a>
            </li>
            <li>
              <a href="">Política de Reembolso</a>
            </li>
          </ul>
        </div>

        <div className="contact-me">
          <span className="section-title">Entrar em contato</span>

          <ul>
            <li>
              <a href="">Grupo - MxTeras</a>
            </li>
            <li>
              <a href="">Entregador Alex</a>
            </li>
            <li>
              <a href="">Entregador Gabriel</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="final-considerations">
        <p style={{ fontSize: "10pt" }}>
          Preços e condições de pagamento exclusivos para compras neste site
          oficial, podendo variar com o tempo da oferta. Evite comprar produtos
          mais baratos ou de outras lojas, pois você pode estar sendo
          enganado(a) por um golpista. Caso você compre os mesmos produtos em
          outras lojas,
          <b> não nos responsabilizamos por quaisquer problemas.</b>
        </p>
        <img src="https://cdn.shopify.com/s/files/1/0731/1589/4042/files/Inserir_um_titulo_2.png?v=1678839393"></img>
        <img
          src="https://cdn.shopify.com/s/files/1/0731/1589/4042/files/Inserir_um_titulo_1.png?v=1678839393"
          style={{ margin: "0 15px 0 15px" }}
        ></img>
        <img src="https://cdn.shopify.com/s/files/1/0731/1589/4042/files/Inserir_um_titulo_3.png?v=1678839393"></img>
      </div>
    </footer>
  );
}

export default Footer;
