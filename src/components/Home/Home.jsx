import React from "react";
import banner1 from "../../assets/banner-1.png";
import "./home.css";
import Products from "./products/Products";

function Home() {
  return (
    <main>
      <section className="slide-show">
        <img
          src={banner1}
          alt="banner 1"
          style={{
            width: "1286px",
            height: "428px",
          }}
        />
      </section>

      <section className="products-page-one">
        <div className="titles">
          <h1>NADMO ou GDMO (Inglês - Global)</h1>
          <a href="/">Ver todos</a>
        </div>
        <div className="line"></div>
        <Products category={"nadmo"} />
      </section>
    </main>
  );
}

export default Home;
