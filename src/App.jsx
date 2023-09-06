import Router from "./Router";
import Header from "./components/Home/Header";
import Footer from "./components/Home/footer/Footer";

/**
 * App component
 *
 * This component represents the main entry point of the application.
 * It renders the header and the router component to handle the routes.
 */
function App() {
  return (
    <>
      {/* AQUI EU CHAMO O ROUTER PRA TRATAR AS ROTAS. NÃO MEXE AQUI*/}
      {/* Render the header */}
      <Header />

      {/* Render the router */}
      <Router />

      <Footer />
    </>
  );
}

export default App;
