import React from 'react'
import Ecoride from '../assets/tim.jpg';
import { useNavigate } from 'react-router-dom';
const ConciergeTour = () => {
    const navigate = useNavigate();
  const handelClick = () => {navigate('/services')}
  return (
    <div>
      {/* Info Section */}
      <section id="about" className=" flex flex-col lg:flex-row items-center p-4 sm:p-2 md:p-16 md:flex-row lg:px-32 xl:px-64 py-8 gap-8 bg-green-50
">
     
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left px-3">
          
          <h2 className="text-3xl md:text-xl lg:text-3xl font-bold mb-4 text-green-600">
                Concierge Tour
          </h2>
          <p className="text-base md:text-sm lg:text-base text-gray-950 mb-6">

            Experience Costa Rica like never before with our Countrywide Concierge Tours, designed to provide your family with a seamless and immersive adventure from start to finish. From the moment you arrive at the airport until your departure, a dedicated local naturalist will be by your side to plan, book, and guide you through the wonders of Costa Rica. Whether you’re exploring pristine beaches, lush rainforests, or volcanic landscapes, every detail of your journey will be tailored to your interests and preferences. With flexible pricing based on the number of days and tours chosen, this bespoke service ensures an unforgettable, stress-free experience where every moment is enriched by expert knowledge and personalized care.
          </p>
          <a href="#contactUs" 
   className="
     font-normal 
     text-lg sm:text-base text-white 
     bg-green-600 border-green-600 
     hover:border-green-700 hover:text-white hover:bg-green-700 
     border-2 px-24 sm:px-12 py-4 sm:py-2
     w-full sm:w-auto text-center block sm:inline-block
   ">
  GET IN TOUCH
</a>

        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Ecoride}
            alt="Eco-Friendly Travel"
            className="w-full lg:w-[400px] rounded shadow-lg"
          />
        </div>
      </section>
      <section id="about" className=" flex flex-col lg:flex-row items-center p-4 sm:p-2 md:p-16 md:flex-row lg:px-32 xl:px-64 py-8 gap-8 bg-green-50
">
     
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left px-3">
          
          <h2 className="text-3xl md:text-xl lg:text-3xl font-bold mb-4 text-green-600">
                Local Tours
          </h2>
          <p className="text-base md:text-sm lg:text-base text-gray-950 mb-6">

          Poas Volcano
          Embark on an unforgettable journey to one of Costa Rica's most iconic natural wonders with our Poás Volcano Tour. Located in the heart of Central Costa Rica, this tour offers a close-up view of the majestic Poás Volcano, renowned for its dramatic crater and steaming geothermal activity. Perfect for nature lovers and adventure seekers, this two-hour guided experience is priced at just $70 for two people, with additional hours available for $35 if you'd like to extend your exploration. Bring more friends along for just $15 per extra person. Whether you're marveling at the panoramic views or immersing yourself in the surrounding cloud forest, the Poás Volcano Tour promises a breathtaking adventure you won’t forget.
          </p>
          <a href="#contactUs" 
   className="
     font-normal 
     text-lg sm:text-base text-white 
     bg-green-600 border-green-600 
     hover:border-green-700 hover:text-white hover:bg-green-700 
     border-2 px-24 sm:px-12 py-4 sm:py-2
     w-full sm:w-auto text-center block sm:inline-block
   " onClick={handelClick}>
   MORE lOCAL TOURS TO SEE
</a>

        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Ecoride}
            alt="Eco-Friendly Travel"
            className="w-full lg:w-[400px] rounded shadow-lg"
          />
        </div>
      </section>
    </div>
  )
}

export default ConciergeTour
