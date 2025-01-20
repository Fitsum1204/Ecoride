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
//import h20 from '../assets/hotelsPicture/h20.webp';  
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
            image: h1,
            website: "https://waterfallgardens.com/" },
        { 
            name: "El Silencio Lodge & Spa - Bajos del Toro, Costa Rica", 
            image: h2,
            website: "https://elsilenciolodge.com/" },
        { 
            name: "Xandari Resort & Spa - Alajuela, Costa Rica", 
            image: h3 ,
            website: "https://www.xandari.com/" },
        { 
            name: "Chayote Lodge - Naranjo, Costa Rica", 
            image: h4 ,
            website: "https://chayotelodge.com/" },
        { 
            name: "Poas Volcano Lodge - Poasito, Costa Rica", 
            image: h5,
            website: "https://www.poasvolcanolodge.com/"},
        { 
            name: "Hotel Bougainvillea - Santo Domingo, Costa Rica", 
            image: h6 ,
            website: "https://www.hb.co.cr/" },
        { 
            name: "Finca Rosa Blanca Coffee Plantation Resort - Santa Bárbara de Heredia, Costa Rica", 
            image: h7 ,
            website: "https://fincarosablanca.com/" },
        { 
            name: "Villa Blanca Cloud Forest Hotel - San Ramón, Costa Rica", 
            image: h8,
            website: "https://hotelvbcostarica.com/" },    
        { 
            name: "Altura Hotel - Poás, Costa Rica", 
            image: h9,
            website: "https://alturahotelcr.com/" },  
        { 
            name: "Bosque de Paz Biological Reserve Lodge - Bajos del Toro, Costa Rica", 
            image: h10,
            website: "https://www.bosquedepaz.com/" },
        { 
            name: "Peace of Paradise - Vara Blanca, Costa Rica", 
            image:  h11 ,
            website: "https://www.peaceofparadisecr.com/"},
        { 
            name: "Hotel Monte Campana - Birrí, Heredia, Costa Rica", 
            image:  h12 ,
            website: "https://www.hotelmontecampana.com/" },
        { 
            name: "Tiquicia Lodge - Poás Volcano, Costa Rica", 
            image:  h13,
            website: "https://www.booking.com/hotel/cr/volcan-poas-rooms-by-tiquicia.en-gb.html?label=gen173rf-1BCAsoM0Iddm9sY2FuLXBvYXMtcm9vbXMtYnktdGlxdWljaWFIM1gDaEeIAQGYAQm4ARfIAQzYAQHoAQGIAgGiAgtjaGF0Z3B0LmNvbagCA7gCxviCvAbAAgHSAiQyNDlmYzFkOC1jZjZhLTRiNDEtOWU3OS04ZmM5OGMzZWNmYmTYAgXgAgE&sid=4be5e7fde8ce59a9581bd8ff50a8a0a8&dist=0&keep_landing=1&sb_price_type=total&type=total&" },
        { 
            name: "Hotel Bristol Aeropuerto - Alajuela, Costa Rica", 
            image:  h14,
            website: "https://hotelbristolcr.com/" },
        { 
            name: "La Terraza Guest House - Grecia, Costa Rica", 
            image:  h15 ,
            website: "https://web.facebook.com/LaterrazaGuesthousebb/?_rdc=1&_rdr" },
        { 
            name: "The Retreat Costa Rica - Atenas, Costa Rica", 
            image:  h16 ,
            website: "https://www.theretreatcostarica.com/" },
        { 
            name: "La Casona del Cafetal - Cartago, Costa Rica", 
            image:  h17 ,
            website: "https://www.lacasonadelcafetal.com/" },
        { 
            name: "Hotel Mango Valley - Grecia, Costa Rica", 
            image:  h18,
            website: "https://hotel-mango-valley-grecia.h-rez.com/location.htm" },
        { 
            name: "Hotel Cataratas del Toro - Bajos del Toro, Costa Rica", 
            image:  h19 ,
            website: "https://villagecataratas.com/el-hotel/" },
       /*  { 
            name: "Volcan Poas Rainforest Lodge - Vara Blanca, Costa Rica", 
            image: h20 ,
            website: "https://poasvolcanolodge.com/" }, */
        { 
            name: "Hotel Martino Spa and Resort - Alajuela, Costa Rica", 
            image: h21 ,
            website: "https://www.hotelmartino.com/" },
        { 
            name: "Hotel La Rosa de America - Alajuela, Costa Rica", 
            image: h22 ,
            website: "https://web.facebook.com/costaricaairporthotel/?locale=ru_RU&_rdc=1&_rdr" },
        { 
            name: "Hotel Chalet Tirol - San Rafael, Heredia, Costa Rica", 
            image: h23 ,
            website: "https://www.eltirolcostarica.com/" },
        { 
            name: "Hotel Colinas del Sol - Atenas, Costa Rica", 
            image: h24 ,
            website: "https://www.hotelcolinasdelsol.com/" },
        { 
            name: "Hotel Eskalima - Alajuela, Costa Rica", 
            image: h25 ,
            website: "https://fr.tripadvisor.ch/Hotel_Review-g309224-d1974153-Reviews-Hotel_Eskalima-Alajuela_Province_of_Alajuela.html" },
        { 
            name: "The Orchid Tree B&B Costa Rica - Grecia, Costa Rica", 
            image: h26 ,
            website: "https://www.tripadvisor.com/Hotel_Review-g1177889-d1625215-Reviews-Orchid_Tree-Atenas_Province_of_Alajuela.html" },
        { 
            name: "Casa Amanecer Bed & Breakfast - San Ramón, Costa Rica", 
            image: h27 ,
            website: "https://www.casa-amanecer-cr.com/policies-travel-info/" },
        { 
            name: "Hotel Villas Vilma - La Fortuna, Costa Rica", 
            image: h28 ,
            website: "https://villas-vilma-la-fortuna.vivehotels.com/es" },
        { 
            name: "Hotel Tacacori Ecolodge - Alajuela, Costa Rica", 
            image: h29 ,
            website: "https://www.tacacori.com/" },
        { 
            name: "Hotel Buena Vista - Alajuela, Costa Rica", 
            image: h30 ,
            website: "https://www.hotelbuenavistacr.com/activities?_gl=1*eii68p*_up*MQ..*_ga*Mzk4MzQ4NDgyLjE3MzY1MjgzNTI.*_ga_VBNK8X4YWJ*MTczNjUyODM1MS4xLjAuMTczNjUyODM1NS4wLjAuMA..*_ga_3R5SJEDWK4*MTczNjUyODM1MS4xLjAuMTczNjUyODM1NS4wLjAuMA" },
      ];
      

      return (
        <div>
          <section className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10 mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              List of Major Hotels We Serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded shadow hover:bg-green-50 transition-colors"
                >
                  <a
                    href={hotel.website} // Add the link here
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    {/* Image */}
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    {/* Text */}
                    <p className="text-lg text-gray-700 text-center">{hotel.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    };
    
    export default Hotels;