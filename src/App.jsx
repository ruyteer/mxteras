import Router from "./Router";
import Header from "./components/Home/Header";
import Footer from "./components/Home/footer/Footer";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <Router />
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
