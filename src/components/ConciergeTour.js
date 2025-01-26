import React from "react";
import Ecoride from "../assets/Michehel.jpeg";
//import Image2 from "../assets/conc.jpeg";
import { Link } from "react-router-dom";

const ConciergeTour = () => {
  return (
    <div className="bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Explore Costa Rica with Our Countrywide Concierge Tours
        </h1>
        <p className="text-lg md:text-xl text-center mb-12">
          Experience a seamless, immersive adventure through Costa Rica’s natural wonders. From breathtaking beaches to vibrant rainforests, our bespoke tours are tailored just for you.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Birding Section */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Birding Paradise</h2>
            <p>
              Discover over 900 bird species in Costa Rica’s lush ecosystems. From the resplendent quetzal in Monteverde to vibrant toucans and macaws, every moment is a birdwatcher’s dream.
            </p>
          </div>
          {/* Mountain Adventures Section */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Mountain Adventures</h2>
            <p>
              Embark on thrilling hikes, zipline through dense canopies, or relax in natural hot springs. Explore the rugged beauty of Arenal Volcano and the Talamanca Mountains.
            </p>
          </div>
          {/* Relaxing Beaches Section */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Relaxing Beaches</h2>
            <p>
              Lounge on pristine sands, surf the waves of Tamarindo, or snorkel in Cahuita’s coral reefs. Costa Rica’s coastlines offer a perfect blend of adventure and serenity.
            </p>
          </div>
          {/* Wildlife Encounters Section */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Wildlife Encounters</h2>
            <p>
              Spot playful monkeys, majestic sloths, and vibrant dart frogs in Costa Rica’s rainforests. Experience nocturnal wildlife with guided night hikes.
            </p>
          </div>
          {/* Sustainable Exploration Section */}
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Sustainable Exploration</h2>
            <p>
              Learn about Costa Rica’s conservation efforts, from reforestation to carbon neutrality. Every adventure reflects the country’s commitment to preserving its natural beauty.
            </p>
          </div>
        </div>
        {/* Tailored Experience Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Tailored for You
          </h2>
          <p className="text-lg">
            With flexible pricing and personalized itineraries, our tours ensure every moment matches your interests. Whether it’s eco-luxury lodges, adrenaline adventures, or serene escapes, we’ve got you covered.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Plan your adventure today!
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
      </div>
    </div>
  );
};


const oldConciergeTour = () => {
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
