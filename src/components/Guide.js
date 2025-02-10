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
      <motion.div
      className="flex flex-col items-center p-8 md:w-1/3 lg:w-1/3 md:rounded-full sm:rounded-2xl    bg-gradient-to-b from-yellow-50 to-orange-100 shadow-2xl relative mb-3 "
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated Image Container */}
      <motion.div
       className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-96 
       overflow-hidden rounded-full border-4 border-orange-300 shadow-xl relative"
       
        whileHover={{ scale: 1.1 }}
      >
        <motion.img
          src={image6}
          alt="Michael"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>

      {/* Guide Info */}
      <motion.h2
        className="text-gray-900 font-extrabold text-3xl mt-6 tracking-wide"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Michael
      </motion.h2>

      <p className="text-gray-700 mt-3 text-lg text-center">
        🌿 **Experienced Tour Guide & Birdwatching Specialist**  
      </p>
      <p className="text-gray-600 text-sm text-center">
        🌍 **Multilingual:**  
        <motion.span
          className="inline-block text-orange-500 font-semibold"
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          English + Spanish
        </motion.span>
      </p>

      {/* Animated Ripple Effect */}
       <motion.div
        className="relative flex items-center justify-center w-full h-full rounded-full bg-gray-50 overflow-hidden m-10 "
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 0.5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
      >
         {/*  Animation */}
      
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

          {/* <motion.img
          src={image6}
          alt="Michael"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
       
         */}
       
     
        
      </motion.div> 
     
      </motion.div>
      {/* Right Section (Main Content) */}
      <div className="md:w-2/3 flex flex-col justify-center">
          <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center md:text-left text-gray-900 tracking-tight px-4 md:px-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="relative inline-block">
        Passionate about  
        
      </span>  
      <br className="hidden sm:block" />
      <span className="text-green-600">Creating Great Travel Experiences</span>
          </motion.h1>
        {/* Call to Action Buttons */}
        <div className="flex md:justify-start sm:items-center sm:justify-center gap-4 mt-6">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/50685499997?text=Hi%20there!%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-green-500 to-green-700 shadow-lg hover:from-green-600 hover:to-green-800 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.19.66 4.23 1.79 5.94L2 22l4.25-1.25A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-.66 0-1.32-.17-1.94-.5l-.46-.26-2.84.75.75-2.75-.26-.47a4.56 4.56 0 01-.5-1.94c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5zm4.22-2.72l-.72.72a.75.75 0 01-1.06 0l-1.78-1.78a.75.75 0 010-1.06l.72-.72a.75.75 0 011.06 0l1.78 1.78c.3.3.3.78 0 1.06z" />
              </svg>
              Talk with Me
            </a>
         {/* Book Now Button */}
  <Link
    to="/contact"
    className="px-6 py-3 rounded-lg bg-gray-200 text-gray-900 shadow-lg hover:bg-gray-300 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <svg
      className="w-5 h-5 text-gray-900"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 3H5a2 2 0 00-2 2v14l4-4h12a2 2 0 002-2V5a2 2 0 00-2-2zm-1 10H6l-2 2V6a1 1 0 011-1h14a1 1 0 011 1v7a1 1 0 01-1 1z" />
    </svg>
    Book Now
  </Link>
</div>


        {/* Services Offered  bg-[#FAF7F2]*/}
        <div className="mt-10 p-6 bg-gradient-to-r from-yellow-50 to-[#FAF7F2] rounded-lg shadow-lg w-auto mr-5">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl font-bold text-gray-900 text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        🌍 Our Exclusive Services
      </motion.h2>

      {/* Responsive Services List */}
      <motion.ul
        className="list-none text-gray-800 space-y-4 max-w-xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {[
          "Hiking & Nature Walks",
          "Cultural Experiences",
          "Birdwatching",
          "Photography Tours",
        ].map((service, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md cursor-pointer hover:bg-yellow-100 transition-all duration-300 hover:shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Animated Checkmark */}
            <motion.span
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="text-green-500 text-xl"
            >
              ✔
            </motion.span>
            <span className="text-lg font-medium">{service}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>

        {/* Image Slider */}
        <div className="mt-8">
          <Slideshow />
        </div>

        {/* Extra Images Scattered Around */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 mr-4">
          <img src={extraImage1} alt="Scenic View" className="w-full h-auto rounded-lg shadow-md" />
          <img src={extraImage2} alt="Wildlife Experience" className="w-full h-auto rounded-lg shadow-md" />
          <img src={extraImage3} alt="Guided Tour" className="w-full h-auto rounded-lg shadow-md sm:col-span-2" />
        </div>
         
        {/* Booking Information */}
       <div className="mr-4 mb-2  sm:mb-0 md:mb-8  "> 
      <motion.div
        initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="relative  inset-0 bg-gradient-to-r from-yellow-200 to-[#eec57e] text-white flex flex-col items-center justify-center w-full h-full my-4 mb-2 rounded-lg "
      >
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-3xl md:text-3xl font-bold text-center mb-4"
        >
          Book a Tour
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className=" md:text-lg sm:text-base text-gray-600 mb-2"
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
            className="mt-2 mb-5 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            Contact Now
          </Link>
        </motion.div>
      </motion.div>
      </div>
      </div>
    </div>
  );
};

export default GuiderPage;
