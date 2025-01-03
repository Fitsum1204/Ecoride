import React, { Fragment } from 'react';
import Ecoride from '../assets/EcoRide.png';

const Hero = () => {
  return (
    <Fragment>
      {/* Hero Section */}
      <section className="relative w-full h-[530px]">
        {/* Background with Gradient and Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/public/coverpage.jpeg')]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-start justify-center text-left h-full text-white p-6 sm:p-10 md:p-20 lg:p-32 xl:p-64">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-normal mb-4">
            Explore the World, Sustainably
          </h1>
          <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg font-normal leading-tight tracking-normal font-sans">
            Discover eco-friendly accommodations and unforgettable eco-tourism activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="py-2 px-4 bg-green-700 text-white font-bold rounded hover:bg-green-800">
              Explore Tours
            </button>
            <button className="py-2 px-4 bg-green-700 text-white font-bold rounded hover:bg-green-800">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Info Section sm:p-10 md:p-20 lg:p-32 xl:p-64*/}
      <section className="flex flex-col lg:flex-row items-center p-4 sm:p-2 md:p-16 md:flex-row lg:px-32 xl:px-64 py-8 gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-xl font-semibold md:text-sm lg:text-xl text-green-600 mb-4">Explore sustainably</p>
          <h2 className="text-3xl md:text-xl lg:text-3xl font-bold mb-4">
            Your Eco-Friendly Adventure Awaits
          </h2>
          <p className="text-base md:text-sm lg:text-base text-gray-600 mb-6">
            EcoRide connects you with nature through sustainable and eco-friendly tours. Our app is
            designed to provide you with seamless navigation and a comprehensive log of your
            adventures. From breathtaking hikes to serene kayaking experiences, each tour is crafted
            to minimize your environmental impact while maximizing your enjoyment. Join us in
            preserving the beauty of our planet, one adventure at a time. Based in a location that
            values nature, EcoRide is your partner in exploring responsibly.
          </p>
          <a href="#service" className="underline hover:text-green-800">
            Get in touch
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Ecoride}
            alt="Eco-Friendly Travel"
            className="w-full lg:w-[400px] rounded shadow-lg"
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
