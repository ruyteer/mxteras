import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import MainCheckout from "./components/Checkout/MainCheckout";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<MainCheckout />} />
      </Routes>
    </>
  );
}

export default Router;
