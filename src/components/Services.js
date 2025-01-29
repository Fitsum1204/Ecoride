import React from 'react';
import { useNavigate } from 'react-router-dom';
import s6 from '../assets/toursImage/poas5.jpg';
import s7 from '../assets/toursImage/birdmidr.jpg';
import s1 from '../assets/toursImage/Poas Volcano.jpg';
import s2 from '../assets/toursImage/Doka-Coffee-Plantation.jpg';
import s3 from '../assets/toursImage/Sarchí-and-Grecia.jpeg'; 
import s4 from '../assets/toursImage/La-Paz-Waterfall.jpg';
import s5 from '../assets/toursImage/bird.jpeg';

const Services = () => {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Poas Volcano and Doka Coffee Plantation tour",
      price: "From $200",
      image: s6,
      route: "/poasdoka",
      description: "Embark on an unforgettable journey to one of Costa Rica's most iconic natural wonders with our Poás Volcano Tour and delve into the rich heritage of Costa Rican coffee with a private tour of the renowned Doka Coffee Plantation. In the heart of Central Costa Rica, the Poás Volcano Tour offers a close-up view of the majestic volcano, renowned for its dramatic crater and steaming geothermal activity. Perfect for nature lovers and adventure seekers, this two-hour guided experience can be extended for a small fee per additional hour.Meanwhile, at Doka Coffee Plantation, wander through lush coffee fields, learn about the meticulous cultivation process, and discover the fascinating history behind one of Costa Rica’s most treasured exports. Led by a knowledgeable local expert, this intimate tour is ideal for coffee lovers and cultural enthusiasts, offering an engaging journey into Costa Rica’s coffee legacy. Together, these tours promise a breathtaking adventure and a flavorful exploration that you won’t forget.",
    },
    {
      name: "Poas Volcano and Mirador Cinchona tour",
      price: "From $200",
      image: s7,
      route: "/poasmirador",
      description: "Explore two of Costa Rica's natural gems with our combined Poás Volcano and Mirador Cinchona tour. Start your adventure at the iconic Poás Volcano, renowned for its dramatic crater and geothermal activity. Enjoy breathtaking views and immerse yourself in the surrounding cloud forest. Next, head to Mirador Cinchona, a premier birdwatching hotspot nestled in the scenic highlands. Guided by a local expert, spot a variety of exotic bird species, including toucans and hummingbirds, while enjoying serene landscapes. Perfect for nature lovers and adventure seekers, this tour offers an unforgettable glimpse into Costa Rica's volcanic and avian wonders.",
    },
    {
      name: "Poas Volcano",
      price: "From $130",
      image: s1,
      route: "/poasvolcano",
      description: "Embark on an unforgettable journey to one of Costa Rica's most iconic natural wonders with our Poás Volcano Tour. Located in the heart of Central Costa Rica, this tour offers a close-up view of the majestic Poás Volcano, renowned for its dramatic crater and steaming geothermal activity. Perfect for nature lovers and adventure seekers, this two-hour guided experience is available for two people, with additional hours if you'd like to extend your exploration, no national park ticket included. Bring more friends along for a small fee per extra person. Whether you're marveling at the panoramic views or immersing yourself in the surrounding cloud forest, the Poás Volcano Tour promises a breathtaking adventure you won’t forget.",
    },
    {
      name: "Private Tour of the Doka Coffee Plantation",
      price: "From $100",
      image: s2,
      route: "/doka",
      description: "Delve into the rich heritage of Costa Rican coffee with a private tour of the renowned Doka Coffee Plantation. Led by a knowledgeable local expert, this intimate experience offers your small group an in-depth look at the art and tradition behind one of Costa Rica’s most treasured exports. Wander through lush coffee fields, learn about the meticulous process of cultivation and production, and discover the fascinating history that has made Costa Rican coffee famous worldwide. Perfect for coffee lovers and cultural enthusiasts alike, this personalized tour promises an engaging and flavorful journey into the heart of Costa Rica’s coffee legacy.",
    },
    {
      name: "Private Sarchí and Grecia Tour",
      price: "From $200",
      image: s3,
      route: "/sarchi",
      description: "Traditional Ox Cart Experience and Souvenirs.Immerse yourself in Costa Rica’s vibrant artisan heritage with a private tour of Sarchí and Grecia, two charming towns celebrated for their traditional craftsmanship. In Sarchí, the cradle of Costa Rica’s iconic painted ox carts, you’ll marvel at the intricate designs and vivid colors that adorn these national symbols of cultural pride. Continue to Grecia, home to the striking metal church, a unique architectural gem surrounded by stunning landscapes. Along the way, enjoy the opportunity to shop for handcrafted souvenirs, including intricately painted ox carts, wooden carvings, and other unique keepsakes that capture the spirit of Costa Rica. Guided by a local expert, this personalized tour offers a fascinating glimpse into Costa Rica’s traditions, artistry, and rural charm, making it a perfect cultural and shopping escape for curious travelers.",
    },
    {
      name: "Private Tour of La Paz Waterfall Gardens",
      price: "From $200",
      image: s4,
      route: "/waterfall",
      description: "Experience the natural beauty and wildlife of Costa Rica like never before with a private tour of the breathtaking La Paz Waterfall Gardens. Guided by a local expert, this exclusive experience takes you through lush rainforest trails to discover stunning waterfalls, vibrant gardens, and an abundance of wildlife. Explore the hummingbird garden, butterfly observatory, and animal sanctuary, where you’ll encounter species native to Costa Rica in a safe and enriching environment. Perfect for nature lovers and families, this personalized tour offers an up-close look at the country's biodiversity while ensuring a relaxed and immersive experience tailored to your group. Let the enchanting sights and sounds of La Paz Waterfall Gardens leave you with memories to treasure forever.",
    },
    {
      name: "Private Tour to Mirador Cinchona",
      price: "From $250",
      image: s5,
      route: "/mirador",
      description: "Discover one of Costa Rica’s premier birdwatching hotspots with a private tour to the Mirador Cinchona. Nestled in the scenic highlands, this hidden gem offers breathtaking views and unparalleled opportunities to observe a stunning variety of bird species in their natural habitat. Guided by a local expert, you’ll have the chance to spot toucans, hummingbirds, and other exotic species while learning about their behaviors and habitats. The Mirador’s serene setting, complete with a charming café overlooking the lush landscape, provides the perfect backdrop for a day of relaxation and discovery. Ideal for bird enthusiasts and nature lovers, this personalized tour guarantees an unforgettable glimpse into Costa Rica’s incredible avian diversity.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <header className="text-center mb-8 px-4">
        <h1 className="text-4xl font-bold text-green-700 sm:text-3xl">EcoRide Local Tours</h1>
        <p className="text-lg mt-2 text-gray-600 sm:text-base">Michael +506 8549 9997</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 pb-4">
        {destinations.map((destination, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{destination.name}</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">{destination.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-green-700 font-bold text-lg">{destination.price}</span>
                <button
                  onClick={() => {
                    navigate(destination.route);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-green-700 text-white px-4 py-2 rounded shadow"
                >
                  Details
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
