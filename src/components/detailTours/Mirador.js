import React, { useState } from 'react';
import h1 from '../../assets/detailsPicture/birdmidr.jpg';
import h2 from '../../assets/detailsPicture/bird2.jpg';
import h3 from '../../assets/detailsPicture/bird3.jpg';
import { FaChevronDown, FaChevronUp,FaUsers, FaClock, FaSuitcase,FaUserTie } from 'react-icons/fa';  // Importing icons for the arrow
import { Link } from 'react-router-dom';

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
    
    <div className="w-full pt-4 px-6 md:px-16 lg:px-32 xl:px-64">
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
          <div className="bg-gray-50 text-gray-800 p-6 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-2xl text-green-700  font-bold text-left mb-6">
          Mirador Cinchona Private Birdwatching Tour
        </h1>

        {/* Introduction */}
        <p className="text-lg  text-left mb-6 pl-3 italic ">
          Discover one of Costa Rica’s hidden birdwatching gems with a private tour to 
          <strong> Mirador Cinchona</strong> and <strong> Colonia Del Socorro Sarapiqui</strong>, a serene haven in the highlands where nature flourishes. 
          Led by an expert naturalist, this exclusive experience offers breathtaking views, 
          an incredible variety of bird species, and a tranquil setting for an unforgettable adventure.
        </p>

        {/* Section: Scenic Highlands & Birdwatching */}
        <div className="mb-12">
          <h2 className="text-2xl text-green-700 font-bold mb-4">A Birdwatcher’s Paradise in the Scenic Highlands</h2>
          <p className="text-lg pl-3 italic">
            Perched amidst Costa Rica’s lush highlands, <strong>Mirador Cinchona</strong> is renowned for its extraordinary bird diversity. 
            With an abundance of feeders and natural foliage, the area attracts a dazzling array of exotic species, making it 
            an ideal location for birding enthusiasts and photographers alike. 
          </p>
          <p className="text-lg mt-4 pl-3 italic">
            Your <strong>expert local guide</strong> will help you spot and identify some of the region’s most sought-after birds, 
            including <strong>keel-billed toucans, emerald toucanets, fiery-throated hummingbirds, and violet sabrewings</strong>. 
            Vibrant tanagers, motmots, and raptors are also frequent visitors, creating a dynamic and exciting birdwatching experience.
          </p>
        </div>

        {/* Section: The Café & Relaxation */}
        <div className="mb-12">
          <h2 className="text-2xl text-green-700 font-bold mb-4 ">Relax and Unwind at a Scenic Café</h2>
          <p className="text-lg pl-3 italic">
            Take a break and soak in the peaceful atmosphere at a <b>charming café overlooking the lush valley</b>. 
            Here, you can enjoy a fresh cup of Costa Rican coffee while watching <b>hummingbirds dart effortlessly 
            between feeders</b>, sometimes coming within inches of your seat.
          </p>
          <p className="text-lg mt-4 pl-3 italic">
            The sound of a nearby waterfall, the mist rolling through the highlands, and the chorus of birdsong 
            create a tranquil retreat, allowing you to fully immerse yourself in the natural beauty of Costa Rica.
          </p>
        </div>

        {/* Section: Personalized Experience */}
        <div className="mb-12">
          <h2 className="text-2xl text-green-700 font-bold mb-4">A Tailored Birdwatching & Nature Experience</h2>
          <p className="text-lg pl-3 italic">
            Whether you're a passionate birder, a nature photographer, or simply looking to connect with 
            Costa Rica’s remarkable biodiversity, this **private tour is customized to your pace and interests**. 
            Your guide will share expert insights, ensuring a deeper understanding of the region’s ecosystems 
            and wildlife behaviors.
          </p>
          <p className="text-lg mt-0 pl-3 italic">
            With breathtaking landscapes, close encounters with exotic birds, and a peaceful setting, 
            <strong> Mirador Cinchona</strong> offers an unforgettable escape into nature that will leave you 
            with lifelong memories.
          </p>
        </div>

      </div>
    </div>
          <div className="mt-4 space-y-4">
            <hr className="w-full bg-black mb-4" />
            <ul className="text-gray-700 pl-6 list-inside  space-y-4 bg-blue-200 p-4 rounded-md shadow-md italic">
        
                <li className="flex items-center">
                  <FaUsers className="mr-2 text-gray-600" />
                  All Ages , max of 6 per group
                </li>
                
                <li className="flex items-center">
                  <FaClock className="mr-2 text-gray-600" />
                  Duration: 6-7 hours 
                </li>
                <li className="flex items-center">
                  <FaSuitcase className="mr-2 text-gray-600" />
                  One trip a day: Pick up time 6:00AM
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
                
                  <li>Guide</li>
                  <li>Stop by La Paz Waterfall</li>
                  <li>Breakfast included at local soda</li>
                  <li>Feeders attract wide variety of bird species </li>
                  <li>Even more wild varieties near by</li>
                  <li>Upgrade available for nature hike to spot special species.</li>
                  <b className='text-red-400'>What's not Included</b>
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
                <p className="text-gray-700 leading-relaxed pt-2 pl-5 italic">
                  Discover Costa Rica’s birdwatching paradise at Mirador Cinchona and Colonia Del Socorro Sarapiqui. Enjoy scenic views, spot toucans and hummingbirds, and relax at a charming café. Guided by a local expert, this tour offers an unforgettable experience for bird enthusiasts and nature lovers.
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
              
                 <p className="text-gray-700 leading-relaxed pt-2 pl-5 italic">
                 The tour departs from your hotel at 6:00 AM. After a scenic drive, you’ll reach the Mirador Cinchona, where the tour begins. The return is around 1:30 PM, ensuring you have plenty of time to enjoy.
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
                <p className="text-gray-700 leading-relaxed pt-2 pl-5 italic">
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
          <div className="sticky top-36 mt-4 bg-slate-50 p-4 rounded-md shadow-md space-y-4 italic">
            <div className="flex flex-col justify-between items-start mb-6">
              <span className="text-xl font-bold not-italic">From $250</span>
              <span className="text-1xl font-extralight text-grey-300">per person</span>
              <span className="text-1xl font-extralight text-grey-300">Discounts for children and  larger groups</span>
              
            </div>
            
            <div className='mb-4'>
            <Link to='/contact' className="w-full bg-yellow-600 text-white py-2 px-4 m-0 rounded-md hover:bg-yellow-700 sm:m-0 sm:px-20 md:px-8"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
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

export default Mirador;
