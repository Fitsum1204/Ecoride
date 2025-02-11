import React, { useState } from 'react';
import h1 from '../../assets/detailsPicture/doka3.avif';
import h2 from '../../assets/detailsPicture/coffee3.jpg';
import h3 from '../../assets/detailsPicture/coffee2.jpg';
import { FaChevronDown, FaChevronUp,FaUsers, FaClock, FaSuitcase,FaUserTie } from 'react-icons/fa';  // Importing icons for the arrow
import { Link } from 'react-router-dom';

const Doka = () => {
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
    
    <div className="w-full pt-4 px-6 md:px-16 lg:px-32 xl:px-64">
       {/* Header */}
       <h1 className="text-3xl font-bold text-center mb-8">
       Private Tour of the Doka Coffee Plantation
      </h1>

      {/* Top Images and Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
        {/* Left Column (Image) */}
        <div className="col-span-1 md:col-span-2">
          <div className="h-80">
            <img src={h1} alt="Tour 1" className="w-full h-full object-cover rounded-md" />
          </div>
          {/* About Section */}

    <div className="bg-gray-50 text-gray-800 p-4 md:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-xl text-green-700 font-bold text-left mb-8">
          Explore the Rich Flavors of Costa Rica at Doka Coffee Plantation
        </h1>

        {/* Introduction */}
        <p className="text-lg  text-left mb-12 pl-3 italic">
          Step into the world of Costa Rican coffee with an exclusive, expert-led tour of the historic 
          Doka Coffee Plantation. Discover the meticulous process of cultivating, harvesting, and roasting 
          some of the finest coffee beans in the world.
        </p>

        {/* Section: Coffee Fields */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-green-700">Explore the Lush Coffee Fields</h2>
          <p className="text-lg pl-3 italic">
            Stroll through the rolling coffee plantations of Doka Estate, where Arabica coffee plants thrive in 
            nutrient-rich volcanic soil. Your expert guide will explain the cultivation process and the factors 
            that contribute to Costa Rica’s globally renowned coffee quality.
          </p>
        </div>

        {/* Section: Meet the Local Coffee Workers */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-green-700">Meet the People Behind the Coffee & Support the Community</h2>
          <p className="text-lg pl-3 italic">
            Engage with the hardworking farmers and coffee pickers who have perfected their craft over generations. 
            Your visit helps support fair wages, education programs, and healthcare initiatives, ensuring that the local 
            community thrives alongside Costa Rica’s rich coffee tradition.
          </p>
        </div>

        {/* Section: Why Choose This Tour */}
        <div className="mb-0">
          <h2 className="text-xl font-bold mb-4 text-green-600">Why Choose This Tour?</h2>
          <ul className="list-disc pl-10 space-y-2 text-lg italic">
            <li ><strong className='text-amber-600'>Delicious sample:</strong> Try six different roasting levels.</li>
            <li ><strong className='text-amber-600'>Exclusive Access:</strong> Tour the oldest coffee wet mill in Costa Rica.</li>
            <li><strong className='text-amber-600'>Expert Guidance:</strong> Learn from coffee specialists about every step of production.</li>
            <li><strong className='text-amber-600'>Unforgettable Tasting:</strong> Sample single-origin coffees, including the sought-after Peaberry bean.</li>
            <li><strong className='text-amber-600'>Support Local Communities:</strong> Help combat poverty and sustain fair wages for coffee farmers.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mt-4 space-y-4 p-6">
        <hr className="w-full bg-black mb-4" />
        <ul className="text-gray-700  list-inside  space-y-4 bg-blue-200 p-4 rounded-md shadow-md italick">
          <li className="flex items-center">
            <FaUsers className="mr-2 text-gray-600" />
            All ages , max of 6 per group
          </li>
          
          <li className="flex items-center">
            <FaClock className="mr-2 text-gray-600" />
            Duration: 3-4 hours depending distance from hotel
          </li>
          <li className="flex items-center">
            <FaSuitcase className="mr-2 text-gray-600" />
            Two trips a day: 8:00AM and 1:00PM
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
                <h3 className="text-xl font-semibold mb-2">What's Included</h3>
                {showIncluded ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showIncluded && (
                <ul className="list-disc list-inside text-md text-gray-700 pl-6 italic">
                  <li><strong className='text-amber-400'>Exclusive Access:</strong> Tour the oldest coffee wet mill in Costa Rica.</li>
                  <li><strong className='text-amber-400'>Expert Guidance:</strong> Learn from coffee specialists about every step of production.</li>
                  <li><strong className='text-amber-400'>Unforgettable Tasting:</strong> Sample single-origin coffees, including the sought-after Peaberry bean.</li>
                  <li><strong className='text-amber-400'>Support Local Communities:</strong> Help combat poverty and sustain fair wages for coffee farmers.</li>
                  <li className='mb-2'><strong className='text-amber-400'>Pick your own coffee</strong></li>
                  <b className='text-red-400 text-lg '>What's not Included</b>
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
                <p className="text-gray-700 leading-relaxed pt-4 pl-6">
                  <i>Best season is Oct - Feb.  Upgraded tour available in season</i>
                </p>
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
                <p className="text-gray-700 leading-relaxed pt-4 pl-6 italic">
                  The tour departs from your hotel 8:00 AM. Return to hotel between 11:00 AM and 12:00 PM
                  Afternoon tour departs from your hotel 1:00 PM. Return to hotel between 4:00 PM and 5:00 PM
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
                <p className="text-gray-700 leading-relaxed pt-4 pl-6 italic">
                  The tour lasts for approximately 3-4 hours depending distance from hotel.
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
                <p className="text-gray-700 leading-relaxed pt-4 pl-6 italic">
                  Free cancellation up to 24 hours in advance.
                </p>
              )}
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
          <div className="sticky top-36 mt-4 bg-slate-50 p-4 rounded-md shadow-md space-y-4">
            <div className="flex flex-col justify-between items-start mb-6">
              <span className="text-xl font-bold">From $100</span>
              <span className="text-1xl font-extralight text-grey-300 italic">per person</span>
              <span className="text-1xl font-extralight text-grey-300 italic">Discounts for children and larger groups</span>
              
            </div>
            <div className='mb-4'>
            <Link to='/schedule' className="w-full bg-yellow-600 text-white py-2 px-4 m-0 rounded-md hover:bg-yellow-700 sm:m-0 sm:px-20 md:px-10 italic">
              Schedule Now
            </Link>
            </div>
            <div className="text-sm text-gray-600 italick">
              * Free cancellation up to 24 hours in advance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doka;
