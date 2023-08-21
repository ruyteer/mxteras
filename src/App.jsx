import Router from './Router';
import Header from './components/Home/Header';

function App() {
  return (
    <>
      {/* AQUI EU CHAMO O ROUTER PRA TRATAR AS ROTAS. NÃO MEXE AQUI*/}
      <Header />
      <Router />
    </>
  );
}

export default App;
