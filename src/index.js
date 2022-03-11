import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import { CookiesProvider } from 'react-cookie';
import { CartProvider} from 'react-use-cart'
import { Context } from 'context/context.js'

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Context>
        <App/>
      </Context>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
