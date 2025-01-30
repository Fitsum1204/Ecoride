import React, { useState } from 'react';
import h1 from '../../assets/detailsPicture/poas5.jpg';
import h2 from '../../assets/detailsPicture/poas1.jpg';
import h3 from '../../assets/detailsPicture/poas2.jpg';
import { FaChevronDown, FaChevronUp,FaUsers, FaClock, FaSuitcase,FaUserTie } from 'react-icons/fa';  // Importing icons for the arrow
import { Link } from 'react-router-dom';

const PoasVolcano = () => {
  // States to handle the toggle for each section
  const [showIncluded, setShowIncluded] = useState(false);
  const [showExpect, setShowExpect] = useState(false);
  const [showDeparture, setShowDeparture] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [showCancellation, setShowCancellation] = useState(false);

  // Toggle functions
  const toggleIncluded = () => setShowIncluded(!showIncluded);
  const toggleExpect = () => setShowExpect(!showExpect);
  const toggleDeparture = () => setShowDeparture(!showDeparture);
  const toggleDuration = () => setShowDuration(!showDuration);
  const toggleCancellation = () => setShowCancellation(!showCancellation);

  return (
    
    <div className="max-w-screen-lg mx-auto p-4">
       {/* Header */}
       <h1 className="text-3xl font-bold text-center mb-8">
      Tour of Poas Volcano 
      </h1>

      {/* Top Images and Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
        {/* Left Column (Image) */}
        <div className="col-span-1 md:col-span-2">
          <div className="h-80">
            <img src={h1} alt="Tour 1" className="w-full h-full object-cover rounded-md" />
          </div>
          {/* About Section */}
          import React from 'react';

    <div className="bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Explore the Majestic Poás Volcano with an Expert Guide
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-center mb-12">
          Embark on a thrilling journey to one of Costa Rica’s most awe-inspiring volcanoes. This guided two-hour tour 
          offers breathtaking views of the massive crater, stunning geothermal landscapes, and the rare cloud forest ecosystem.
        </p>

        {/* Section: Crater & Geothermal Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Crater & Geothermal Wonders</h2>
          <p className="text-lg">
            Witness the enormous Poás crater, nearly 1.5 kilometers in diameter, and its surreal boiling sulfuric lake. 
            Feel the power of geothermal forces as steaming fumaroles release gases from deep within the Earth.
          </p>
        </div>

        {/* Section: Cloud Forest & Unique Ecosystem */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Cloud Forest & Unique Ecosystem</h2>
          <p className="text-lg">
            Explore Poás’s rare high-altitude cloud forest, where acidic volcanic conditions have shaped a unique and resilient landscape. 
            Discover exotic plants like the Poor Man’s Umbrella, giant bromeliads, and orchids that thrive in the volcanic soil.
          </p>
        </div>

        {/* Section: Extended Tour Option */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Extend Your Adventure</h2>
          <p className="text-lg">
            Upgrade your experience with a hike to Laguna Botos, a serene crater lake surrounded by lush forest. Along the way, 
            watch for the elusive resplendent quetzal, one of Costa Rica’s most stunning birds.
          </p>
        </div>


        {/* Section: Why Choose This Tour */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Choose This Tour?</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li><strong>Expert Guidance:</strong> Gain in-depth knowledge from an experienced naturalist.</li>
            <li><strong>Unparalleled Views:</strong> Witness one of the world’s most visually stunning volcanoes.</li>
            <li><strong>Unique Ecosystem:</strong> Discover rare cloud forest plant life and vibrant bird species.</li>
            <li><strong>Tailored Experience:</strong> Enjoy an intimate, small-group setting for a more immersive experience.</li>
          </ul>
        </div>

      </div>


          <div className="mt-4 space-y-4">
            <h2 className="text-2xl font-semibold">About the Tour</h2>
            <p className="text-gray-700 leading-relaxed">
          
            Explore Costa Rica's iconic Poás Volcano on a thrilling four-hour guided tour. Witness the dramatic crater and geothermal activity up close, and extend your adventure for a small fee. No national park ticket included. Perfect for nature lovers and adventure seekers, bring friends along for an unforgettable experience..
            </p>
            <hr className="w-full bg-black mb-4" />
            <ul className="text-gray-700 pl-6 list-inside  space-y-4">
        
        <li className="flex items-center">
          <FaUsers className="mr-2 text-gray-600" />
          All ages, max of 6 per group
        </li>
        
        <li className="flex items-center">
          <FaClock className="mr-2 text-gray-600" />
          Duration: 4 hours including transportation
        </li>
        <li className="flex items-center">
          <FaSuitcase className="mr-2 text-gray-600" />
          One trip a day: Pick up time 8:30 AM
        </li>
        <li className="flex items-center">
          <FaUserTie className="mr-2 text-gray-600" />
          Live guide: English, Spanish
        </li>
      </ul>
            {/* What's Included */}
            <div>
            <hr className="w-full bg-black mb-4" />
              <div className="flex items-center justify-between cursor-pointer" onClick={toggleIncluded}>
                <h3 className="text-xl font-semibold">What's Included</h3>
                {showIncluded ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showIncluded && (
                <ul className="list-disc list-inside text-gray-700">
                  <li>Transportation to/from </li>
                  <li>Guide</li>
                  <li>Entrance Fees to the National Park</li>
                  <li>Snacks and Water</li>
                  <b>What's not Included</b>
                  <li>Lunch</li>
                  <li>Gratuities</li>
                  <li>Alcohol</li>
                </ul>
                
              )}
            </div>

            {/* What to Expect */}
            <div>
            <hr className="w-full bg-black mb-4" />
              <div className="flex items-center justify-between cursor-pointer" onClick={toggleExpect}>
                <h3 className="text-xl font-semibold">What to Expect</h3>
                {showExpect ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showExpect && (
                <div>
                  <li> Weather may impact visibility at the volcano.  In some cases, the tour may be canceled and refunded. </li>
                  <li><strong>Duration:</strong> Approximately 2.5 hours</li>
                  <li><strong>Difficulty Level:</strong> Moderate (some uneven paths and inclines)</li>
                  <li><strong>National Park Ticket:</strong> Not included – purchase in advance</li>
                  <li><strong>Recommended Gear:</strong> Comfortable walking shoes, light jacket, hat, and camera</li>
                </div>
              )}
            </div>

            {/* Departure and Return */}
            <div>
            <hr className="w-full bg-black mb-4" />
              <div className="flex items-center justify-between cursor-pointer" onClick={toggleDeparture}>
                <h3 className="text-xl font-semibold">Departure and Return</h3>
                {showDeparture ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showDeparture && (
                <p className="text-gray-700 leading-relaxed">
                  The tour departs from San Jose at 8:30 AM. After a scenic drive, you’ll reach the Poás Volcano National Park, where the tour begins. The return is around 12:30 AM, ensuring you have plenty of time to enjoy the park and surroundings.
                </p>
              )}
            </div>

            {/* Duration */}
            <div>
            <hr className="w-full bg-black mb-4" />
              <div className="flex items-center justify-between cursor-pointer" onClick={toggleDuration}>
                <h3 className="text-xl font-semibold">Duration</h3>
                {showDuration ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showDuration && (
                <p className="text-gray-700 leading-relaxed">
                  The tour lasts for approximately 4 hoursi with 2.5 hours at the volcano.
                </p>
              )}
            </div>

            {/* Cancellation */}
            <div>
            <hr className="w-full bg-black mb-4" />
              <div className="flex items-center justify-between cursor-pointer" onClick={toggleCancellation}>
                <h3 className="text-xl font-semibold">Cancellation</h3>
                {showCancellation ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showCancellation && (
                <p className="text-gray-700 leading-relaxed">
                  Free cancellation up to 24 hours in advance.
                </p>
              )}
            </div>
          </div>
        </div>
    </div>

        {/* Right Column (Images and Price Section) */}
        <div className="md:col-span-1">
          {/* Right Column Images (Top and Bottom with equal height) */}
          <div className="hidden md:grid grid-rows-2 gap-4 h-80">
            <img src={h2} alt="Tour 2" className="w-full h-full object-cover rounded-md" />
            <img src={h3} alt="Tour 3" className="w-full h-full object-cover rounded-md" />
          </div>

          {/* Price Section (Aligned below About Section on smaller screens) */}
          <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-md space-y-4">
            <div className="flex flex-col justify-between items-start mb-6">
              <span className="text-xl font-semibold">From $130</span>
              <span className="text-1xl font-extralight text-grey-300">per person</span>
              <span className="text-1xl font-extralight text-grey-300">Discounts for children and  larger groups</span>
              
            </div>
            <div className='mb-4'>
            <Link to='/schedule' className="w-full bg-yellow-600 text-white py-2 px-4 m-0 rounded-md hover:bg-yellow-700 sm:m-0 sm:px-20 md:px-10">
              Schedule Now
            </Link>
            </div>
            <div className="text-sm text-gray-600">
              * Free cancellation up to 24 hours in advance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoasVolcano;
