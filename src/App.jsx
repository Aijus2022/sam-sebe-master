import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import { BasketProvider } from './context/BasketContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductTypePage from './pages/ProductTypePage';
import ProductPage from './pages/ProductPage';
import Basket from './components/Basket'; // Full basket page
import Checkout from './components/Checkout';
import AboutUs from './pages/AboutUs'; // Import the new "About Us" page
import Contact from './pages/Contact';
const App = () => {
  return (
    <BasketProvider>
      <Router>
        <div className="app-layout">
          <Header /> {/* Mini Basket is integrated into the Header */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses/:category" element={<ProductTypePage />} />
              <Route path="/course/:id" element={<ProductPage />} />
              <Route path="/basket" element={<Basket />} /> {/* Full Basket Page */}
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about-us" element={<AboutUs />} /> {/* "About Us" Page */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </BasketProvider>
  );
};

export default App;




