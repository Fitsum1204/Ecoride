import React from "react";
import { Link } from "react-router-dom";
import image6 from "../assets/guidePictures/Michael6.jpeg";
import Slideshow from "./Slideshow";

const GuiderPage = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 px-6 md:px-10 bg-[#FAF7F2] shadow-lg rounded-lg flex flex-col md:flex-row gap-12">
      {/* Left Section (Guide Info) */}
      <div className="flex flex-col items-center p-6 md:w-1/3 md:mb-96 sm:mb-0 md:rounded-full  lg:rounded-full sm:rounded-lg bg-white  shadow-md">
        {/* Circular Image */}
        <div className="w-52 h-52 mx-auto overflow-hidden rounded-full border-4 border-gray-300 shadow-lg">
          <img src={image6} alt="Michael" className="w-full h-full object-cover" />
        </div>
        
        {/* Guide Info */}
        <h2 className="text-gray-800 font-bold text-2xl mt-4">Michael</h2>
        <p className="text-gray-600 mt-2 text-center">Experienced Tour Guide & Nature Enthusiast</p>
        <p className="text-gray-500 text-sm text-center">Multilingual | English + Spanish</p>
      </div>

      {/* Right Section (Main Content) */}
      <div className="md:w-2/3 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
          Passionate about Creating Great Travel Experiences
        </h1>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://wa.me/50685499997?text=Hi%20there!%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-all"
          >
            Talk with Me
          </a>
          <Link
            to="/schedule"
            className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg shadow-md hover:bg-gray-300 transition-all"
          >
            Book Now
          </Link>
        </div>

        {/* Services Offered */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
          <ul className="list-none text-gray-700 space-y-3">
            <li className="flex items-center gap-2">✅ City Tours</li>
            <li className="flex items-center gap-2">✅ Hiking & Nature Walks</li>
            <li className="flex items-center gap-2">✅ Cultural Experiences</li>
            <li className="flex items-center gap-2">✅ Custom Private Tours</li>
          </ul>
        </div>

        {/* Image Slider */}
        <div className="mt-8">
          <Slideshow />
        </div>

        {/* Booking Information */}
         <div className="my-8 pl-4 text-center bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold mb-2">Book a Tour</h2>
          <p className="text-gray-600">For bookings and inquiries:</p>
          <p className="text-gray-700 font-medium">📧  Crbirds31@yahoo.com</p>
          <a href="https://wa.me/50685499997?text=Hi%20there!%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer" className="text-gray-700 font-medium cursor-pointer">📞 +50685499997</a>
          <Link to="/contact" onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" })}} className="mt-6 mb-5 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
            Contact Now
          </Link>
        </div> 
   
      </div>
    
    </div>
  );
};

export default GuiderPage;
