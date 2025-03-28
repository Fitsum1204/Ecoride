import React, { Fragment, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
//import Ecoride from '../assets/EcoRide.png';
import F1 from '../assets/family.jpeg';
import F2 from '../assets/pexels-simon-robben-55958-614810.jpg';
import F3 from '../assets/family3.jpeg';
import flyer from "../assets/flyer.jpeg"; 


const Hero = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const handleClick = () => navigate('/services');

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.7, ease: 'easeOut' },
    }),
  };

  const buttonVariants = {
    hover: { scale: 1.15, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', backgroundColor: '#059669' },
    tap: { scale: 0.9 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
   
  };

  return (
    <Fragment>
      {/* Structured Data for SEO */}
      <HelmetProvider>
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Ecoride Costa Rica",
              "url": "https://ecoride.cr",
              "logo": "https://ecoride.cr/logo.png",
              "image": "https://ecoride.cr/hero-image.jpg",
              "description": "Ecoride Costa Rica offers eco-friendly adventure tours, sustainable travel experiences, and guided nature excursions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Green Trail",
                "addressLocality": "San José",
                "addressCountry": "CR",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "9.7489",
                "longitude": "-83.7534",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+50685499997",
                "contactType": "customer service",
              },
            })}
          </script>
        </Helmet>
      </HelmetProvider>

      {/* Hero Section with Parallax */}
      <motion.section
        id="home"
        className="relative w-full h-[700px] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-[url('/public/coverpage.jpeg')]"
          style={{ zIndex: 0 }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-700/50 to-transparent" />
      
        <div className="relative flex flex-col items-start justify-center text-left h-full text-white p-6 sm:p-10 md:p-20 lg:p-32 xl:p-64 z-10">
          <motion.h1
            custom={0}
            variants={textVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-2xl"
          >
            Explore the World <span className="text-green-300">Sustainably</span>
          </motion.h1>
          <motion.p
            custom={1}
            variants={textVariants}
            className="mb-8 text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-xl font-light leading-relaxed tracking-wide drop-shadow-md"
          >
          Discover eco-friendly accommodations and unforgettable eco-tourism activities.
          </motion.p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleClick}
            className="py-4 px-12 bg-green-500 text-white font-bold rounded-full shadow-xl hover:bg-green-600 transition-colors duration-300 text-lg"
          >
            Discover Tours
          </motion.button>
        </div>
      </motion.section>

      {/* Info Section */}
      <motion.section
        id="about"
        className="flex flex-col lg:flex-row items-center p-6 sm:p-8 md:p-16 lg:px-32 xl:px-64 py-16 gap-12 bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={heroVariants}
      >
        <div className="w-full lg:w-1/2 text-left px-4">
          <motion.p
            custom={0}
            variants={textVariants}
            className="text-2xl font-semibold text-green-700 mb-4 tracking-wide uppercase"
          >
            Sustainable Travel
          </motion.p>
          <motion.h2
            custom={1}
            variants={textVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
          >
            Welcome to <span className="text-green-600">EcoRide</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={textVariants}
            className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-normal"
          >
            Discover the vibrant beauty of Costa Rica with EcoRide, your trusted partner in eco-friendly travel and transportation. Based in Alajuela, we offer curated local tours and personalized concierge adventures to explore the country’s hidden gems. Our exclusive <strong>private birding tours</strong> take you into Costa Rica’s most diverse habitats, from cloud forests to coastal mangroves, guided by expert naturalists. Whether you choose a <strong>7-day regional tour</strong> or a <strong>14-day cross-country journey,</strong> we provide a fully immersive birding experience tailored to your interests. Additionally, our sustainable transport services ensure reliable and comfortable travel between airports, hotels, and destinations. Experience Costa Rica with EcoRide, where adventure and conservation go hand in hand.
          </motion.p>
          <motion.div custom={3} variants={textVariants}>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-green-600 font-semibold text-lg underline hover:text-green-800 transition-colors duration-300"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src={flyer}
            alt="Eco-Friendly Travel"
            className="w-full lg:w-[500px] rounded-2xl shadow-2xl transform  transition-all duration-500"
          />
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="relative flex flex-col items-center p-6 sm:p-8 md:p-16 lg:px-32 xl:px-64 py-16 gap-12 bg-gradient-to-t from-green-200 to-green-50 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={heroVariants}
      >
        <motion.h2
          custom={0}
          variants={textVariants}
          className="text-4xl lg:text-5xl font-bold text-center text-green-800 mb-12 drop-shadow-md"
        >
          Voices of Our Explorers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {[
            {
              img: F1,
              text: '"A fabulous day at Poás Volcano and Doka Coffee Farm with Michael—unforgettable!"',
              name: 'Eco Enthusiast Family',
            },
            {
              img: F3,
              text: '"EcoRide lets you explore the world while protecting it. Highly recommend!"',
              name: 'Nature Lover',
              
            },
            {
              img: F2,
              text: '"Seamless and eco-conscious from start to finish. A total game-changer!"',
              name: 'David M.',
              sub: 'Adventure Seeker',
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 bg-opacity-90 backdrop-filter backdrop-blur-sm"
            >
              <div className="flex flex-col items-center mb-6">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-28 h-28 rounded-full shadow-lg object-cover border-4 border-green-300"
                />
              </div>
              <p className="text-gray-700 italic mb-4 text-center text-lg font-light">
                {testimonial.text}
              </p>
              <h3 className="text-xl font-semibold text-green-700 text-center">{testimonial.name}</h3>
              {testimonial.sub && (
                <p className="text-sm text-gray-500 text-center mt-1">{testimonial.sub}</p>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="absolute inset-0 opacity-20 bg-[url('/public/coverpage.jpeg')] bg-cover bg-center"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
        />
      </motion.section>
    </Fragment>
  );
};

export default Hero;