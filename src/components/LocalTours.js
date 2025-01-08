import React from 'react'


import s1 from '../assets/s1.jpeg';
import s2 from '../assets/s2.jpeg';
import s3 from '../assets/s3.jpeg';
import s4 from '../assets/s4.jpeg';
import s5 from '../assets/s5.jpeg';
import s6 from '../assets/s6.jpeg';
import s7 from '../assets/s7.jpeg';
const LocalTours = () => {
  const destinations = [
    {
      name: "Poas Volcano",
      price: "$75",
      image: s1,
      description: "Embark on an unforgettable journey to one of Costa Rica's most iconic natural wonders with our Poás Volcano Tour. Located in the heart of Central Costa Rica, this tour offers a close-up view of the majestic Poás Volcano, renowned for its dramatic crater and steaming geothermal activity. Perfect for nature lovers and adventure seekers, this two-hour guided experience is priced at just $70 for two people, with additional hours available for $35 if you'd like to extend your exploration. Bring more friends along for just $15 per extra person. Whether you're marveling at the panoramic views or immersing yourself in the surrounding cloud forest, the Poás Volcano Tour promises a breathtaking adventure you won’t forget.",
    },
    {
      name: "Private Tour of the Doka Coffee Plantation",
      price: "$170",
      image: s2,
      description: "Delve into the rich heritage of Costa Rican coffee with a private tour of the renowned Doka Coffee Plantation. Led by a knowledgeable local expert, this intimate experience offers your small group an in-depth look at the art and tradition behind one of Costa Rica’s most treasured exports. Wander through lush coffee fields, learn about the meticulous process of cultivation and production, and discover the fascinating history that has made Costa Rican coffee famous worldwide. Perfect for coffee lovers and cultural enthusiasts alike, this personalized tour promises an engaging and flavorful journey into the heart of Costa Rica’s coffee legacy.",
    },
    {
      name: "Private Sarchí and Grecia Tour",
      price: "$270",
      image: s3,
      description: "Traditional Ox Cart Experience and Souvenirs.Immerse yourself in Costa Rica’s vibrant artisan heritage with a private tour of Sarchí and Grecia, two charming towns celebrated for their traditional craftsmanship. In Sarchí, the cradle of Costa Rica’s iconic painted ox carts, you’ll marvel at the intricate designs and vivid colors that adorn these national symbols of cultural pride. Continue to Grecia, home to the striking metal church, a unique architectural gem surrounded by stunning landscapes. Along the way, enjoy the opportunity to shop for handcrafted souvenirs, including intricately painted ox carts, wooden carvings, and other unique keepsakes that capture the spirit of Costa Rica. Guided by a local expert, this personalized tour offers a fascinating glimpse into Costa Rica’s traditions, artistry, and rural charm, making it a perfect cultural and shopping escape for curious travelers.",
    },
    {
      name: "Private Tour of La Paz Waterfall Gardens",
      price: "$290",
      image: s4,
      description: "Experience the natural beauty and wildlife of Costa Rica like never before with a private tour of the breathtaking La Paz Waterfall Gardens. Guided by a local expert, this exclusive experience takes you through lush rainforest trails to discover stunning waterfalls, vibrant gardens, and an abundance of wildlife. Explore the hummingbird garden, butterfly observatory, and animal sanctuary, where you’ll encounter species native to Costa Rica in a safe and enriching environment. Perfect for nature lovers and families, this personalized tour offers an up-close look at the country's biodiversity while ensuring a relaxed and immersive experience tailored to your group. Let the enchanting sights and sounds of La Paz Waterfall Gardens leave you with memories to treasure forever.",
    },
    {
      name: "Private Tour to Mirador Cinchona",
      price: "$380",
      image: s5,
      description: "A Birdwatcher’s Paradise.Discover one of Costa Rica’s premier birdwatching hotspots with a private tour to the Mirador Cinchona. Nestled in the scenic highlands, this hidden gem offers breathtaking views and unparalleled opportunities to observe a stunning variety of bird species in their natural habitat. Guided by a local expert, you’ll have the chance to spot toucans, hummingbirds, and other exotic species while learning about their behaviors and habitats. The Mirador’s serene setting, complete with a charming café overlooking the lush landscape, provides the perfect backdrop for a day of relaxation and discovery. Ideal for bird enthusiasts and nature lovers, this personalized tour guarantees an unforgettable glimpse into Costa Rica’s incredible avian diversity.",
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
                  See More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
};










export default LocalTours
