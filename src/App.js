import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import WhatsAppIcon from './components/WhatsAppIcon';
import Services from './components/Services';
import Hero from './components/Hero';
import Transport from './components/Transport';
import TranslateWidget from './components/TranslateWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hotels from './components/Hotels';
import PoasVolcano from './components/detailTours/PoasVolcano';
import Doka from './components/detailTours/Doka';
import Sarchi from './components/detailTours/Sarchi';
import Waterfall from './components/detailTours/Waterfall';
import Mirador from './components/detailTours/Mirador';
import PoasDoka from './components/detailTours/PoasDoka';
import PoasMirador from './components/detailTours/PoasMirador';
import Schedulewedget from './components/Schedulewedget';
import GuiderPage from './components/Guide';
import BirdingTours from './components/BirdTour';
import ThankYou from './components/ThankYou';
const App = () => {
  return (
    <Router>
      {/*Google Analytics script */}
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VQ2280K3B8"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VQ2280K3B8');
          `}
        </script>
      </Helmet>

      <Navbar />
      <WhatsAppIcon />
      <TranslateWidget />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/services" element={
          <> 
            <Services />
            <Schedulewedget />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/poasvolcano" element={
          <> 
            <PoasVolcano />
            <Schedulewedget />
          </>
        } />
        <Route path="/poasdoka" element={
          <> 
            <PoasDoka />
            <Schedulewedget />
          </>
        } />
        <Route path="/poasmirador" element={
          <> 
            <PoasMirador />
            <Schedulewedget />
          </>
        } />
        <Route path="/doka" element={
          <> 
            <Doka />
            <Schedulewedget />
          </>
        } />
        <Route path="/sarchi" element={
          <> 
            <Sarchi />
            <Schedulewedget />
          </>
        } />
        <Route path="/waterfall" element={
          <> 
            <Waterfall />
            <Schedulewedget />
          </>
        } />
        <Route path="/mirador" element={
          <> 
            <Mirador />
            <Schedulewedget />
          </>
        } />
        <Route path="/birding" element={<BirdingTours />} /> 
        <Route path="/guide" element={<GuiderPage />} />
      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;