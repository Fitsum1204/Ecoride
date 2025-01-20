import React from "react";
import Ecoride from "../assets/Michehel.jpeg";
//import Image2 from "../assets/conc.jpeg";
import { Link } from "react-router-dom";

const ConciergeTour = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Info Section */}
      <section
        id="about"
        className="flex flex-col lg:flex-row items-center px-4 sm:px-6 md:px-16 lg:px-32 xl:px-64 py-16 gap-8"
      >
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left space-y-6">
          <h2 className="text-4xl font-extrabold text-green-700 leading-snug">
            Concierge Tour
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Experience Costa Rica like never before with our Countrywide
            Concierge Tours, designed to provide your family with a seamless and
            immersive adventure from start to finish. From the moment you arrive
            at the airport until your departure, a dedicated local naturalist
            will be by your side to plan, book, and guide you through the
            wonders of Costa Rica. Whether you’re exploring pristine beaches,
            lush rainforests, or volcanic landscapes, every detail of your
            journey will be tailored to your interests and preferences. With
            flexible pricing based on the number of days and tours chosen, this
            bespoke service ensures an unforgettable, stress-free experience
            where every moment is enriched by expert knowledge and personalized
            care.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Ecoride}
            alt="Eco-Friendly Travel"
            className="w-full max-w-lg rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
          />
        </div>
        
      </section>
    </div>
  );
};

export default ConciergeTour;
