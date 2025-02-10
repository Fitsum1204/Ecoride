import React, { useState } from 'react';
import h1 from '../../assets/detailsPicture/poas2.jpg';
import h2 from '../../assets/detailsPicture/bird2.jpg';
import h3 from '../../assets/detailsPicture/birdmidr.jpg';
import { FaChevronDown, FaChevronUp,FaUsers, FaClock, FaSuitcase,FaUserTie } from 'react-icons/fa';  // Importing icons for the arrow
import { Link } from 'react-router-dom';

const PoasMirador = () => {
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
       Poas Volcano and Mirador Cinchona tour
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
          
            Discover two of Costa Rica’s most captivating natural wonders with this expertly guided tour, perfect for nature lovers and adventure seekers alike.
            </p>
            <h2 className="text-2xl text-green-700 font-bold  mb-4">Poás Volcano</h2>
            <p className="text-gray-700 leading-relaxed pl-3 italic">
          
            Begin your adventure at the iconic Poás Volcano, known for its massive active crater, one of the largest in the world. Marvel at the geothermal activity, including steaming fumaroles and a vibrant crater lake that shifts from aquamarine to emerald depending on its mineral content.
            </p>
            <p className="text-gray-700 leading-relaxed pl-3 italic ">
            At an elevation of over 8,800 feet, Poás offers not only cooler temperatures but also sweeping views of the Central Valley and surrounding cloud forest. Your expert guide will provide fascinating insights into the volcano’s geological significance and its role in shaping the local environment.
            </p>
            <h2 className="text-2xl text-green-700 font-bold mb-4">Mirador Cinchona</h2>
            <p className="text-gray-700 leading-relaxed pl-3 italic">
          
            Next, visit the breathtaking Mirador Cinchona, a serene spot known for its lush surroundings and vibrant birdlife. Overlooking cascading waterfalls and rolling hills, this destination is a hidden gem for bird enthusiasts and photographers alike.
            </p>
            <p className="text-gray-700 leading-relaxed pl-3 italic">
            Keep an eye out for exotic bird species such as the keel-billed toucan, emerald toucanet, violet sabrewing, and fiery-throated hummingbird. You might also spot colorful tanagers, motmots, and even hawks. The area’s tranquil beauty and abundant wildlife make it a must-see for nature lovers.
            </p>
            
            <hr className="w-full bg-black mb-4" />
            <ul className="text-gray-700 pl-6 list-inside  space-y-4 italic bg-blue-200 p-4 rounded-md shadow-md ">
        
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
                <ul className="list-disc  list-inside text-gray-700 pt-2 pl-6 italic">
                  <li>
                  <strong className='text-amber-400'>Diverse Natural Wonders:</strong> Experience the contrast between the volcanic landscapes of Poás and the lush birdwatching haven of Mirador Cinchona.
                </li>
                <li>
                  <strong className='text-amber-400'>Expert Guidance:</strong> Learn from a knowledgeable local guide who shares captivating insights into the geology, flora, and fauna of the region.
                </li>
                <li>
                  <strong className='text-amber-400'>Photography Opportunities:</strong> Capture stunning views of the crater, geothermal features, waterfalls, and colorful bird species in their natural habitats.
                </li>
                <li>
                  <strong className='text-amber-400'>Adventure for All:</strong> Perfect for travelers seeking a blend of geological intrigue and avian treasures.
                </li>
                  <b className='text-red-400'>What's not Included</b>
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
                  <li> Mirador tour will proceed rain or shine </li>
      
                <li className="text-gray-700 leading-relaxed">
                Explore two of Costa Rica's natural wonders with our combined Poás Volcano and Mirador Cinchona tour. Witness the dramatic crater and geothermal activity of Poás Volcano, then head to Mirador Cinchona for premier birdwatching. Guided by a local expert, spot exotic birds like toucans and hummingbirds amidst stunning landscapes. Perfect for nature lovers and adventure seekers, this tour offers unforgettable views and an immersive experience in Costa Rica's volcanic and avian beauty.
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

                <div className='pt-2 pl-6 italic'>
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
                  Tour continues at Mirador, a birders paradise
                </li>
                <li className="text-gray-700 leading-relaxed">
                  Return to hotel at around 2:30 PM
                </li>
                </div>

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
                <p className="text-gray-700 leading-relaxed pt-2 pl-5 italic">
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
                <p className="text-gray-700 leading-relaxed pt-2 pl-5 italic">
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
            <Link to='/contact' className="w-full bg-yellow-600 text-white py-2 px-4 m-0 rounded-md hover:bg-yellow-700 sm:m-0 sm:px-20 md:px-8"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
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

export default PoasMirador;
