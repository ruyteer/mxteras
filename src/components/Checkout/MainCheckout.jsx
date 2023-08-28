import React from "react";
import "./checkout.css";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { redirect, useNavigate } from "react-router-dom";
initMercadoPago("TEST-0ead4303-3a1d-42f9-b2e9-c2d01679bfaf");
const url = "http://localhost:3333/process_payment";

function MainCheckout() {
  const navigate = useNavigate();
  const initialization = {
    amount: 1,
    preferenceId: "513282474-bdc018a2-a710-4cab-a7e8-cf47855e3a35",
  };

  const customization = {
    paymentMethods: {
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      atm: "all",
    },
  };

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    console.log(formData);
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const responseJson = await response.json();
        console.log(responseJson);

        if (formData.payment_method_id === "pix") {
          window.location.href = responseJson.ticket.ticket_url;
        }
        resolve();
      } catch (error) {
        reject();
      }
    });
  };

  const onError = async (error) => {
    console.log(error);
  };

  const onReady = async () => {
    /*
      Callback chamado quando o Brick estiver pronto.
      Aqui você pode ocultar loadings do seu site, por exemplo.
    */
  };

  return (
    <>
      <Payment
        initialization={initialization}
        customization={customization}
        onSubmit={onSubmit}
        onError={onError}
        onReady={onReady}
      />
    </>
  );
}

export default MainCheckout;
