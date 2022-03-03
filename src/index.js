import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import { CookiesProvider } from 'react-cookie';
import { CartProvider} from 'react-use-cart'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
