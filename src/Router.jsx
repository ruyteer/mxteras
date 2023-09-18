import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";

import ProductPage from "./components/ProductPage/ProductPage";
import OneProduct from "./components/Product/OneProduct";
import Payment from "./components/Checkout/payment/Payment";
import Congratulations from "./components/Congratulations/Congratulations";
import PagSeguro from "./components/Checkout/pagseguro/PagSeguro";

import AdminLogin from "./components/admin/AdminLogin";
import Dashboard from "./components/admin/dashboard/Dashboard";
import PrivateRoutes from "./private-routes";
import Products from "./components/admin/products/Products";
import CreateProduct from "./components/admin/products/CreateProduct";
import EditProduct from "./components/admin/products/EditProduct";
import Clients from "./components/admin/clients/Clients";
import Coupons from "./components/admin/coupons/Coupons";
import CreateCoupon from "./components/admin/coupons/create/CreateCoupon";
import EditCoupon from "./components/admin/coupons/edit/EditCoupon";
import Orders from "./components/admin/orders/Orders";
import UserOrders from "./components/admin/userOrders/UserOrders";
import Banner from "./components/admin/banner/Banner";
import CreateBanner from "./components/admin/banner/CreateBanner";

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
        <Route path="/checkout/pagseguro/:id" element={<PagSeguro />} />
        <Route path="/payment/success/:id" element={<Congratulations />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/dashboard/products"
          element={
            <PrivateRoutes>
              <Products />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/dashboard/products/create"
          element={
            <PrivateRoutes>
              <CreateProduct />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/dashboard/products/edit/:id"
          element={
            <PrivateRoutes>
              <EditProduct />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/dashboard/clients"
          element={
            <PrivateRoutes>
              <Clients />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/dashboard/coupons"
          element={
            <PrivateRoutes>
              <Coupons />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/dashboard/coupon/create"
          element={
            <PrivateRoutes>
              <CreateCoupon />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/dashboard/coupons/edit/:id"
          element={
            <PrivateRoutes>
              <EditCoupon />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/dashboard/orders"
          element={
            <PrivateRoutes>
              <Orders />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/dashboard/orders/:id"
          element={
            <PrivateRoutes>
              <UserOrders />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/dashboard/banners"
          element={
            <PrivateRoutes>
              <Banner />
            </PrivateRoutes>
          }
        />
        <Route
          path="/admin/dashboard/banners/create"
          element={
            <PrivateRoutes>
              <CreateBanner />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
}

export default Router;
