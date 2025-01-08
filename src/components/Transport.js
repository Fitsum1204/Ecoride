import React from "react";
import { Link } from "react-router-dom";
const Transport = () => {
  

  return (
    <div className="bg-gray-100 p-6 md:p-12">
      {/* Main Transport Content */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4">EcoRide Transportation</h1>
        <p className="text-lg text-gray-700">
          Convenient and Reliable Transportation Services
        </p>
      </header>
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          EcoRide Transportation Services
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          EcoRide offers seamless transportation solutions to make your travels in Costa Rica
          stress-free and enjoyable. Whether you need a ride to or from Juan Santamaría
          International Airport (SJO), shuttles between hotels, or countrywide transport to
          major tourist destinations, we’ve got you covered.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li className="mb-2">
            Rides within 20 miles of your hotel: <strong>$50</strong>
          </li>
          <li className="mb-2">
            Competitive rates available for longer distances upon inquiry.
          </li>
          <li className="mb-2">
            Professional drivers fluent in both Spanish and English for clear communication.
          </li>
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed">
          From meeting you at the airport to taking you to your next adventure, EcoRide’s
          transportation services provide comfort, reliability, and peace of mind every step of
          the way.
        </p>
        <div className="flex flex-row md:flex-row items-center justify-between mt-8">
        <div className="mt-6">
          <a
            href="#contactUs"
            className="bg-green-700 text-white font-medium text-lg px-8 py-3 rounded shadow-lg hover:bg-green-800 transition-colors"
          >
            Book Your Ride
          </a>
        </div>
        
        <div className="mt-6">
          <Link
            to="/hotels"
            className="bg-green-700 text-white font-medium text-lg px-8 py-3 rounded shadow-lg hover:bg-green-800 transition-colors"
          >
            Major Hotels We Serve
          </Link>
        </div>
        </div>
      </section>

      {/* Hotels Section */}
      
    </div>
  );
};

export default Transport;
