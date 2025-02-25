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
        className="flex flex-col items-center p-8 md:w-1/3 lg:w-1/3 md:rounded-full sm:rounded-2xl bg-gradient-to-b from-yellow-50 to-orange-100 shadow-2xl relative mb-3 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ boxShadow: "0 15px 30px rgba(0, 128, 0, 0.2)" }}
      >
        {/* Animated Image Container */}
        <motion.div
          className="w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-96 overflow-hidden rounded-full border-4 border-orange-300 shadow-xl relative"
          whileHover={{ scale: 1.1, borderColor: "#10b981" }}
    transition={{ duration: 0.3 }}
        >
          <motion.img
            src={image6}
            alt="Michael"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
      className="absolute inset-0 bg-green-500 opacity-0 rounded-full"
      whileHover={{ opacity: 0.2 }}
      transition={{ duration: 0.2 }}
    />
        </motion.div>
          
        {/* Guide Info */}
        <motion.h2
          className="text-gray-900 font-extrabold text-3xl mt-6 tracking-wide text-center relative z-10"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 ,delay: 0.2}}
        >
         <span className="text-green-600 drop-shadow-md">Michael</span>
        </motion.h2>

        <motion.p
    className="text-gray-700 mt-3 text-lg md:text-xl text-center relative z-10"
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    🌿 <span className="font-semibold">Tour Guide & Birdwatching Expert</span>
  </motion.p>
  <motion.p
    className="text-gray-600 mt-2 text-sm md:text-base text-center relative z-10"
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    🌍 <span className="font-medium">Multilingual:</span>{" "}
    <motion.span
      className="inline-block text-green-500 font-semibold"
      animate={{ y: [0, -4, 0], color: ["#10b981", "#f59e0b", "#10b981"] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      English + Spanish
    </motion.span>
  </motion.p>

        {/* Animated Ripple Effect */}
        <motion.div
          className="relative flex items-center justify-center w-full h-full rounded-full bg-gray-50 overflow-hidden m-10 "
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 0.5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
        >
          <div className="absolute w-full h-full bg-green-600 border border-white animate-expand rounded-full"></div>
          <div
            className="absolute w-full h-full bg-green-600 border border-white animate-expand rounded-full"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute w-full h-full bg-green-500 border border-white animate-expand rounded-full"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute w-full h-full bg-green-500 border border-white animate-expand rounded-full"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute w-full h-full bg-green-400 border border-white animate-expand rounded-full"
            style={{ animationDelay: "2.5s" }}
          ></div>
          <div
            className="absolute w-full h-full bg-green-400 border border-white animate-expand rounded-full"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute w-full h-full bg-green-300 border border-white animate-expand rounded-full"
            style={{ animationDelay: "3.5s" }}
          ></div>
          <div
            className="absolute w-full h-full bg-green-200 border border-white animate-expand rounded-full"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute w-full h-full bg-green-100 border border-white animate-expand rounded-full"
            style={{ animationDelay: "4.5s" }}
          ></div>
          <div
            className="absolute w-full h-full bg-green-50 border border-white animate-expand rounded-full"
            style={{ animationDelay: "5s" }}
          ></div>
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
          <span className="relative inline-block">Passionate about</span>
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

        {/*  Introduction Section */}
        <motion.div
          className="mt-10 p-6 mr-5 bg-gradient-to-br from-green-50 via-white to-yellow-50 rounded-2xl shadow-2xl border border-green-100 max-w-4xl mx-auto overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10 pointer-events-none"></div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center relative z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            🌿 Meet <span className="text-green-600 drop-shadow-md">Michael Jimenez</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-gray-700 text-lg md:text-xl leading-relaxed text-center mb-8 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Founder of{" "}
            <span className="font-semibold text-green-600 hover:text-green-700 transition-colors duration-300">
              EcoRide Costa Rica
            </span>
            —a custom birdwatching and eco-tour business born from a lifelong passion for nature. 🦜🌍
          </motion.p>

          {/* Divider */}
          <div className="border-t border-green-200 my-6 relative">
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-1 w-16 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
          </div>

          {/* Paragraph 1 */}
          <motion.p
            className="text-gray-700 text-lg leading-relaxed relative z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            I grew up in the{" "}
            <span className="font-medium text-green-600">biodiverse Sarapiquí region</span>, where every day was a discovery among{" "}
            <span className="text-green-700 hover:text-green-800 transition-colors duration-300">vibrant plants</span>,{" "}
            <span className="text-green-700 hover:text-green-800 transition-colors duration-300">diverse mammals</span>,{" "}
            <span className="text-green-700 hover:text-green-800 transition-colors duration-300">colorful birds</span>,{" "}
            <span className="text-green-700 hover:text-green-800 transition-colors duration-300">intriguing snakes</span>, and{" "}
            <span className="text-green-700 hover:text-green-800 transition-colors duration-300">fascinating insects</span>. My father, an entomologist, introduced me to the wonders of the natural world, teaching me about butterflies, beetles, and the incredible variety of life that surrounds us. This early exposure sparked my love for wildlife and inspired me to explore and share the beauty of Costa Rica’s ecosystems. 🌿🦋
          </motion.p>

          {/* Quote Block */}
          <motion.div
            className="border-l-4 border-green-500 pl-4 my-8 text-gray-800 italic text-lg bg-green-50 p-4 rounded-r-lg shadow-inner relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            “Nature is not just something we observe; it’s something we feel, something we connect with.”
          </motion.div>

          {/* Paragraph 2 */}
          <motion.p
            className="text-gray-700 text-lg leading-relaxed relative z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <span className="font-medium text-green-600">Learning English from the age of seven</span> opened doors for me, and by 17 I had secured my first job to help fund my studies. A pivotal moment in my life was studying under{" "}
            <span className="font-medium text-gray-900">Aron Sekerak</span>, a retired Canadian ornithologist and the author of{" "}
            <em className="text-gray-900 font-medium">A Travel and Site Guide to Birds of Costa Rica</em>. He not only helped me refine my language skills but also deepened my appreciation for birds and their behaviors. His mentorship, along with specialized courses on migratory and neotropical bird behavior, laid the foundation for my career in eco-tourism. 🦆📖
          </motion.p>

          {/* Divider */}
          <div className="border-t border-green-200 my-6 relative">
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-1 w-16 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            ></motion.div>
          </div>

          {/* Paragraph 3 */}
          <motion.p
            className="text-gray-700 text-lg leading-relaxed relative z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            With <span className="font-medium text-gray-900">more than 20 years of experience</span> in tourism and birdwatching, I’ve had the pleasure of leading groups through the{" "}
            <span className="text-green-700 hover:text-green-800 transition-colors duration-300">vibrant landscapes of San José</span> and partnering with esteemed organizations like{" "}
            <span className="text-green-700 hover:text-green-800 transition-colors duration-300">La Paz Waterfall Gardens</span>. Every tour I conduct is infused with genuine enthusiasm and a deep respect for the natural world—a perspective I’m eager to share with you.
          </motion.p>

          {/* Highlight Block */}
          <motion.div
            className="bg-gradient-to-r from-green-100 to-yellow-100 p-6 rounded-xl shadow-md text-center my-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0, 128, 0, 0.1)" }}
          >
            <p className="text-gray-800 text-lg font-semibold">
              🌎 <span className="text-green-600">EcoRide Costa Rica</span> is more than just a trip—it’s an opportunity to{" "}
              <span className="text-green-700 font-bold">connect with nature</span>,{" "}
              <span className="text-green-700 font-bold">learn about its wonders</span>, and{" "}
              <span className="text-green-700 font-bold">experience the magic of Costa Rica firsthand</span>.
            </p>
          </motion.div>

          {/* Final Paragraph */}
          <motion.p
            className="text-gray-700 text-lg leading-relaxed text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            I invite you to join me on an{" "}
            <span className="font-medium text-green-600">adventure that is both educational and deeply personal</span>, where together we’ll uncover the secrets of our environment and create memories that last a lifetime. 🌿✨
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.div
            className="text-center mt-8 relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold text-lg rounded-full shadow-lg hover:from-green-700 hover:to-green-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              🌿 Book Your Adventure Now
            </Link>
          </motion.div>
        </motion.div>

        {/* Services Offered */}
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
          <img
            src={extraImage1}
            alt="Scenic View"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={extraImage2}
            alt="Wildlife Experience"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src={extraImage3}
            alt="Guided Tour"
            className="w-full h-auto rounded-lg shadow-md sm:col-span-2"
          />
        </div>

        {/* Booking Information */}
        <div className="mr-4 mb-2 mt-5 sm:mb-0 md:mb-8">
          <motion.div
            initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
            animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative bg-gradient-to-br from-green-50 via-white to-yellow-50 p-8 rounded-2xl shadow-xl border border-green-100 overflow-hidden"
            whileHover={{ boxShadow: "0 15px 30px rgba(0, 128, 0, 0.15)" }}
          >
            {/* Subtle Leaf Pattern Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10 pointer-events-none"></div>

            {/* Animated Heading */}
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center relative z-10"
            >
              🌿 <span className="text-green-600 drop-shadow-md">Book Your Tour</span>
            </motion.h2>

            {/* Introductory Text */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 mb-6 text-center relative z-10"
            >
              Ready to explore Costa Rica’s wonders? Reach out today!
            </motion.p>

            {/* Contact Details */}
            <div className="space-y-4 relative z-10">
              {/* Email */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center justify-center gap-3 bg-white p-3 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-green-500 text-xl">📧</span>
                <p className="text-gray-700 font-medium">Crbirds31@yahoo.com</p>
              </motion.div>

              {/* Phone/WhatsApp */}
              <motion.a
                href="https://wa.me/50685499997?text=Hi%20there!%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center justify-center gap-3 bg-white p-3 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <span className="text-green-500 text-xl">📞</span>
                <span className="text-gray-700 font-medium">+506 8549-9997</span>
              </motion.a>
            </div>

            {/* Call-to-Action Button */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-8 relative z-10"
            >
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold text-lg rounded-full shadow-lg hover:from-green-700 hover:to-green-800 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                🌍 Contact Me Now
              </Link>
            </motion.div>

           
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GuiderPage;