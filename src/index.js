import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductContextProvider from './contexts/ProductContextProvider';
import CartContextProvider from './contexts/CartContextProvider';
import AuthContextProvider from './contexts/AuthContextProvider';
import { ThemeProvider } from '@emotion/react';
import { THEME } from './helpers/consts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <ThemeProvider theme={THEME}>
             <App />
          </ThemeProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
