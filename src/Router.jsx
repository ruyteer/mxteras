import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MainCheckout from './components/Checkout/MainCheckout';

//  AQUI TU PODE CRIAR ROTAS E CHAMAR NOVOS ELEMENTOS.
// PARA CRIAR UM ELEMENTO NOVO, SEGUE ESSE PADRÃO:

/* 

import React from "react";
import "./caminho/do/css";

function nomeDoComponente() {
  return <div>Conteudo HTML aqui</div>;
}

export default nomeDoComponente;


*/

// PRA ADICIONAR UMA NOVA ROTA, CRIE UM Route E ADICIONE UM PATH PASSANDO A ROTA E UM element PASSANDO O COMPONENTE CORRESPONDENTE

/**
 * Render the router component.
 *
 * @returns {JSX.Element} The rendered router component.
 */
function Router() {
  return (
    <>
      {/* Define the routes */}
      <Routes>
        {/* Define the home route */}
        <Route path='/' element={<Home />} />
        {/* Define the checkout route */}
        <Route path='/checkout' element={<MainCheckout />} />
      </Routes>
    </>
  );
}

export default Router;
