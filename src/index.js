import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Context from './context/Context';
import ProductProvider from './context/ProductContext';
//sidebar provider
import SidebarProvider from './context/SidebarContext'
//cart provider
import CartProvider from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
    <ProductProvider>
  <React.StrictMode>
    <Context>
        <App />
    </Context>
  </React.StrictMode>
  </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);