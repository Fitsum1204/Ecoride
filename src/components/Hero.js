import React, { Fragment } from 'react';
import Ecoride from '../assets/EcoRide.png';
import F1 from '../assets/family.jpeg'
import F2 from '../assets/pexels-simon-robben-55958-614810.jpg'
import F3 from '../assets/face3.png'
import { useNavigate, Link } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handelClick = () => {navigate('/services')}
 


  return (
    <Fragment>
      {/* Hero Section */}
      <section id="home" className="relative w-full h-[530px]">
        {/* Background with Gradient and Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/public/coverpage.jpeg')]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-start justify-center text-left h-full text-white p-6 sm:p-10 md:p-20 lg:p-32 xl:p-64">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-normal mb-4">
            Explore the World, Sustainably
          </h1>
          <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg font-normal leading-tight tracking-normal font-sans">
            Discover eco-friendly accommodations and unforgettable eco-tourism activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="py-3 px-10 bg-green-500 text-white font-bold rounded hover:bg-green-600" onClick={handelClick}>
              View Tours
            </button>
            
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="about" className="flex flex-col lg:flex-row items-center p-4 sm:p-2 md:p-16 md:flex-row lg:px-32 xl:px-64 py-8 gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left px-4">
          <p className="text-xl font-semibold md:text-sm lg:text-xl text-green-600 mb-4">Explore sustainably</p>
          <h2 className="text-3xl md:text-xl lg:text-3xl font-bold mb-4">
          Welcome to <span className='text-green-600'>EcoRide</span>
          </h2>
          <p className="text-base md:text-sm lg:text-base text-gray-600 mb-6">
           Your Gateway to Sustainable Adventures in Costa Rica
          Discover the vibrant beauty of Costa Rica with EcoRide, your trusted partner in eco-friendly travel and transportation. Based in the stunning Alajuela region, we offer curated local tours that immerse you in the heart of our lush landscapes and rich culture. For those seeking to explore the entire country, our personalized concierge tours provide seamless, tailored itineraries to help you uncover Costa Rica's hidden gems. Additionally, we specialize in reliable, comfortable, and sustainable transport services between airports, hotels, and destinations across the country. At EcoRide, we are committed to creating unforgettable experiences while preserving the natural beauty that makes Costa Rica a paradise. Let us take you on a journey that is as enriching as it is eco-conscious.
          </p>
          <Link 
            to="/contact" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="underline hover:text-green-800">
            Get in touch
          </Link>
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
      <section id="testimonials" className="relative flex flex-col items-center p-4 sm:p-2 md:p-16 lg:px-32 xl:px-64 py-8 gap-8 bg-green-50">
  {/* Background */}


  {/* Testimonials Content */}
  <div className="relative w-full">
    <h2 className="text-3xl lg:text-4xl font-bold text-center text-green-700 mb-8">
      What Our Customers Say
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center mb-4">
          <img
            src={F1}
            alt="people"
            className="w-80 h-80 rounded-full shadow-md"
          />
        </div>
        <p className="text-gray-600 italic mb-4">
        "Our family spent a fabulous day with Michael visiting both Poás Volcano and Doka Coffee Farm. He is an outstanding tour guide, extremely knowledgeable about these locations as well as the birds, animals, and flora of Costa Rica. Michael is warm and personable. His lunch recommendation, Freddo Fresas, was exceptional. We look forward to returning to Costa Rica and exploring new places with Michael at Ecoride Costa."
        </p>
        <h3 className="text-lg font-semibold text-green-700">Eco Enthusiast Family</h3>
      
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center mb-4">
          <img
            src={F2}
            alt="David M."
            className="w-24 h-24 rounded-full shadow-md"
          />
        </div>
        <p className="text-gray-600 italic mb-4">
          "A seamless experience from start to finish. The app's navigation and
          eco-friendly options are a game-changer for responsible travel."
        </p>
        <h3 className="text-lg font-semibold text-green-700">- David M.</h3>
        <p className="text-sm text-gray-500">Adventure Seeker</p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center mb-4">
          <img
            src={F3}
            alt="Maria L."
            className="w-24 h-24 rounded-full shadow-md"
          />
        </div>
        <p className="text-gray-600 italic mb-4">
          "I highly recommend EcoRide to anyone who wants to explore the world
          while preserving nature. The app made it so easy and enjoyable!"
        </p>
        <h3 className="text-lg font-semibold text-green-700">- Maria L.</h3>
        <p className="text-sm text-gray-500">Nature Lover</p>
      </div>
    </div>
  </div>
</section>





    </Fragment>
  );
};

export default Hero;
