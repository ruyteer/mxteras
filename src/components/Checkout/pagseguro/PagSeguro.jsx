import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PagSeguro() {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem("data"));
  const [product, setProduct] = useState({});

  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleGetPrice = () => {
    if (data.discount > 0) {
      return (
        product.price *
        data.quantity *
        (1 - data.discount / 100)
      ).toFixed(2);
    } else {
      return (product.price * data.quantity).toFixed(2);
    }
  };

  const handleGetProduct = async () => {
    const url = "http://localhost:3000";

    try {
      const response = await fetch(`${url}/product/${id}`);

      const responseJson = response.json();

      setProduct(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  return <div>PagSeguro</div>;
}

export default PagSeguro;
