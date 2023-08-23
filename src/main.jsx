import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Get the element with the id 'root'
const root = document.getElementById('root');

// Define the root element
const rootElement = (
  // Enable strict mode for additional checks and warnings
  <React.StrictMode>
    {/* Set up BrowserRouter for client-side routing */}
    <BrowserRouter>
      {/* Render the App component */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Create a root element for rendering
const rootRender = ReactDOM.createRoot(root);

// Render the root element
rootRender.render(rootElement);
