import React, { useEffect, useState } from "react";
import AdminNavBar from "../dashboard/AdminNavBar";
import "./orders.css";
import { Link } from "react-router-dom";
const url = import.meta.env.VITE_URL;

function Orders() {
  const [orders, setOrders] = useState([]);
  const [userNames, setUserNames] = useState({});
  const [productNames, setProductNames] = useState({});

  useEffect(() => {
    handleGetOrders();
  }, []);

  const handleGetOrders = async () => {
    const response = await fetch(`${url}/orders`);
    const responseJson = await response.json();
    setOrders(responseJson);
  };

  const handleGetUserNames = async (orderList) => {
    const names = {};
    await Promise.all(
      orderList.map(async (order) => {
        if (order.userId && !names[order.userId]) {
          const userResponse = await fetch(`${url}/user/${order.userId}`);
          const userJson = await userResponse.json();
          names[order.userId] = userJson.name;
        }
      })
    );
    setUserNames(names);
  };

  const handleGetProductNames = async (orderList) => {
    const names = {};
    await Promise.all(
      orderList.map(async (order) => {
        if (order.productId && !names[order.productId]) {
          const productResponse = await fetch(
            `${url}/product/${order.productId}`
          );
          const productJson = await productResponse.json();
          names[order.productId] = productJson.name;
        }
      })
    );
    setProductNames(names);
  };

  useEffect(() => {
    handleGetUserNames(orders);
    handleGetProductNames(orders);
  }, [orders]);

  return (
    <div className="orders">
      <AdminNavBar />
      <div className="orders-content">
        <h1>Compras</h1>

        <table>
          <thead>
            <tr>
              <th>ID Da Compra</th>
              <th>Cliente</th>
              <th>Método de Pagamento</th>
              <th>Preço da Compra</th>
              <th>Produto</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {orders ? (
              orders.map((result) => (
                <tr key={result.orderID}>
                  <td>{result.orderID}</td>

                  <td>{userNames[result.userId]}</td>
                  <td style={{ textTransform: "capitalize" }}>
                    {result.paymentMethod === "bank_transfer"
                      ? "pix"
                      : result.paymentMethod}
                  </td>
                  <td>R${result.price}</td>
                  <td>{productNames[result.productId]}</td>
                  <td>{result.quantity}</td>
                </tr>
              ))
            ) : (
              <></>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
