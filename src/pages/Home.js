import React from 'react';
import ImageTextSection from '../components/ImageTextSection';
import PhotoGallery from '../components/PhotoGallery';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <ImageTextSection />
      <PhotoGallery />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
