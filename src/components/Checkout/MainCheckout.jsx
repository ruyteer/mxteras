import React from "react";
import "./checkout.css";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
initMercadoPago("APP_USR-1ace6f55-6a24-43cb-add8-64b972cb29f7");

function MainCheckout() {
  // dentro desse objeto eu posso passar os dados do comprador
  // posso passar email, cpf e o valor do produto que está sendo vendido
  const initialization = {
    amount: 100,
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
          // receber o resultado do pagamento
          resolve();
        })
        .catch((error) => {
          // lidar com a resposta de erro ao tentar criar o pagamento
          reject();
        });
    });
  };

  const onError = async (error) => {
    // callback chamado para todos os casos de erro do Brick
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
      <CardPayment
        initialization={initialization}
        onSubmit={onSubmit}
        onError={onError}
        onReady={onReady}
      />
    </>
  );
}

export default MainCheckout;
