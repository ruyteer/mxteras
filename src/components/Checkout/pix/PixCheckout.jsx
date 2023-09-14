import React, { useEffect, useState } from "react";
import "./pixcheckout.css";
import { Payment, initMercadoPago } from "@mercadopago/sdk-react";
import { useParams } from "react-router-dom";
initMercadoPago("TEST-0ead4303-3a1d-42f9-b2e9-c2d01679bfaf");
const url = "http://localhost:3000";

function PixCheckout() {
  const data = JSON.parse(localStorage.getItem("data"));
  const [product, setProduct] = useState({});
  const [qrCode, setQrCode] = useState("");
  const [hideButton, setHideButton] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const { id } = useParams();

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
    if (data.discount > 0) {
      const price = (
        product.price *
        data.quantity *
        (1 - data.discount / 100)
      ).toFixed(2);

      const pixDiscount = (5 / 100) * price;

      return price - pixDiscount;
    } else {
      const price = (product.price * data.quantity).toFixed(2);
      const pixDiscount = (5 / 100) * price;
      return price - pixDiscount;
    }
  };

  const initialization = {
    amount: handleGetPrice(),
  };

  const onSubmit = async (formData) => {
    return new Promise(async (resolve, reject) => {
      const form = {
        data: formData,
        userId: JSON.parse(localStorage.getItem("userId")),
        productId: id,
        quantity: data.quantity,
        price: handleGetPrice(),
      };

      console.log(form);

      try {
        const response = await fetch(`${url}/order/pix/process_payment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        const responseJson = await response.json();

        setQrCode(responseJson.qrcode);
        setPaymentStatus(responseJson.status);

        // localStorage.removeItem("data");
        // localStorage.removeItem("userId");

        //  navigate(`/payment/success/${orderID}`);
        resolve();
      } catch (error) {
        console.log(error);
        setError("Pagamento não autorizado! Tente novamente.");
        reject();
      }
    });
  };

  const onError = async (error) => {
    console.log(error);
  };

  return (
    <>
      <h1 className="title-pix">Pagamento Pix</h1>
      <div className="pix-checkout">
        <div className="pix-card">
          <p>
            Valor a ser pago: <span className=".span">{handleGetPrice()}</span>
          </p>
          <Payment
            customization={{
              paymentMethods: {
                bankTransfer: "all",
              },

              visual: {
                hideFormTitle: true,
                style: {
                  customVariables: {
                    buttonTextColor: "white",
                    secondaryColor: "black",
                  },
                },
              },
            }}
            initialization={initialization}
            onSubmit={onSubmit}
            onError={onError}
          />
        </div>

        {qrCode != "" ? (
          <>
            <div className="pix-qrcode">
              <p>
                Abra seu aplicativo de pagamento onde você utiliza o Pix e
                escolha a opção Ler QR Code
              </p>

              <img
                src={`data:image/png;base64, ${qrCode}`}
                style={{
                  width: "300px",
                  height: "300px",
                }}
              />

              <p>
                Status da sua compra: <span>{paymentStatus}</span>
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default PixCheckout;
