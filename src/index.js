import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import { CookiesProvider } from 'react-cookie';
import { CartProvider } from "react-use-cart"

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
