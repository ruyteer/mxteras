import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MainCheckout from "./components/Checkout/MainCheckout";
import ProductPage from "./components/ProductPage/ProductPage";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<MainCheckout />} />
        <Route path="/nadmo" element={<ProductPage type={"nadmo"} />} />
        <Route path="/ladmo" element={<ProductPage type={"ladmo"} />} />
        <Route path="/contas" element={<ProductPage type={"contas"} />} />
      </Routes>
    </>
  );
}

export default Router;
