import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import MainCheckout from "./components/Checkout/MainCheckout";
import ProductPage from "./components/ProductPage/ProductPage";
import OneProduct from "./components/Product/OneProduct";
import Payment from "./components/Checkout/payment/Payment";
import Congratulations from "./components/Congratulations/Congratulations";
import PagSeguro from "./components/Checkout/pagseguro/PagSeguro";
import PixCheckout from "./components/Checkout/pix/PixCheckout";
import AdminLogin from "./components/admin/AdminLogin";

function Router() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/nadmo" element={<ProductPage type={"nadmo"} />} />
        <Route path="/ladmo" element={<ProductPage type={"ladmo"} />} />
        <Route path="/contas" element={<ProductPage type={"contas"} />} />
        <Route path="/product/:id" element={<OneProduct />} />
        <Route path="/buy/:id" element={<Payment />} />
        <Route path="/checkout/mp/:id" element={<MainCheckout />} />
        <Route path="/checkout/pix/:id" element={<PixCheckout />} />
        <Route path="/checkout/pagseguro/:id" element={<PagSeguro />} />
        <Route path="/payment/success/:id" element={<Congratulations />} />

        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </>
  );
}

export default Router;
