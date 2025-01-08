import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppIcon from './components/WhatsAppIcon';
import Services from './components/Services';
import Hero from './components/Hero';
import Transport from './components/Transport';
import TranslateWidget from './components/TranslateWidget';
import Contact from './components/Contact';
import LocalTours from './components/LocalTours';
import Footer from './components/Footer';
import Hotels from './components/Hotels';
import ConciergeTour from './components/ConciergeTour';
const App = () => {
  return (
    <Router>
       <Navbar />
      <WhatsAppIcon /> 
      <TranslateWidget />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/localtours" element={<LocalTours />} />
       
        <Route path="/transport" element={<Transport />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/concierge" element={<ConciergeTour />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
