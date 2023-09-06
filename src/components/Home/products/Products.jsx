import React from "react";
import productLogo from "../../../assets/product-logo.jpg";

function Products(props) {
  return (
    <section className="products">
      <div className="product-card">
        <div className="items">
          <img
            src={productLogo}
            alt="prouct logo"
            style={{
              width: "100%",
              height: "80%",
            }}
          />
          <a href="/">Teras Servidor Alphamon - NADMO</a>
          <span className="price">R$ 0,30</span>
          <p>em até 12x de R$ 0,02</p>
          <span className="stock">Em estoque, 2710 unidades</span>
          <button>Comprar agora</button>
        </div>
      </div>
    </section>
  );
}

export default Products;
