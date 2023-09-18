import React, { useEffect, useState } from "react";
import "./payment.css";
import { useNavigate, useParams } from "react-router-dom";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
initMercadoPago("APP_USR-1ace6f55-6a24-43cb-add8-64b972cb29f7");
const url = import.meta.env.VITE_URL;

function Payment() {
  const [selectedLink, setSelectedLink] = useState(null);
  const [gateway, setGateway] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState({ images: [""] });
  const [quantity, setQuantity] = useState(1);
  const [coupons, setCoupons] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState("");
  const [errorForm, setErrorForm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    handleGetProduct();
    handleGetCoupons();
  }, []);

  const handleGetPrice = () => {
    if (discount > 0) {
      return (product.price * (1 - discount / 100)).toFixed(2);
    } else {
      return product.price;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nick = document.getElementById("nick").value;
    const phone = document.getElementById("phone").value;

    const data = {
      name,
      email,
      nick,
      phone,
      gateway,
      quantity,
      discount,
    };

    const requiredFields = ["name", "email", "nick", "phone"];

    for (const field of requiredFields) {
      if (!data[field]) {
        return setErrorForm(`Complete todos os campos!`);
      } else if (!data["gateway"]) {
        return setErrorForm("Selecione uma forma de pagamento!");
      }
    }

    localStorage.setItem("data", JSON.stringify(data));
    setErrorForm("");

    if (gateway === "mercado-pago") {
      try {
        const response = await fetch(`${url}/user/create`, {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            nickname: nick,
            number: phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const repsonseJson = await response.json();

        localStorage.setItem("userId", JSON.stringify(repsonseJson));
      } catch (error) {
        console.log(error);
      }

      const { response } = await handleCreatePreference();
      window.location.href = response.init_point;
    } else if (gateway === "binance") {
      window.location.href = `https://wa.me/+5583998490964?text=Olá,%20quero%20fazer%20a%20compra%20do%20produto:%20${
        product.name
      }%20pela%20binance%20no%20valor%20de%20${
        handleGetPrice() * quantity
      }%20reais!`;
    } else if (gateway === "pagseguro") {
      try {
        const response = await fetch(`${url}/user/create`, {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            nickname: nick,
            number: phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const repsonseJson = await response.json();

        localStorage.setItem("userId", JSON.stringify(repsonseJson));
      } catch (error) {
        console.log(error);
      }
      window.location.href = `https://wa.me/+5583998490964?text=Olá,%20quero%20fazer%20a%20compra%20do%20produto:%20${
        product.name
      }%20pela%20pagseguro%20no%20valor%20de%20${
        handleGetPrice() * quantity
      }%20reais!`;
    } else if (gateway === "pix") {
      try {
        const response = await fetch(`${url}/user/create`, {
          method: "POST",
          body: JSON.stringify({
            name: name,
            email: email,
            nickname: nick,
            number: phone,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const repsonseJson = await response.json();

        localStorage.setItem("userId", JSON.stringify(repsonseJson));
      } catch (error) {
        console.log(error);
      }

      const { response } = await handleCreatePixPreference();
      window.location.href = response.init_point;
      console.log(response);
    }
  };

  const handleChangeQuantity = (e) => {
    e.preventDefault();

    setQuantity(e.target.value);
  };

  const handleGetProduct = async () => {
    try {
      const response = await fetch(`${url}/product/${id}`, {
        method: "GET",
      });

      const responseJson = await response.json();

      setProduct(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLinkClick = (linkId) => {
    setSelectedLink(linkId);
    setGateway(linkId);
  };

  const handleGetCoupons = async () => {
    try {
      const response = await fetch(`${url}/coupons`);

      const responseJson = await response.json();

      setCoupons(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyCoupons = (e) => {
    e.preventDefault();

    const value = document.getElementById("cupom").value;

    const element = document.getElementById("discount");

    const filter = coupons.filter((result) => result.code === value);

    if (filter.length > 0) {
      setDiscount(filter.map((result) => result.discount));
      element.className = "discounted";
      setError("");
    } else {
      setError("O cupom é inválido!");
    }
  };

  const handleCreatePreference = async () => {
    console.log(handleGetPrice());
    try {
      const response = await fetch(`${url}/order/preference/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: product.name,
          description: product.description,
          price: handleGetPrice(),
          quantity: quantity,
          image: product.images[0],
        }),
      });

      const responseJson = await response.json();

      console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreatePixPreference = async () => {
    const discount = (5 / 100) * handleGetPrice();
    try {
      const response = await fetch(`${url}/order/preference/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: product.name,
          description: product.description,
          price: handleGetPrice() - discount,
          quantity: quantity,
          image: product.images[0],
          method: "pix",
        }),
      });

      const responseJson = await response.json();

      console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="payment">
      <nav className="pix-discount">
        <h1>Desconto de 5% em compras no PIX!</h1>
      </nav>
      <form onSubmit={handleSubmit}>
        <section className="personal-info">
          <h1>Identifique-se</h1>

          <p>
            Utilizaremos seu e-mail para: <br /> Identificar seu perfil,
            histórico
            <br />
            de compras, notificação de <br />
            pedidos e carrinho de compras
          </p>

          <div className="input-label">
            <label htmlFor="name">Nome Completo:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="João Pedro Alvares"
            />
          </div>
          <div className="input-label">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="joaopedro@gmail.com"
            />
          </div>
          <div className="input-label">
            <label htmlFor="nick">Nick do jogo:</label>
            <input type="text" name="nick" id="nick" placeholder="joao_gamer" />
          </div>
          <div className="input-label">
            <label htmlFor="phone">Celular / Whatsapp:</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="00 00 0000-0000"
            />
          </div>
        </section>

        <section className="gateway">
          <h1>Pagamento</h1>
          <p>Escolha seu gateway de pagamento</p>

          <div className="gate-container">
            <a
              className={selectedLink === "mercado-pago" ? "checked" : "img"}
              onClick={() => handleLinkClick("mercado-pago")}
            >
              <img
                src="https://http2.mlstatic.com/frontend-assets/mp-acq-home-landing/logo-mercadopago.jpg"
                alt="mercado pago"
                style={{
                  width: "200px",
                }}
              />
            </a>

            <a
              className={selectedLink === "binance" ? "checked" : "img"}
              onClick={() => handleLinkClick("binance")}
            >
              <img
                src="https://bolhacrypto.com/wp-content/uploads/2023/07/Binance-anuncia-a-listagem-de-mais-quatro-pares-de-negociacao.jpeg"
                alt="binance"
                style={{
                  width: "200px",
                }}
              />
            </a>
            <a
              className={selectedLink === "pagseguro" ? "checked" : "img"}
              onClick={() => handleLinkClick("pagseguro")}
            >
              <img
                src="https://s2-valor.glbimg.com/J3bBTjyv4DMTEK-TWfB-Hml_V1c=/0x16:780x469/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2021/2/E/Y2DGdESDeACz9SWnlH4A/logo-pagseguro.jpg"
                alt="pagseguro"
                style={{
                  width: "200px",
                }}
              />
            </a>
            <a
              className={selectedLink === "pix" ? "checked" : "img"}
              onClick={() => handleLinkClick("pix")}
            >
              <img
                src="https://transfeera.com/wp-content/uploads/2020/05/transfeera-blog-pix.jpg"
                alt="pix"
                style={{
                  width: "200px",
                }}
              />
            </a>
          </div>

          <h2>Desconto de 5% em compras no PIX!</h2>
        </section>

        <section className="resume">
          <h1>Resumo</h1>

          <div className="cupom">
            <div className="input-label">
              <label htmlFor="cupom">Tem um cupom?</label>
              <input
                type="text"
                name="cupom"
                id="cupom"
                placeholder="Código do cupom"
              />
            </div>

            <button onClick={handleVerifyCoupons}>Adicionar</button>
            <div className="error">{error}</div>
          </div>

          <div className="details">
            <p>Produtos:</p>
            <p>R$ {product.price}</p>
          </div>

          <div className="details-quantity">
            <p>Quantidade:</p>
            <p>{quantity}</p>
          </div>

          <div className="not-discounted" id="discount">
            <p>Desconto:</p>
            <p>{discount}%</p>
          </div>

          <div className="value">
            <p className="prices">Total:</p>
            <p className="prices">
              R$
              {discount > 0
                ? (product.price * quantity * (1 - discount / 100)).toFixed(2)
                : (product.price * quantity).toFixed(2)}
            </p>
          </div>

          <div className="product">
            <div className="product-details">
              <p>{product.name}</p>
            </div>

            <div className="quantity">
              <img
                src={product.images[0]}
                alt="imagem do produto"
                style={{
                  width: "50px",
                }}
              />
              <input
                type="number"
                name="quantity"
                id="quantity"
                max={product.quantity}
                defaultValue={1}
                min={1}
                onChange={handleChangeQuantity}
              />
            </div>
          </div>
          <button type="submit" className="button">
            Prosseguir
          </button>
          <div
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
            className="error"
          >
            <p>{errorForm}</p>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Payment;
