import React from "react";
import h1 from '../assets/hotelsPicture/h1.webp';
import h2 from '../assets/hotelsPicture/h2.jpg';
import h3 from '../assets/hotelsPicture/h3.jpg';
import h4 from '../assets/hotelsPicture/h4.jpg';
import h5 from '../assets/hotelsPicture/h5.jpg';
import h6 from '../assets/hotelsPicture/h6.jpg';
import h7 from '../assets/hotelsPicture/h7.jpg';
import h8 from '../assets/hotelsPicture/h8.jpg';
import h9 from '../assets/hotelsPicture/h9.jpg';
import h10 from '../assets/hotelsPicture/h10.jpg';
import h11 from '../assets/hotelsPicture/h11.jpg';
import h12 from '../assets/hotelsPicture/h12.jpg';  
import h13 from '../assets/hotelsPicture/h13.jpg';  
import h14 from '../assets/hotelsPicture/h14.jpg';
import h15 from '../assets/hotelsPicture/h15.jpg';
import h16 from '../assets/hotelsPicture/h16.jpg';  
import h17 from '../assets/hotelsPicture/h17.jpg';
import h18 from '../assets/hotelsPicture/h18.jpg';
import h19 from '../assets/hotelsPicture/h19.jpg';
import h20 from '../assets/hotelsPicture/h20.webp';  
import h21 from '../assets/hotelsPicture/h21.jpg';  
import h22 from '../assets/hotelsPicture/h22.jpg';
import h23 from '../assets/hotelsPicture/h23.jpg';
import h24 from '../assets/hotelsPicture/h24.jpg';
import h25 from '../assets/hotelsPicture/h25.jpg';
import h26 from '../assets/hotelsPicture/h26.jpg';
import h27 from '../assets/hotelsPicture/h27.jpg';
import h28 from '../assets/hotelsPicture/h28.jpg';
import h29 from '../assets/hotelsPicture/h29.jpg';
import h30 from '../assets/hotelsPicture/h30.jpg';

const Hotels = () => {
    const hotels = [
        { 
            name: "Peace Lodge - Vara Blanca, Costa Rica", 
            image: h1 },
        { 
            name: "El Silencio Lodge & Spa - Bajos del Toro, Costa Rica", 
            image: h2 },
        { 
            name: "Xandari Resort & Spa - Alajuela, Costa Rica", 
            image: h3 },
        { 
            name: "Chayote Lodge - Naranjo, Costa Rica", 
            image: h4 },
        { 
            name: "Poas Volcano Lodge - Poasito, Costa Rica", 
            image: h5 },
        { 
            name: "Hotel Bougainvillea - Santo Domingo, Costa Rica", 
            image: h6 },
        { 
            name: "Finca Rosa Blanca Coffee Plantation Resort - Santa Bárbara de Heredia, Costa Rica", 
            image: h7 },
        { 
            name: "Villa Blanca Cloud Forest Hotel - San Ramón, Costa Rica", 
            image: h8 },
        { 
            name: "Altura Hotel - Poás, Costa Rica", image: h9 },
        { 
            name: "Bosque de Paz Biological Reserve Lodge - Bajos del Toro, Costa Rica", image: h10 },
        { 
            name: "Peace of Paradise - Vara Blanca, Costa Rica", 
            image:  h11 },
        { 
            name: "Hotel Monte Campana - Birrí, Heredia, Costa Rica", 
            image:  h12 },
        { 
            name: "Tiquicia Lodge - Poás Volcano, Costa Rica", 
            image:  h13 },
        { 
            name: "Hotel Bristol Aeropuerto - Alajuela, Costa Rica", 
            image:  h14 },
        { 
            name: "La Terraza Guest House - Grecia, Costa Rica", 
            image:  h15 },
        { 
            name: "The Retreat Costa Rica - Atenas, Costa Rica", 
            image:  h16 },
        { 
            name: "La Casona del Cafetal - Cartago, Costa Rica", 
            image:  h17 },
        { 
            name: "Hotel Mango Valley - Grecia, Costa Rica", 
            image:  h18 },
        { 
            name: "Hotel Cataratas del Toro - Bajos del Toro, Costa Rica", 
            image:  h19 },
        { 
            name: "Volcan Poas Rainforest Lodge - Vara Blanca, Costa Rica", 
            image: h20 },
        { 
            name: "Hotel Martino Spa and Resort - Alajuela, Costa Rica", 
            image: h21 },
        { 
            name: "Hotel La Rosa de America - Alajuela, Costa Rica", 
            image: h22 },
        { 
            name: "Hotel Chalet Tirol - San Rafael, Heredia, Costa Rica", 
            image: h23 },
        { 
            name: "Hotel Colinas del Sol - Atenas, Costa Rica", 
            image: h24 },
        { 
            name: "Hotel Eskalima - Alajuela, Costa Rica", 
            image: h25 },
        { 
            name: "The Orchid Tree B&B Costa Rica - Grecia, Costa Rica", 
            image: h26 },
        { 
            name: "Casa Amanecer Bed & Breakfast - San Ramón, Costa Rica", 
            image: h27 },
        { 
            name: "Hotel Villas Vilma - La Fortuna, Costa Rica", 
            image: h28 },
        { 
            name: "Hotel Tacacori Ecolodge - Alajuela, Costa Rica", 
            image: h29 },
        { 
            name: "Hotel Buena Vista - Alajuela, Costa Rica", 
            image: h30 },
      ];
      

  return (
    <div>
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 mt-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          List of Major Hotels We Serve
        </h2>
        <ul className="space-y-6">
          {hotels.map((hotel, index) => (
            <li
              key={index}
              className="flex items-center bg-gray-50 p-4 rounded shadow hover:bg-green-50 transition-colors"
            >
              {/* Image */}
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-64 h-64 object-cover rounded-lg mr-4"
              />
              {/* Text */}
              <p className="text-lg text-gray-700">{hotel.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Hotels;
