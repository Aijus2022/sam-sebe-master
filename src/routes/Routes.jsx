import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProductTypePage from '../pages/ProductTypePage';
import ProductPage from '../pages/ProductPage';
import Basket from '../components/Basket';
import Checkout from '../components/Checkout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:category" element={<ProductTypePage />} />
        <Route path="/course/:id" element={<ProductPage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

