import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BasketProvider } from './context/BasketContext';
import './styles/global.css'; // Import Tailwind CSS
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductTypePage from './pages/ProductTypePage';
import ProductPage from './pages/ProductPage';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BasketProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses/:category" element={<ProductTypePage />} />
              <Route path="/course/:id" element={<ProductPage />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </BasketProvider>
  );
};

export default App;





