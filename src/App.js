import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppIcon from './components/WhatsAppIcon';
import Services from './components/Services';
import Hero from './components/Hero';
import Transport from './components/Transport';
import TranslateWidget from './components/TranslateWidget';
import Contact from './components/Contact';

import Footer from './components/Footer';
import Hotels from './components/Hotels';
import ConciergeTour from './components/ConciergeTour';
import Schedule from './components/Schedule';
import PoasVolcano from './components/detailTours/PoasVolcano';
import Doka from './components/detailTours/Doka';
import Sarchi from './components/detailTours/Sarchi';
import Waterfall from './components/detailTours/Waterfall';
import Mirador from './components/detailTours/Mirador';
import PoasDoka from './components/detailTours/PoasDoka';
import PoasMirador from './components/detailTours/PoasMirador';
const App = () => {

  return (
    <Router>
       <Navbar />
      <WhatsAppIcon /> 
      <TranslateWidget />
      
      <Routes>
        <Route path="/" element={<Hero />} />
       
       
        <Route path="/transport" element={<Transport />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" element={<Schedule />} />
      
        <Route path="/poasvolcano" element={<PoasVolcano />} />
        <Route path="/poasdoka" element={<PoasDoka />} />
        <Route path="/poasmirador" element={<PoasMirador />} />
        <Route path="/doka" element={<Doka />} />
        <Route path="/sarchi" element={<Sarchi />} />
        <Route path="/waterfall" element={<Waterfall />} />
        <Route path="/mirador" element={<Mirador />} />
         <Route path="/concierge" element={<ConciergeTour />} /> 
      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;
