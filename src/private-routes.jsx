import React, { useEffect } from "react";
import { useJwt } from "react-jwt";
import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { isExpired } = useJwt(token);

  const verify = () => {
    if (!token) {
      return navigate("/admin");
    }

    if (isExpired) {
      console.log(isExpired);
      return navigate("/admin");
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return children;
}

export default PrivateRoutes;
