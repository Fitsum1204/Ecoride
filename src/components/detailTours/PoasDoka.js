import React, { useState } from 'react';
import h1 from '../../assets/detailsPicture/poas1.jpg';
import h2 from '../../assets/detailsPicture/doka3.avif';
import h3 from '../../assets/detailsPicture/coffee1.jpg';
import { FaChevronDown, FaChevronUp,FaUsers, FaClock, FaSuitcase,FaUserTie } from 'react-icons/fa';  // Importing icons for the arrow
import { Link } from 'react-router-dom';

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
    
    <div className="w-full pt-4 px-6 md:px-16 lg:px-32 xl:px-64">
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
            <h2 className="text-2xl text-green-700 font-bold">About the Tour</h2>
            <p className="text-gray-700 leading-relaxed pl-3 italic">
              Embark on an unforgettable adventure in Costa Rica that combines the awe-inspiring beauty of Poás Volcano with the rich traditions of the country’s renowned coffee culture. Begin your journey with a visit to the iconic Poás Volcano, where you’ll marvel at the dramatic landscapes of its massive crater, surrounded by lush cloud forests and panoramic views that are truly breathtaking. Then, immerse yourself in the fascinating world of coffee production at the Doka Coffee Plantation, a historic estate that offers a behind-the-scenes look at every step of the coffee-making process, from bean to brew. </p>
            <p className="text-gray-700 leading-relaxed pl-3 italic">On this
              Premium tour, led by an expert local guide, this tour weaves together the natural wonders of Costa Rica with its cultural heritage, providing insights into the geological marvels of the volcano and the artistry behind one of the world's favorite beverages. Perfect for nature enthusiasts, coffee lovers, and those seeking a deeper connection to Costa Rican culture, this experience promises stunning scenery, educational encounters, and memories that will last a lifetime.</p>
            <hr className="w-full bg-black mb-4" />
            <ul className="text-gray-700 pl-6 list-inside  space-y-4 bg-blue-200 p-4 rounded-md shadow-md italic">
        
                <li className="flex items-center">
                  <FaUsers className="mr-2 text-gray-600" />
                    All ages, max of 6 per group
                </li>
                
                <li className="flex items-center">
                  <FaClock className="mr-2 text-gray-600" />
                  Duration: 6 hours 
                </li>
                <li className="flex items-center">
                  <FaSuitcase className="mr-2 text-gray-600" />
                  One trip a day: Pick up time 8:30 am
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
                <ul className="list-disc list-inside text-gray-700 pt-2 pl-6 italic">
                  <li>Transportation to/from </li>
                  <li>Guide</li>
                  <li>Stops at local shops</li>
                  <li> Lunch included at local restaurant</li>
                  <b className='text-red-500'>What's not Included</b>
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
                <div className='pt-2 pl-6 italic'>
                  <li> Weather may impact visibility at the volcano.  In some cases, the tour may be canceled and refunded. </li>
                  <li> Doka tour will proceed rain or shine </li>
                  <li className="text-gray-700 leading-relaxed">
                    Experience the stunning Poás Volcano and delve into Costa Rica's coffee heritage with our combined tour. Enjoy breathtaking views of the volcano's dramatic crater and explore lush coffee fields at Doka Coffee Plantation. Guided by a local expert, this adventure offers an immersive look into Costa Rica's natural wonders and coffee legacy. Perfect for nature lovers and cultural enthusiasts, this journey promises unforgettable memories.
                  </li>
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
                <ul className="list-disc list-inside text-gray-700 pt-4 pl-6 italic">
                <li className="text-gray-700 leading-relaxed">
                  The tour departs from San Jose at 8:30 AM.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  After a scenic drive, you’ll reach the Poás Volcano National Park, where the tour begins. 
                </li>
                <li className="text-gray-700 leading-relaxed">
                  Departing Poas around 11:30 AM, ensuring you have plenty of time to enjoy the park and surroundings.
                </li>
                <li className="text-gray-700 leading-relaxed">
                  Lunch at a local resturant serving Costa Rican classics
                </li>
                <li className="text-gray-700 leading-relaxed">
                  Tour continues at the lovely Doka Coffee plantation.
                </li>
                <li className="text-gray-700 leading-relaxed ">
                  Return to hotel at around 2:30 PM
                </li>
                </ul>
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
              <span className="text-xl font-bold">From $200</span>
              <span className="text-1xl font-extralight text-grey-300 italic">per person</span>
              <span className="text-1xl font-extralight text-grey-300 italic">Discounts for children and  larger groups</span>
              
            </div>
            
            <div className='mb-4'>
            <Link to='/schedule' className="w-full bg-yellow-600 text-white py-2 px-4 m-0 rounded-md hover:bg-yellow-700 sm:m-0 sm:px-20 md:px-8 italic">
              Schedule Now
            </Link>
            </div>
            <div className="text-sm text-gray-600 italic">
              * Free cancellation up to 24 hours in advance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoasDoka;
