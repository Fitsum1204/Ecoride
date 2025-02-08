import React from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { motion } from "framer-motion";
import video1 from "../assets/video1.mp4";  
import video2 from "../assets/Video2.mp4";
import video3 from "../assets/video3.mp4"; 
import BirdSlideshow from "./BirdSlideShow";
//import TourPackages from "./Tours";
import TourPackages from "./TourPackages";
const videoSlides = [video1, video2, video3];

const BirdTour = () => {
  return (
    <div className="bg-[#FAF7F2] font-sans max-w-5xl mx-auto p-6  shadow-md mt-0 rounded-lg">
      {/* Hero Section with Video Slideshow */}
      <div className="relative w-full aspect-video md:aspect-[16/9] sm:aspect-[4/3]">
          <Slide 
            autoplay 
            transitionDuration={1000} 
            autoplaySpeed={4000}
            arrows={false} 
            pauseOnHover={false}
          >
            {videoSlides.map((video, index) => (
              <div key={index} className="relative w-full h-full">
                {/* Video Container */}
                <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 aspect ratio */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-slate-600 bg-opacity-10 flex flex-col items-center justify-end p-2 text-center">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-base md:text-3xl sm:text-lg font-bold text-white mb-0">
                      Costa Rica Birding Adventure
                    </h1>
                    <p className="text-sm md:text-lg sm:text-base text-white mb-6">
                      Experience the breathtaking beauty of Costa Rica’s diverse bird species.
                    </p>
                    <Link
                      to="/book"
                      className="inline-block px-4 py-2 md:px-6 md:py-2 sm:px-4 sm:py-2 bg-yellow-500 text-black rounded-lg text-lg md:text-base sm:text-sm hover:bg-yellow-600 transition-colors"
                    >
                      Book Your Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
      </div>
      {/* Tour Overview */}
      <TourPackages />
      {/* Tour Details */}
      <motion.div 
      initial={{ opacity: 0, y: 20, scale: 0.9 }} 
      animate={{ opacity: 1, y: 0, scale: 1 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
      className="max-w-5xl mx-auto p-6 bg-white shadow-md mt-8 rounded-lg"
    >
      <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl font-semibold text-gray-900"
      >
        Tour Highlights
      </motion.h2>
      <motion.ul 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
        className="list-disc ml-6 mt-4 text-gray-700 space-y-2"
      >
        {[
          "Duration: 10-day guided birdwatching tour",
          "Locations: Cloud forests, national parks, wetlands",
          "Difficulty Level: Suitable for all experience levels",
          "Guides: Professional ornithologists and eco-tourism experts",
          "Accommodation: Luxury eco-lodges with authentic Costa Rican cuisine"
        ].map((item, index) => (
          <motion.li 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: index * 0.2 }}
          >
            <strong>{item.split(":")[0]}:</strong> {item.split(":")[1]}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>

      {/* Featured Bird Species */}
      
      <BirdSlideshow />

      {/* Why Choose Us */}
      <div className="relative flex justify-center items-center min-h-72 max-w-5xl mx-auto p-6 shadow-md mt-8 rounded-lg sm:min-h-96 md:min-h-[400px] lg:min-h-[500px]">
      <motion.div
        initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
        animate={{ clipPath: "circle(100% at 50% 50%)", opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 p-6 sm:p-8 md:p-10 lg:p-12 text-white flex flex-col items-center"
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center"
        >
          Why Choose Us?
        </motion.h2>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          className="mt-6 space-y-8 text-center text-sm sm:text-base md:text-xl"
        >
          {[ 
            "Eco-friendly and sustainable tourism practices", 
            "Small, personalized group sizes for an immersive experience", 
            "Exclusive birdwatching locations with rare species" 
          ].map((item, index) => (
            <motion.li 
              key={index} 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="bg-white text-blue-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full inline-block shadow-lg"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  

      {/* Pricing Section */}
      <div className="relative flex justify-center items-center min-h-72 max-w-5xl mx-auto p-6 shadow-md mt-8 rounded-lg overflow-hidden">
      <motion.div
        initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 p-10 text-white flex flex-col items-center justify-center"
      >
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl font-bold text-center"
        >
          Tour Pricing
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-lg"
        >
          Starting from <span className="font-bold text-2xl">$2,500</span> per person.
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link to="/pricing" className="mt-6 inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition">
            View Full Pricing
          </Link>
        </motion.div>
      </motion.div>
    </div>

      {/* Testimonials */}
      <div className="relative flex justify-center items-center min-h-72 max-w-5xl mx-auto p-6 shadow-md mt-8 rounded-lg overflow-hidden">
        <motion.div
          initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 p-10 text-white flex flex-col items-center justify-center"
        >
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-bold text-center"
          >
            What Our Guests Say
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-lg"
          >
            "An unforgettable experience! The guides were incredibly knowledgeable, and we saw rare species we never expected!" – Sarah M.
          </motion.p>
        </motion.div>
      </div>

      {/* FAQ */}
      <div className="relative flex justify-center items-center min-h-72 max-w-5xl mx-auto p-6 shadow-md mt-8 rounded-lg overflow-hidden">
        <motion.div
          initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 p-10 text-white flex flex-col items-center justify-center"
        >
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-bold text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.details
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 border-b border-white pb-2"
          >
            <summary className="cursor-pointer text-lg font-medium">What should I bring?</summary>
            <p className="mt-2">Comfortable clothing, binoculars, camera, and a reusable water bottle.</p>
          </motion.details>
          <motion.details
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 border-b border-white pb-2"
          >
            <summary className="cursor-pointer text-lg font-medium">Is this tour suitable for families?</summary>
            <p className="mt-2">Yes! We welcome families and customize experiences for all age groups.</p>
          </motion.details>
        </motion.div>
      </div>

      {/* Contact & Location */}
      <div className="relative flex justify-center items-center min-h-72 max-w-5xl mx-auto p-6 shadow-md mt-8 rounded-lg overflow-hidden">
        <motion.div
          initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-600 p-10 text-white flex flex-col items-center justify-center"
        >
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl font-bold text-center"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4"
          >
            Have questions? Reach out to us!
          </motion.p>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            📍  Costa Rica | 📞 +50685499997 | ✉️ Crbirds31@yahoo.com
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/contact"
              className="mt-6 mb-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default BirdTour;
