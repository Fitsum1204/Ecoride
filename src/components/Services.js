import React from 'react';
import Ecoride from '../assets/EcoRide.png';
import s1 from '../assets/s1.jpeg';
import s2 from '../assets/s2.jpeg';
import s3 from '../assets/s3.jpeg';
import s4 from '../assets/s4.jpeg';
import s5 from '../assets/s5.jpeg';
import s6 from '../assets/s6.jpeg';
import s7 from '../assets/s7.jpeg';
const  Services = () => {
  const destinations = [
    {
      name: "Poás	Volcano	Lodge	-	SJO	Airport",
      price: "$75",
      image: s1,
      description: "Enjoy a serene stay at the base of the majestic Poás Volcano.",
    },
    {
      name: "Poás	Volcano	Lodge	-	Arenal/La	Fortuna",
      price: "$170",
      image: s2,
      description: "Explore the lush cloud forest with diverse flora and fauna.",
    },
    {
      name: "Poás	Volcano	Lodge	-	Manuel	Antonio",
      price: "$270",
      image: s3,
      description: "Marvel at the iconic Arenal Volcano and its hot springs.",
    },
    {
      name: "Poás	Volcano	Lodge	-	Monteverde	Cloud Forest",
      price: "$290",
      image: s4,
      description: "Witness the nesting of sea turtles in this natural haven.",
    },
    {
      name: "Poás	Volcano	Lodge	-	Guanacaste",
      price: "$380",
      image: s5,
      description: "Relax at the picturesque beach surrounded by wildlife.",
    },
    {
      name: "Poás	Volcano	Lodge	-	La	Pavona",
      price: "$250",
      image:s6,
      description: "Experience Costa Rica's most biodiverse national park.",
    },
    {
      name: "Poás	Volcano	Lodge	-	Puerto	Viejo,Limón",
      price: "$380",
      image: s7,
      description: "Discover stunning waterfalls and vibrant wildlife exhibits.",
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-700">EcoRide Shuttle Service Rates</h1>
        <p className="text-lg mt-2 text-gray-600">Michael +506 8549 9997</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{destination.name}</h2>
              <p className="text-gray-600 mt-2">{destination.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-green-700 font-bold text-lg">{destination.price}</span>
                <button className="bg-green-700 text-white px-4 py-2 rounded shadow">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};







export default Services;
