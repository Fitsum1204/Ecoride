import React from "react";
import { motion } from "framer-motion";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaFeather, FaMapMarkerAlt } from "react-icons/fa";
import BirdSlideshow from "./BirdSlideShow";
import video1 from "../assets/video1.mp4";  
import video2 from "../assets/Video2.mp4";
import video3 from "../assets/video3.mp4"; 
import { Link } from "react-router-dom";

const videoSlides = [video1, video2, video3];
const BirdingTours = () => {
  return (
    <div className="container max-w-5xl mx-auto p-6 space-y-8">
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
                      </div>
                    ))}
                  </Slide>
        </div>
        {/* Hero Section */}
          <motion.div
            className="relative flex flex-col items-center justify-center text-center  p-6 rounded-2xl bg-gradient-to-r from-green-900 to-green-700 text-white shadow-2xl mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            >
            {/* Subtle animated background effect */}
            <motion.div
                className="absolute inset-0 bg-green-800/50 rounded-2xl blur-xl opacity-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.5 }}
            />

            {/* Title with a pop-in animation */}
            <motion.h1
                className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-wide mb-6 drop-shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Exclusive Private Birding Tours in Costa Rica
            </motion.h1>

            {/* Subtitle fading in with staggered effect */}
            <motion.p
                className="text-lg font-medium max-w-2xl leading-relaxed drop-shadow-md "
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                For passionate birders, Costa Rica is a dream destination—home to more than 900 species in some of the most
                biodiverse ecosystems on the planet. Our <strong className="text-yellow-300">private guided birding tours</strong> are crafted exclusively for
                the birder community, offering a specialized experience tailored to your interests and goals.
            </motion.p>

            {/* Call to action button with hover animation */}
           
            <Link  to="/contact" className=" bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg mt-6 drop-shadow-lg"  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                🌟 Book Your Adventure Now
            </Link>
           

            </motion.div>
  
        {/* Personalized Experience Section with Smooth Transition */}
        <motion.div
            className="relative flex flex-col items-center text-center max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-100 shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Floating Feather Icon */}
            <motion.div
            className="absolute -top-4 right-4 text-white opacity-70"
            initial={{ y: -10, rotate: -10, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            >
            <FaFeather size={40} className="text-green-800" />
            </motion.div>

            {/* Title with Entrance Animation */}
            <motion.h2
            className="text-4xl font-extrabold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            >
            Personalized Attention & Small Group Experience
            </motion.h2>

            {/* Subtitle with Slide-in Animation */}
            <motion.p
            className="text-lg font-medium leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            >
            Our tours are limited to a <strong className="text-green-900">maximum of six participants</strong>, ensuring{" "}
            <strong className="text-green-900">personalized attention</strong> and an intimate birding experience.
            </motion.p>
        </motion.div>
        {/* Tour Packages Section */}
        <motion.div 
        className="relative flex flex-col max-w-6xl mx-auto p-6  rounded-3xl bg-gradient-to-r from-yellow-50 to-orange-100 text-white shadow-2xl "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        >
        <h2 className="text-4xl font-extrabold mb-8 text-center drop-shadow-lg sm:text-3xl text-gray-700">🌿 Exclusive Birding Tours</h2>

        {/** Tour Card Component **/}
        {[
            {
            title: "14-Day Private Birding Tour",
            days: [
                "Day 1-2: San Gerardo de Dota – Cloud Forest & Highland Specialties",
                "Day 3-4: Caribbean Lowlands – Rainforest Birding",
                "Day 5-6: Caribbean Foothills",
                "Day 7-8: Arenal Volcano Region",
                "Day 9-10: Pacific Dry Forest & Mangroves",
                "Day 11-12: Osa Peninsula",
                "Day 13-14: Return to San José & Departure",
            ],
            },
            {
            title: "7-Day Southeast Costa Rica Tour",
            days: [
                "Day 1: Arrival in San José – Transfer to a lodge",
                "Day 2-3: Talamanca Highlands",
                "Day 4-5: Osa Peninsula",
                "Day 6: Mangrove Birding",
                "Day 7: Return to San José & Departure",
            ],
            },
            {
            title: "7-Day Northwest Costa Rica Tour",
            days: [
                "Day 1: Arrival in San José – Transfer to Palo Verde",
                "Day 2-3: Dry Forest Birding",
                "Day 4-5: Monteverde Cloud Forest",
                "Day 6: Coastal Birding",
                "Day 7: Return to San José & Departure",
            ],
            },
        ].map((tour, index) => (
            <motion.div
            key={index}
            className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg mb-6 hover:shadow-2xl transition-all duration-300 sm:p-4"
            whileHover={{ scale: 1.03 }}
            >
            <h3 className="text-base sm:text-xl md:text-2xl  font-bold mb-3 text-orange-500 flex items-center gap-2 ">
                <FaMapMarkerAlt className="text-yellow-500" /> {tour.title}
            </h3>
            <ul className=" list-inside space-y-2 px-3 text-base sm:text-lg">
                {tour.days.map((day, idx) => (
                <motion.li
                    key={idx}
                    className="font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 * idx, duration: 0.5 }}
                >
                    {day}
                </motion.li>
                ))}
            </ul>
            </motion.div>
        ))}
        </motion.div>
        {/* Bird picture Section */}
        <BirdSlideshow />
        {/* Pricing Section */}
        <motion.div 
        className="mt-6 p-6 md:p-8 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-100 shadow-2xl text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <motion.h2 
            className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg text-gray-700"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
            💰 Pricing & Flexibility
        </motion.h2>

        <motion.p 
            className="text-lg md:text-xl font-semibold leading-relaxed text-white/90"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
            <strong className="text-gray-700">14-Day Private Birding Tour:</strong> 
            <span className="text-yellow-900 font-bold ml-2 drop-shadow-lg"> $6,295 USD per person (double occupancy)</span> <br/>
            
            <strong className="text-gray-700">7-Day Private Birding Tour:</strong> 
            <span className="text-yellow-900 font-bold ml-2 drop-shadow-lg"> $3,990 USD per person (double occupancy)</span>
        </motion.p>
        </motion.div>
        {/* Contact Section */}
        <motion.div 
        className="mt-10 p-6 md:p-8 rounded-xl bg-gradient-to-r from-green-600 to-green-400 shadow-2xl text-white text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
        <motion.h2 
            className="text-3xl md:text-4xl font-extrabold mb-4 text-white drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
            🦜 Ready to Begin Your Costa Rican Birding Adventure?
        </motion.h2>

        <motion.div 
            className="text-lg md:text-xl font-medium leading-relaxed text-white/90"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
         
     
        >
            <Link to='/contact' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className=" hover:text-yellow-400 text-white font-semibold   " >Contact us</Link> today to <strong className="text-yellow-300 font-bold drop-shadow-lg">customize your private birding tour </strong>  
            and experience Costa Rica’s <span className="text-yellow-200 font-semibold">extraordinary avian diversity </span>  
            with the guidance of a <span className="text-yellow-300 font-bold">top birding expert</span>.  
        </motion.div>
        </motion.div>
    </div>
  );
};

export default BirdingTours;