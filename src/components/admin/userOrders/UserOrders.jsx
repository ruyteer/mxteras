import React, { useEffect, useState } from "react";
import AdminNavBar from "../dashboard/AdminNavBar";
import "./orders.css";
import { Link, useParams } from "react-router-dom";
const url = import.meta.env.VITE_URL;

function UserOrders() {
  const { id } = useParams();
  const [orders, setOrders] = useState([{}]);
  const [productNames, setProductNames] = useState({});

  useEffect(() => {
    handleGetOrders();
  }, []);

  const handleGetOrders = async () => {
    const response = await fetch(`${url}/order/${id}`);
    const responseJson = await response.json();
    setOrders(responseJson);
    console.log(responseJson);
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

  const handleGetProductName = async (orderList) => {
    const names = {};
    if (orders.productId && !names[orders.productId]) {
      const productResponse = await fetch(`${url}/product/${orders.productId}`);
      const productJson = await productResponse.json();
      names[orders.productId] = productJson.name;
    }

    setProductNames(names);
  };

  useEffect(() => {
    if (orders.length > 1) {
      handleGetProductNames(orders);
    } else {
      handleGetProductName(orders);
    }
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
              <th>Método de Pagamento</th>
              <th>Preço da Compra</th>
              <th>Produto</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 1 ? (
              orders.map((result) => (
                <tr key={result.orderID}>
                  <td>{result.orderID}</td>

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
              <>
                <tr key={orders.orderID}>
                  <td>{orders.orderID}</td>

                  <td style={{ textTransform: "capitalize" }}>
                    {orders.paymentMethod === "bank_transfer"
                      ? "pix"
                      : orders.paymentMethod}
                  </td>
                  <td>R${orders.price}</td>

                  <td>{productNames[orders.productId]}</td>
                  <td>{orders.quantity}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserOrders;
