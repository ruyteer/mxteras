import React, { useEffect, useState } from "react";
import "./checkout.css";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
initMercadoPago("TEST-0ead4303-3a1d-42f9-b2e9-c2d01679bfaf");
const url = "http://localhost:3000";

function MainCheckout() {
  const { id } = useParams();
  const localData = JSON.parse(localStorage.getItem("data"));
  const [product, setProduct] = useState({});

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleGetProduct = async () => {
    try {
      const response = await fetch(`${url}/product/${id}`);

      const responseJson = await response.json();
      setProduct(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetPrice = () => {
    const data = JSON.parse(localStorage.getItem("data"));

    if (data.discount > 0) {
      return (
        product.price *
        data.quantity *
        (1 - data.discount / 100)
      ).toFixed(2);
    } else {
      return (product.price * data.quantity).toFixed(2);
    }
  };

  const navigate = useNavigate();

  const onError = async (error) => {
    console.log(error);
  };

  const onSubmit = async (formData) => {
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // resposta de pagamento bem sucedido
          resolve();
        })
        .catch((error) => {
          // erro no pagamento
          reject();
        });
    });
  };

  return (
    <>
      <div className="checkout">
        <h1>Realize seu pagamento abaixo:</h1>
        {/* <div className="checkout-container">
          <form id="form-checkout">
            <h1>Cartão de Crédito ou Débito</h1>
            <div className="input-label">
              <label htmlFor="card-number">Card Number:</label>
              <CardNumber
                placeholder="1234 1234 1234 1234"
                onReady={console.log("Ready")}
                style={{ padding: "0", margin: "0" }}
              />
            </div>
            <div className="input-label">
              <label htmlFor="card-date">Card Expired Date:</label>
              <input type="text" id="card-date" name="card-date" required />
            </div>
            <div className="input-label">
              <label htmlFor="card-cvc">Card CVC:</label>
              <input type="text" id="card-cvc" name="card-cvc" required />
            </div>
            <div className="input-label">
              <label htmlFor="card-owner">Card Owner Name:</label>
              <input type="text" id="card-owner" name="card-owner" required />
            </div>
            <div className="input-label">
              <label htmlFor="installments">Parcelas:</label>
              <input
                type="number"
                min={1}
                defaultValue={1}
                max={12}
                id="installments"
                name="installments"
                required
              />
            </div>

            <button type="submit" className="button">
              Pay
            </button>
          </form>
        </div> */}
        <CardPayment
          initialization={{
            amount: handleGetPrice(),
            payer: {
              email: localData.email,
            },
          }}
          onError={onError}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}

export default MainCheckout;
