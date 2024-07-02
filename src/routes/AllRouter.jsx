import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import '../assets/css/style.css';
import Products from '../pages/Products';
import ProductDetails from '../layouts/ProductDetails';
import Cart from '../pages/Cart';
import Featured from '../layouts/Featured';
import { CartProvider } from '../contex/CartContext';
import ThankYou from '../component/ThankYou';

function AllRouter() {
  return (
    <CartProvider>
      <Routes>
        <Route exact path='/*' element={<Home />} />
        <Route exact path='/Products' element={<Products />} />
        <Route exact path='/Productdetails' element={<ProductDetails />} />
        <Route exact path="/Featured" element={<Featured />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/thankyou" element={<ThankYou/>} />
      </Routes>
    </CartProvider>
  );
}

export default AllRouter;
