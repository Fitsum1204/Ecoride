import React, { Fragment } from 'react';
import { Helmet ,HelmetProvider} from 'react-helmet-async';
import Ecoride from '../assets/EcoRide.png';
import F1 from '../assets/family.jpeg';
import F2 from '../assets/pexels-simon-robben-55958-614810.jpg';
import F3 from '../assets/family3.jpeg';
import { useNavigate, Link } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handelClick = () => { navigate('/services'); };

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
              "addressCountry": "CR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "9.7489",
              "longitude": "-83.7534"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+50685499997",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>
      </HelmetProvider>

      {/* Hero Section */}
      <section id="home" className="relative w-full h-[530px]">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/public/coverpage.jpeg')]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <div className="relative flex flex-col items-start justify-center text-left h-full text-white p-6 sm:p-10 md:p-20 lg:p-32 xl:p-64">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-normal mb-4">
            Explore the World, Sustainably
          </h1>
          <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg font-normal leading-tight tracking-normal font-sans">
            Discover eco-friendly accommodations and unforgettable eco-tourism activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="py-3 px-10 bg-green-500 text-white font-bold rounded hover:bg-green-600" onClick={handelClick}>
              View Tours
            </button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="about" className="flex flex-col lg:flex-row items-center p-4 sm:p-2 md:p-16 md:flex-row lg:px-32 xl:px-64 py-8 gap-8">
        <div className="w-full lg:w-1/2 text-left px-4">
          <p className="text-xl font-semibold md:text-sm lg:text-xl text-green-600 mb-4">Explore sustainably</p>
          <h2 className="text-3xl md:text-xl lg:text-3xl font-bold mb-4">
            Welcome to <span className='text-green-600'>EcoRide</span>
          </h2>
          <p className="text-base md:text-sm lg:text-base text-gray-600 mb-6">
          Discover the vibrant beauty of Costa Rica with EcoRide, your trusted partner in eco-friendly travel and transportation. Based in Alajuela, we offer curated local tours and personalized concierge adventures to explore the country’s hidden gems. Our exclusive <strong>private birding tours</strong>take you into Costa Rica’s most diverse habitats, from cloud forests to coastal mangroves, guided by expert naturalists. Whether you choose a <strong>7-day regional tour</strong> or a <strong>14-day cross-country journey</strong>, we provide a fully immersive birding experience tailored to your interests. Additionally, our sustainable transport services ensure reliable and comfortable travel between airports, hotels, and destinations. Experience Costa Rica with EcoRide, where adventure and conservation go hand in hand.
          </p>
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="underline hover:text-green-800">
            Get in touch
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img src={Ecoride} alt="Eco-Friendly Travel" className="w-full lg:w-[400px] rounded shadow-lg" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative flex flex-col items-center p-4 sm:p-2 md:p-16 lg:px-32 xl:px-64 py-8 gap-8 bg-green-50">
        <div className="relative w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-green-700 mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center mb-4">
                <img src={F1} alt="people" className="w-80 h-80 rounded-full shadow-md" />
              </div>
              <p className="text-gray-600 italic mb-4">
                "Our family spent a fabulous day with Michael visiting both Poás Volcano and Doka Coffee Farm..."
              </p>
              <h3 className="text-lg font-semibold text-green-700">Eco Enthusiast Family</h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center mb-4">
                <img src={F3} alt="David M." className="w-80 h-80 rounded-full shadow-md" />
              </div>
              <p className="text-gray-600 italic mb-4">
                "We highly recommend EcoRide to anyone who wants to explore the world while preserving nature."
              </p>
              <p className="text-lg font-semibold text-green-700">Nature Lover</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center mb-4">
                <img src={F2} alt="David M." className="w-60 h-60 rounded-full shadow-md" />
              </div>
              <p className="text-gray-600 italic mb-4">
                "A seamless experience from start to finish. The app's navigation and eco-friendly options are a game-changer."
              </p>
              <h3 className="text-lg font-semibold text-green-700">David M.</h3>
              <p className="text-sm text-gray-500">Adventure Seeker</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
