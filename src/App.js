import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
/*////import Hero from './components/Hero';

import Contact from './components/Contact';
import WhatsAppIcon from './components/WhatsAppIcon'
import Home from './pages/Home';*/
import Services from './components/Services';
import Hero from './components/Hero';
import Test from './components/Test';
const App = () => {
  return (
    <Router>
       <Navbar />
      {/*<WhatsAppIcon /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />{/*
        <Route path="/contact" element={<Contact />} /> */}
         <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default App;
