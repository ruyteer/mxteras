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
  const [error, setError] = useState("");

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

  const handleUpdateProduct = () => {
    if (localData.quantity === product.quantity) {
      return 0;
    }

    return product.quantity - localData.quantity;
  };

  const navigate = useNavigate();

  const onError = async (error) => {
    console.log(error);
  };

  const onSubmit = async (formData) => {
    return new Promise(async (resolve, reject) => {
      const form = {
        data: formData,
        userId: JSON.parse(localStorage.getItem("userId")),
        productId: id,
        quantity: localData.quantity,
        price: handleGetPrice(),
      };

      try {
        const response = await fetch(`${url}/order/card/process_payment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        const responseJson = await response.json();
        console.log(response);

        if (response.status === 200) {
          const orderID = responseJson.id;

          await fetch(`${url}/product/update/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              quantity: handleUpdateProduct(),
            }),
          }).catch((error) => console.log(error));

          localStorage.removeItem("data");
          localStorage.removeItem("userId");

          navigate(`/payment/success/${orderID}`);
          resolve();
        } else if (response.status != 200) {
          throw new Error("payment failed");
        }
      } catch (error) {
        console.log(error);
        setError("Pagamento não autorizado! Tente novamente.");
        reject();
      }
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
        <div className="error-payment">{error}</div>
      </div>
    </>
  );
}

export default MainCheckout;
