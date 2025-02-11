import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import s6 from '../assets/toursImage/poas5.jpg';
import s7 from '../assets/toursImage/birdmidr.jpg';
import s1 from '../assets/toursImage/Poas Volcano.jpg';
import s2 from '../assets/detailsPicture/doka3.avif';
import s3 from '../assets/toursImage/Sarchí-and-Grecia.jpeg'; 
import s4 from '../assets/detailsPicture/waterfall2.jpg';
import s5 from '../assets/toursImage/bird.jpeg';

const Services = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Poas Volcano and Doka Coffee Plantation tour",
      price: "From $200",
      image: s6,
      route: "/poasdoka",
      description: "Embark on an unforgettable journey to one of Costa Rica's most iconic natural wonders...",
    },
    {
      name: "Poas Volcano and Mirador Cinchona tour",
      price: "From $200",
      image: s7,
      route: "/poasmirador",
      description: "Explore two of Costa Rica's natural gems with our combined Poás Volcano and Mirador Cinchona tour...",
    },
    {
      name: "Poas Volcano",
      price: "From $130",
      image: s1,
      route: "/poasvolcano",
      description: "Embark on an unforgettable journey to one of Costa Rica's most iconic natural wonders...",
    },
    {
      name: "Private Tour of the Doka Coffee Plantation",
      price: "From $100",
      image: s2,
      route: "/doka",
      description: "Delve into the rich heritage of Costa Rican coffee with a private tour of the renowned Doka Coffee Plantation...",
    },
    {
      name: "Private Sarchí and Grecia Tour",
      price: "From $200",
      image: s3,
      route: "/sarchi",
      description: "Immerse yourself in Costa Rica’s vibrant artisan heritage with a private tour of Sarchí and Grecia...",
    },
    {
      name: "Private Tour of La Paz Waterfall Gardens",
      price: "From $200",
      image: s4,
      route: "/waterfall",
      description: "Experience the natural beauty and wildlife of Costa Rica like never before with a private tour...",
    },
    {
      name: "Private Tour to Mirador Cinchona",
      price: "From $250",
      image: s5,
      route: "/mirador",
      description: "Discover one of Costa Rica’s premier birdwatching hotspots with a private tour to the Mirador Cinchona...",
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="bg-[#FAF7F2]">
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-8 px-4"
      >
        <h1 className="text-4xl font-bold text-green-700 sm:text-3xl">EcoRide Local Tours</h1>
        <p className="text-lg mt-2 text-gray-600 sm:text-base">Michael +506 8549 9997</p>
      </motion.header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 pb-4 items-stretch">
        {destinations.map((destination, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full cursor-pointer"
            onClick={() => {
              navigate(destination.route);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-800">{destination.name}</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base flex-grow">{destination.description}</p>
              <div className="mt-auto flex items-end justify-between">
                <span className="text-green-700 font-bold text-lg">{destination.price}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-700 text-white px-4 py-2 rounded shadow"
                >
                  Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
