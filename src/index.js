import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import { CookiesProvider } from 'react-cookie';
<<<<<<< HEAD
=======

>>>>>>> 3d4f7d33347d7f11971f383d8f6a6add0836da52

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
