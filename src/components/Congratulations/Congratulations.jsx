import React from "react";
import "./congrats.css";
import { useParams, useSearchParams } from "react-router-dom";

function Congratulations() {
  const items = useSearchParams();

  const handleNavigate = () => {
    window.location.href = `https://wa.me/+5583998490964?text=Olá,%20eu%20acabei20%de20%comprar20%um20%produto!20%Código20%da20%compra:20%${items[0].get(
      "payment_id"
    )}`;
  };

  return (
    <div className="congrats">
      <h1 className="title">Recebemos seu pedido!</h1>

      <p>
        Obrigado por escolher a gente! Número do pedido{" "}
        {items[0].get("payment_id")}
      </p>
      <p>Se você comprou Teras, estaremos esperando você no local da foto</p>
      <p>(Dats-ch0 vmon)</p>

      <img
        src="https://media.discordapp.net/attachments/1141863712144240642/1141878052062765208/1_2.png?width=695&height=463"
        alt=""
      />

      <h1 className="subtitle">
        Informe o número do pedido no grupo ou com Alex
      </h1>

      <button onClick={handleNavigate}>Alex WhatsApp</button>
    </div>
  );
}

export default Congratulations;
