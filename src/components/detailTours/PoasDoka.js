import React, { useState } from 'react';
import h1 from '../../assets/hotelsPicture/h1.webp';
import h2 from '../../assets/hotelsPicture/h2.jpg';
import h3 from '../../assets/hotelsPicture/h3.jpg';
import { FaChevronDown, FaChevronUp,FaUsers, FaClock, FaSuitcase,FaUserTie } from 'react-icons/fa';  // Importing icons for the arrow

const PoasDoka = () => {
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
      Tour of Poas Volcano and Doka Coffee Plantation
      </h1>

      {/* Top Images and Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
        {/* Left Column (Image) */}
        <div className="col-span-1 md:col-span-2">
          <div className="h-80">
            <img src={h1} alt="Tour 1" className="w-full h-full object-cover rounded-md" />
          </div>
          {/* About Section */}
          <div className="mt-4 space-y-4">
            <h2 className="text-2xl font-semibold">About the Tour</h2>
            <p className="text-gray-700 leading-relaxed">
          
            Experience Costa Rica's iconic Poás Volcano and delve into its rich coffee heritage with our combined tour. Enjoy stunning views of the dramatic crater and explore lush coffee fields at Doka Coffee Plantation. Led by a local expert, this adventure is perfect for nature lovers and cultural enthusiasts, offering an unforgettable journey into Costa Rica's natural and coffee legacy.
            </p>
            <hr className="w-full bg-black mb-4" />
            <ul className="text-gray-700 pl-6 list-inside  space-y-4">
        
        <li className="flex items-center">
          <FaUsers className="mr-2 text-gray-600" />
          Ages 0-99, max of 30 per group
        </li>
        
        <li className="flex items-center">
          <FaClock className="mr-2 text-gray-600" />
          Duration: 6 hours 
        </li>
        <li className="flex items-center">
          <FaSuitcase className="mr-2 text-gray-600" />
          one trip a day: Pick up time 8:20 am
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
                  <li>Stops at local shops</li>
                  <li> Lunch included at local restaurant</li>
                  <b>What's not Included</b>
                  <li> Gratuities</li>
                  <li>  Alcohol</li>
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
                <p className="text-gray-700 leading-relaxed">
                  Experience the stunning Poás Volcano and delve into Costa Rica's coffee heritage with our combined tour. Enjoy breathtaking views of the volcano's dramatic crater and explore lush coffee fields at Doka Coffee Plantation. Guided by a local expert, this adventure offers an immersive look into Costa Rica's natural wonders and coffee legacy. Perfect for nature lovers and cultural enthusiasts, this journey promises unforgettable memories.
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
                <p className="text-gray-700 leading-relaxed">
                  The tour departs from San Jose at 8:20 AM. After a scenic drive, you’ll reach the Poás Volcano National Park, where the tour begins. The return is around 11:30 PM, ensuring you have plenty of time to enjoy the park and surroundings.
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
                  The tour lasts for approximately 6 hours.
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

        {/* Right Column (Images and Price Section) */}
        <div className="md:col-span-1">
          {/* Right Column Images (Top and Bottom with equal height) */}
          <div className="hidden md:grid grid-rows-2 gap-4 h-80">
            <img src={h2} alt="Tour 2" className="w-full h-full object-cover rounded-md" />
            <img src={h3} alt="Tour 3" className="w-full h-full object-cover rounded-md" />
          </div>

          {/* Price Section (Aligned below About Section on smaller screens) */}
          <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-md space-y-4">
            <div className="flex flex-col justify-between items-start">
              <span className="text-xl font-semibold">From $200</span>
              <span className="text-1xl font-extralight text-grey-300">per person</span>
              <span className="text-1xl font-extralight text-grey-300">Discounts for children and  larger groups</span>
              
            </div>
            
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
              Schedule Now
            </button>
            <div className="text-sm text-gray-600">
              * Free cancellation up to 24 hours in advance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoasDoka;
