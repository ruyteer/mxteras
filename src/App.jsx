import Router from './Router';
import Navbar from './components/Home/Navbar';

function App() {
  return (
    <>
      {/* AQUI EU CHAMO O ROUTER PRA TRATAR AS ROTAS. NÃO MEXE AQUI*/}
      <Navbar />
      <Router />
    </>
  );
}

export default App;
