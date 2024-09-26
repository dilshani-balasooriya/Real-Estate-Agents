import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import AboutPage from './Pages/About';
import ServicesPage from './Pages/Services';
import BlogPage from './Pages/Blogs';
import PricingPage from './Pages/Pricing';
import ContactPage from './Pages/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Set LandingPage as the default home page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
