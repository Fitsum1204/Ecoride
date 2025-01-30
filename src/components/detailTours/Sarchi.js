import React, { useState } from 'react';
import h1 from '../../assets/detailsPicture/church2.jpg';
import h2 from '../../assets/detailsPicture/sarchi1.jpg';
import h3 from '../../assets/detailsPicture/sarchi2.jpg';
import { FaChevronDown, FaChevronUp,FaUsers, FaClock, FaSuitcase,FaUserTie } from 'react-icons/fa';  // Importing icons for the arrow
import { Link } from 'react-router-dom';

const Sarchi = () => {
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
       Private Sarchí and Grecia Tour
      </h1>

      {/* Top Images and Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
        {/* Left Column (Image) */}
        <div className="col-span-1 md:col-span-2">
          <div className="h-80">
            <img src={h1} alt="Tour 1" className="w-full h-full object-cover rounded-md" />
          </div>
          {/* About Section */}
          <div className="bg-gray-50 text-gray-800 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Discover Costa Rica’s Artisan Heritage: Sarchí & Grecia Private Tour
        </h1>

        {/* Introduction */}
        <p className="text-lg md:text-xl text-center mb-12">
          Immerse yourself in Costa Rica’s rich artisan culture on a private guided tour of the charming towns of 
          <strong> Sarchí and Grecia</strong>. From vibrant painted ox carts to a stunning architectural landmark, this 
          experience is perfect for cultural explorers and shopping enthusiasts alike.
        </p>

        {/* Section: Sarchí – The Artisan Capital */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Sarchí – The Heart of Costa Rican Artistry</h2>
          <p className="text-lg">
            Begin your journey in <strong>Sarchí</strong>, Costa Rica’s most famous artisan town. Stroll through streets lined with 
            family-owned workshops where master craftsmen create stunning <strong>hand-painted ox carts</strong>, a cherished 
            symbol of Costa Rican heritage. Watch as skilled artists meticulously apply intricate patterns in vibrant colors, 
            continuing a tradition that dates back over a century.
          </p>
          <p className="text-lg mt-4">
            Your expert guide will share the fascinating history behind these ox carts, once essential for transporting coffee 
            and now a UNESCO-recognized art form. Don’t miss the chance to see the **world’s largest painted ox cart**, a 
            magnificent testament to this proud tradition.
          </p>
        </div>

        {/* Section: Grecia – The Unique Metal Church */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Grecia – The Town of the Iconic Metal Church</h2>
          <p className="text-lg">
            Continue to the picturesque town of <strong>Grecia</strong>, home to one of Costa Rica’s most unique architectural 
            landmarks – <strong>Iglesia de la Nuestra Señora de las Mercedes</strong>. This striking, deep-red, all-metal church 
            is made entirely of prefabricated steel panels, shipped from Belgium in the 1890s.  
          </p>
          <p className="text-lg mt-4">
            Your guide will unveil the intriguing story of how this grand structure was assembled and how it remains one of 
            the most well-preserved and admired churches in Latin America. The surrounding town plaza, filled with towering 
            palm trees and local vendors, makes for a delightful stop to soak in the town’s laid-back charm.
          </p>
        </div>

        {/* Section: Shopping for Handcrafted Souvenirs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Shop for Authentic Costa Rican Handicrafts</h2>
          <p className="text-lg">
            No visit to Sarchí is complete without browsing its vibrant artisan markets, where you’ll find an array of 
            handcrafted treasures. Choose from exquisitely painted trays, wooden carvings, leather goods, and authentic 
            <strong> handwoven textiles</strong>, all created by local artisans.  
          </p>
          <p className="text-lg mt-4">
            Whether you’re looking for a meaningful souvenir or a unique piece of Costa Rican culture to take home, 
            your guide will help you navigate the best shops and find items that reflect the true spirit of Costa Rican craftsmanship.
          </p>
        </div>

        {/* Section: Personalized Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">A Personalized and Enriching Cultural Experience</h2>
          <p className="text-lg">
            This private tour ensures a <strong>tailored experience</strong>, allowing you to explore at your own pace with 
            exclusive insights from your local expert. Whether you’re a history buff, an art lover, or simply eager to discover 
            Costa Rica’s cultural heart, this journey will leave you with unforgettable memories and a deeper appreciation 
            for the country’s artistic legacy.
          </p>
        </div>
      </div>
    </div>
          <div className="mt-4 space-y-4">
            <hr className="w-full bg-black mb-4" />
            <ul className="text-gray-700 pl-6 list-inside  space-y-4">
        
        <li className="flex items-center">
          <FaUsers className="mr-2 text-gray-600" />
          All ages, max of 6 per group
        </li>
        
        <li className="flex items-center">
          <FaClock className="mr-2 text-gray-600" />
          Duration: 6-7 hours 
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
                <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>
                  <strong>Round-Trip Transportation:</strong> Enjoy comfortable, air-conditioned transportation to and from your hotel or designated pickup location, ensuring a stress-free and relaxing experience.
                </li>
                <li>
                  <strong>Expert Local Guide:</strong> Gain fascinating insights into Costa Rica’s rich artisan heritage with a knowledgeable guide who will share stories, history, and behind-the-scenes details of Sarchí and Grecia.
                </li>
                <li>
                  <strong>Souvenir Shopping Experience:</strong> Browse vibrant artisan markets in Sarchí, where you can find beautifully handcrafted ox carts, wood carvings, ceramics, leather goods, and traditional textiles made by skilled local artisans.
                </li>
                <li>
                  <strong>Authentic Costa Rican Lunch:</strong> Savor a delicious, locally-prepared lunch at a traditional Costa Rican restaurant, featuring fresh ingredients and regional flavors.
                </li>
                <li>
                  <strong>Meet Master Craftsmen:</strong> Get an exclusive opportunity to meet and interact with local artisans in their workshops. Watch them meticulously hand-paint intricate designs on ox carts and other crafts while learning about their time-honored techniques.
                </li>
                <li>
                  <strong>Visit to Grecia’s Iconic Metal Church:</strong> Explore the stunning Iglesia de la Nuestra Señora de las Mercedes, a one-of-a-kind architectural marvel made entirely of prefabricated metal panels shipped from Belgium in the 19th century.
                </li>
                <li>
                  <strong>Scenic Photo Opportunities:</strong> Capture breathtaking views of Costa Rica’s lush landscapes, charming town squares, and the beautifully painted ox carts of Sarchí.
                </li>
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
                  Discover Costa Rica's artisan heritage with a private tour of Sarchí and Grecia. Marvel at painted ox carts, explore Grecia's unique metal church, and shop for handcrafted souvenirs. Guided by a local expert, this tour offers a fascinating glimpse into Costa Rica's traditions and artistry. Perfect for cultural and shopping enthusiasts.
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
                  The tour departs from San Jose at 8:30 AM.
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

export default Sarchi;
