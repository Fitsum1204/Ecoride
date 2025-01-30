import React, { useState } from 'react';
import h1 from '../../assets/detailsPicture/waterfall2.jpg';
import h2 from '../../assets/detailsPicture/waterfall3.webp';
import h3 from '../../assets/detailsPicture/waterfall1.avif';
import { FaChevronDown, FaChevronUp,FaUsers, FaClock, FaSuitcase,FaUserTie } from 'react-icons/fa';  // Importing icons for the arrow
import { Link } from 'react-router-dom';

const Waterfall = () => {
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
       Tour of La Paz Waterfall Gardens
      </h1>

      {/* Top Images and Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
        {/* Left Column (Image) */}
        <div className="col-span-1 md:col-span-2">
          <div className="h-80">
            <img src={h1} alt="Tour 1" className="w-full h-full object-cover rounded-md" />
          </div>
          {/* About Section */}
          <div className="bg-gray-50 text-gray-800 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-xl  text-green-700 font-bold text-left mb-8">
          Discover the Wonders of La Paz Waterfall Gardens with an Expert Naturalist
        </h1>

        {/* Introduction */}
        <p className="text-lg  text-left mb-12  pl-3 italic">
          Experience the breathtaking beauty and rich biodiversity of Costa Rica like never before with an exclusive, 
          expert-led private tour of La Paz Waterfall Gardens. Your local naturalist guide will ensure an immersive 
          journey through one of the country’s most captivating natural landscapes.
        </p>

        {/* Section: Waterfalls */}
        <div className="mb-12">
          <h2 className="text-xl text-green-700 font-bold mb-4 ">A Journey Through Vibrant Gardens and Majestic Waterfalls</h2>
          <p className="text-lg pl-3 italic">
            Explore the winding rainforest trails and witness five stunning waterfalls cascading down volcanic rock formations. 
            From the dramatic plunge of Magia Blanca to the serene beauty of Templo, each waterfall offers a unique spectacle. 
            Your guide will highlight the diverse plant life, including towering ferns, vibrant orchids, and exotic bromeliads, 
            all essential to the delicate rainforest ecosystem.
          </p>
        </div>

        {/* Section: Hummingbird & Butterfly Gardens */}
        <div className="mb-12">
          <h2 className="text-xl text-green-700 font-bold mb-4">The Hummingbird and Butterfly Gardens – A Kaleidoscope of Color</h2>
          <p className="text-lg pl-3 italic">
            Step into the enchanting hummingbird garden, where dozens of iridescent species flutter in a mesmerizing dance. 
            Watch as species like the violet sabrewing, green-crowned brilliant, and fiery-throated hummingbird feed on nectar.
          </p>
          <p className="text-lg mt-4 pl-3 italic">
            Next, enter the butterfly observatory, home to the dazzling blue morpho and many other species. Learn about 
            their metamorphosis and the crucial role they play in pollination.
          </p>
        </div>

        {/* Section: Wildlife Sanctuary */}
        <div className="mb-12">
          <h2 className="text-xl text-green-700 font-bold mb-4">Encounter Costa Rica’s Native Wildlife in the Animal Sanctuary</h2>
          <p className="text-lg pl-3 italic">
            Visit the rescue and rehabilitation center at La Paz Waterfall Gardens, where you’ll observe native Costa Rican wildlife, 
            including jaguars, pumas, ocelots, and playful spider monkeys. Bird lovers will enjoy sightings of scarlet macaws, 
            keel-billed toucans, and even the elusive resplendent quetzal.
          </p>
        </div>

        {/* Section: Personalized Experience */}
        <div className="mb-12">
          <h2 className="text-xl text-green-700 font-bold mb-4 ">A Personalized, Relaxed, and Enriching Experience</h2>
          <p className="text-lg pl-3 italic">
            Whether you are a passionate wildlife enthusiast, a photography lover, or a family seeking an unforgettable adventure, 
            this private tour ensures a customized experience tailored to your interests. Your expert guide will share fascinating 
            insights, answer questions, and reveal hidden gems throughout your journey.
          </p>
        </div>

      </div>
            <hr className="w-full bg-black mb-6" />
            <ul className="text-gray-700 pl-6 list-inside  space-y-4 bg-blue-200 p-4 shadow-md rounded-md italic">
                <li className="flex items-center">
                  <FaUsers className="mr-2 text-gray-600" />
                  All ages, max of 6 per group
                </li>
                
                <li className="flex items-center">
                  <FaClock className="mr-2 text-gray-600" />
                  Duration: 4 hours 
                </li>
                <li className="flex items-center">
                  <FaSuitcase className="mr-2 text-gray-600" />
                  One trip a day: Pick up time 8:00 AM
                </li>
                <li className="flex items-center ">
                  <FaUserTie className="mr-2 text-gray-600" />
                  Live guide: English, Spanish
                </li>
            </ul>
            {/* What's Included */}
            <div>
            <hr className="w-full bg-black mt-5 mb-4" />
              <div className="flex items-center justify-between cursor-pointer" onClick={toggleIncluded}>
                <h3 className="text-xl font-semibold">What's Included</h3>
                {showIncluded ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showIncluded && (
                <ul className="list-disc list-inside text-gray-700 pt-2 pl-6 italic">
                  <li>Transportation to/from </li>
                  <li>Guide</li>
                  <li>Zoo</li>
                  <li>Amazing waterfalls</li>
                  <li>Family friendly bar and swimming</li>
                  <li>Buffet included</li>
                 

                </ul>
                
              )}
            </div>

            {/* What to Expect */}
            <div>
            <hr className="w-full bg-black mt-5 mb-4" />
              <div className="flex items-center justify-between cursor-pointer" onClick={toggleExpect}>
                <h3 className="text-xl font-semibold">What to Expect</h3>
                {showExpect ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showExpect && (
                <p className="text-gray-700 leading-relaxed pt-2 pl-5 italic">
                  
                  Explore La Paz Waterfall Gardens with a private tour guided by a local expert. Walk lush rainforest trails, visit stunning waterfalls, vibrant gardens, and an animal sanctuary. Perfect for nature lovers and families, this personalized tour offers an immersive look at Costa Rica's biodiversity for an unforgettable experience.
                </p>
              )}
            </div>

            {/* Departure and Return */}
            <div>
            <hr className="w-full bg-black mt-5 mb-4" />
              <div className="flex items-center justify-between cursor-pointer" onClick={toggleDeparture}>
                <h3 className="text-xl font-semibold">Departure and Return</h3>
                {showDeparture ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showDeparture && (
                <p className="text-gray-700 leading-relaxed pt-2 pl-5 italic">
                  The tour departs from San Jose at 8:00 AM. After a scenic drive, you’ll reach the La Paz Waterfall Gardens, where the tour begins. The return is around 1:00 PM, ensuring you have plenty of time to enjoy the park and surroundings.
                </p>
              )}
            </div>

            {/* Duration */}
            <div>
            <hr className="w-full bg-black mt-5 mb-4" />
              <div className="flex items-center justify-between cursor-pointer" onClick={toggleDuration}>
                <h3 className="text-xl font-semibold">Duration</h3>
                {showDuration ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {showDuration && (
                <p className="text-gray-700 leading-relaxed pt-2 pl-5 italic">
                  Including transport, the tour lasts for approximately 4 hours.
                </p>
              )}
            </div>

            {/* Cancellation */}
            <div>
            <hr className="w-full bg-black mt-5 mb-4" />
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
          <div className="sticky top-36 mt-4 bg-gray-100 p-4 rounded-md shadow-md space-y-4">
            <div className="flex flex-col justify-between items-start mb-6">
              <span className="text-xl font-bold">From $200</span>
              <span className="text-1xl font-extralight text-grey-300 italic">per person</span>
              <span className="text-1xl font-extralight text-grey-300 italic">Discounts for children and  larger groups</span>
              
            </div>
            
            <div className='mb-4'>
            <Link to='/schedule' className="w-full bg-yellow-600 text-white py-2 px-4 m-0 rounded-md hover:bg-yellow-700 sm:m-0 sm:px-20 md:px-10 italic">
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

export default Waterfall;
