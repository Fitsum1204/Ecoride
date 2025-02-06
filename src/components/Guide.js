import React from "react";
import { Link } from "react-router-dom";
import image6 from "../assets/guidePictures/Michael6.jpeg";
import { motion } from "framer-motion";
import Slideshow from "./Slideshow";
import extraImage1 from "../assets/guidePictures/Michael5.jpeg";
import extraImage2 from "../assets/guidePictures/Client1.jpeg";
import extraImage3 from "../assets/guidePictures/client2.jpeg";

const GuiderPage = () => {
  return (
    <div className="max-w-5xl mx-auto pt-10 px-6 md:px-10 bg-[#FAF7F2] shadow-lg rounded-lg flex flex-col md:flex-row gap-12">
      {/* Left Section (Guide Info) */}
      <div className="flex flex-col items-center p-6 md:w-1/3 md:mb-64 sm:mb-0 md:rounded-full lg:rounded-full sm:rounded-lg bg-white shadow-md relative">
      {/* Circular Image */}
      <div className="w-52 h-52  overflow-hidden rounded-full border-2 border-gray-400 shadow-lg">
        <img src={image6} alt="Michael" className="w-full h-full object-cover" />
      </div>

      {/* Guide Info */}
      <h2 className="text-gray-800 font-bold text-2xl mt-4 animate-pulse">Michael</h2>
      <p className="text-gray-600 mt-2 text-center">
        Experienced Tour Guide & Birdwatching Specialist
      </p>
      <p className="text-gray-500 text-sm text-center ">
        Multilingual | <span className="inline-block animate-bounce text-orange-400">English + Spanish</span>
      </p>

      {/*  Animation */}
      <div class="relative flex items-center justify-center w-full h-full rounded-full bg-gray-50 overflow-hidden m-10">
  
  <div class="absolute w-full h-full bg-green-600 border border-white animate-expand rounded-full"></div>
  <div class="absolute w-full h-full bg-green-600 border border-white animate-expand rounded-full" style={{ animationDelay: "1s" }}></div>
  <div class="absolute w-full h-full bg-green-500 border border-white animate-expand rounded-full" style={{ animationDelay: "1.5s" }}></div>
  <div class="absolute w-full h-full bg-green-500 border border-white animate-expand rounded-full" style={{ animationDelay: "2s" }}></div>
  <div class="absolute w-full h-full bg-green-400 border border-white animate-expand rounded-full" style={{ animationDelay: "2.5s" }}></div>
  <div class="absolute w-full h-full bg-green-400 border border-white animate-expand rounded-full" style={{ animationDelay: "3s" }}></div>
  <div class="absolute w-full h-full bg-green-300 border border-white animate-expand rounded-full" style={{ animationDelay: "3.5s" }}></div>
  <div class="absolute w-full h-full bg-green-200 border border-white animate-expand rounded-full" style={{ animationDelay: "4s" }}></div>
  <div class="absolute w-full h-full bg-green-100 border border-white animate-expand rounded-full" style={{ animationDelay: "4.5s" }}></div>
  <div class="absolute w-full h-full bg-green-50 border border-white animate-expand rounded-full" style={{ animationDelay: "5s" }}></div>
</div>
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
            <li className="flex items-center gap-2 animate-pulse"><span className="animate-bounce">✅</span> City Tours</li>
            <li className="flex items-center gap-2"><span className="animate-bounce">✅</span> Hiking & Nature Walks</li>
            <li className="flex items-center gap-2"><span className="animate-bounce">✅</span> Cultural Experiences</li>
            <li className="flex items-center gap-2"><span className="animate-bounce">✅</span> Custom Private Tours</li>
          </ul>
        </div>

        {/* Image Slider */}
        <div className="mt-8">
          <Slideshow />
        </div>

        {/* Extra Images Scattered Around */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img src={extraImage1} alt="Scenic View" className="w-full h-auto rounded-lg shadow-md" />
          <img src={extraImage2} alt="Wildlife Experience" className="w-full h-auto rounded-lg shadow-md" />
          <img src={extraImage3} alt="Guided Tour" className="w-full h-auto rounded-lg shadow-md sm:col-span-2" />
        </div>
         
        {/* Booking Information */}
        
      <motion.div
        initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative  inset-0 bg-gradient-to-r from-yellow-400 to-red-500 p-10 text-white flex flex-col items-center justify-center w-full h-full my-4 rounded-lg"
      >
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-center mb-4"
        >
          Book a Tour
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-600 mb-2"
        >
          For bookings and inquiries:
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-700 font-medium mb-2"
        >
          📧 Crbirds31@yahoo.com
        </motion.p>
        <motion.a
          href="https://wa.me/50685499997?text=Hi%20there!%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-gray-700 font-medium cursor-pointer mb-4"
        >
          📞 +50685499997
        </motion.a>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link
            to="/contact"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mt-6 mb-5 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            Contact Now
          </Link>
        </motion.div>
      </motion.div>
    
      </div>
    </div>
  );
};

export default GuiderPage;
