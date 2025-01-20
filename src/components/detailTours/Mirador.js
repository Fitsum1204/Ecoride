import React, { useState } from 'react';
import h1 from '../../assets/hotelsPicture/h1.webp';
import h2 from '../../assets/hotelsPicture/h2.jpg';
import h3 from '../../assets/hotelsPicture/h3.jpg';
import { FaChevronDown, FaChevronUp,FaUsers, FaClock, FaSuitcase,FaUserTie } from 'react-icons/fa';  // Importing icons for the arrow

const Mirador = () => {
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
       Tour to Mirador Cinchona
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
          
            Discover Costa Rica’s premier birdwatching hotspot at Mirador Cinchona. Enjoy breathtaking views and spot a variety of bird species, including toucans and hummingbirds, guided by a local expert. Relax at the charming café overlooking the lush landscape. Perfect for bird enthusiasts and nature lovers, this personalized tour offers an unforgettable glimpse into Costa Rica’s avian diversity. 
            </p>
            <hr className="w-full bg-black mb-4" />
            <ul className="text-gray-700 pl-6 list-inside  space-y-4">
        
        <li className="flex items-center">
          <FaUsers className="mr-2 text-gray-600" />
          Ages 0-99, max of 30 per group
        </li>
        
        <li className="flex items-center">
          <FaClock className="mr-2 text-gray-600" />
          Duration: 6-7 hours 
        </li>
        <li className="flex items-center">
          <FaSuitcase className="mr-2 text-gray-600" />
          one trip a day: Pick up time 6:00 am
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
                
                  <li>Guide</li>
                  <li>Stop by La Paz Waterfall</li>
                  <li>Breakfast included at local soda</li>
                  <li>Feeders attract wide variety of bird species </li>
                  <li>Even more wild varieties near by</li>
                  <li>Upgrade available for nature hike to stop special species.</li>
                  <b>What's not Included</b>
                  <li>lunch</li>
                  <li> Gratuities</li>
                  <li>  Alcoho</li>
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
                  Discover Costa Rica’s birdwatching paradise at Mirador Cinchona. Enjoy scenic views, spot toucans and hummingbirds, and relax at a charming café. Guided by a local expert, this tour offers an unforgettable experience for bird enthusiasts and nature lovers.
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
                  The tour departs from San Jose at 6:00 AM. After a scenic drive, you’ll reach theMirador Cinchona , where the tour begins. The return is around 11:30 PM, ensuring you have plenty of time to enjoy the park and surroundings.
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
                  The tour lasts for approximately 6-7 hours.
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
              <span className="text-xl font-semibold">From $250</span>
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

export default Mirador;
