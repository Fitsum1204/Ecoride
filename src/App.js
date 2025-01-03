import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Services from './components/Services';
import Hero from './components/Hero';

const App = () => {
  return (
    <Router>
       <Navbar />
      {/*<WhatsAppIcon /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
       
      </Routes>
    </Router>
  );
};

export default App;
