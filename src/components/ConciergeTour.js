import React from "react";
import Ecoride from "../assets/Michehel.jpeg";
import { Link } from "react-router-dom";

const ConciergeTour = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Info Section */}
      <h1 className="text-3xl md:text-5xl font-bold text-center   px-6 md:px-16 lg:px-32 xl:px-64 py-4 text-green-700">
        Explore Costa Rica with Our Countrywide Concierge Tours
      </h1>
      <p className="text-lg md:text-xl text-center   md:px-16 lg:px-32 xl:px-64 py-4">
        Experience a seamless, immersive adventure through Costa Rica’s
        natural wonders. From breathtaking beaches to vibrant rainforests,
        our bespoke tours are tailored just for you.
      </p>
      <section
     
        className="flex flex-col lg:flex-col items-center px-4 sm:px-6 md:px-16 lg:px-32 xl:px-64 py-2 gap-8  "
      >
        {/* Text Content */}
        <div className="w-full  text-left ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{/* grid gap-6 sm:gap-8 sm:grid-cols-2 lg:gap-8 lg:grid-cols-3 xl:grid-cols-3*/ }
            {/* Birding Section */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-bold mb-4">Birding Paradise</h2>
              <p>
                Discover over 900 bird species in Costa Rica’s lush ecosystems.
                From the resplendent quetzal in Monteverde to vibrant toucans
                and macaws, every moment is a birdwatcher’s dream.
              </p>
            </div>
            {/* Mountain Adventures Section */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-bold mb-4">Mountain Adventures</h2>
              <p>
                Embark on thrilling hikes, zipline through dense canopies, or
                relax in natural hot springs. Explore the rugged beauty of
                Arenal Volcano and the Talamanca Mountains.
              </p>
            </div>
            {/* Relaxing Beaches Section */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-bold mb-4">Relaxing Beaches</h2>
              <p>
                Lounge on pristine sands, surf the waves of Tamarindo, or snorkel
                in Cahuita’s coral reefs. Costa Rica’s coastlines offer a perfect
                blend of adventure and serenity.
              </p>
            </div>
            {/* Wildlife Encounters Section */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-bold mb-4">Wildlife Encounters</h2>
              <p>
                Spot playful monkeys, majestic sloths, and vibrant dart frogs in
                Costa Rica’s rainforests. Experience nocturnal wildlife with
                guided night hikes.
              </p>
            </div>
            {/* Sustainable Exploration Section */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-bold mb-4">Sustainable Exploration</h2>
              <p>
                Learn about Costa Rica’s conservation efforts, from reforestation
                to carbon neutrality. Every adventure reflects the country’s
                commitment to preserving its natural beauty.
              </p>
            </div>
          </div>
          {/* Tailored Experience Section */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Tailored for You
            </h2>
            <p className="text-lg px-4">
              With flexible pricing and personalized itineraries, our tours
              ensure every moment matches your interests. Whether it’s eco-luxury
              lodges, adrenaline adventures, or serene escapes, we’ve got you
              covered.
            </p>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({  top: 900,
                left: 100, behavior: "smooth" })}
              className="inline-block px-8 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Plan your adventure today!
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Ecoride}
            alt="Eco-Friendly Travel"
            className="w-full max-w-lg rounded-lg shadow-xl "
          />
        </div>
      </section>
    </div>
  );
};

export default ConciergeTour;
