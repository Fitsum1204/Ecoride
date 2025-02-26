import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion
import logo from "../assets/logolast.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToursDropdownOpen, setIsToursDropdownOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Show and hide the dropdown menu on hover
  const handleMouseEnter = () => setIsToursDropdownOpen(true);
  const handleMouseLeave = () => setIsToursDropdownOpen(false);

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#10b981", transition: { duration: 0.3 } },
  };

  /* const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  }; */

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <motion.section
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-green-50 to-green-100 shadow-lg"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 xl:px-64 py-4">
        {/* Logo */}
        <Link to="/">
          <motion.img
            src={logo}
            alt="EcoTours Logo"
            className="h-16 md:h-20 lg:h-24"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleMouseLeave();
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex list-none gap-8 lg:gap-12">
          <motion.li whileHover="hover" variants={linkVariants}>
            <Link
              to="/"
              className="font-semibold text-gray-800 hover:text-green-700 transition-colors duration-200"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>
          </motion.li>
          <motion.li whileHover="hover" variants={linkVariants}>
            <Link
              to="/birding"
              className="font-semibold text-gray-800 hover:text-green-700 transition-colors duration-200"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Birdwatching
            </Link>
          </motion.li>
          <motion.li whileHover="hover" variants={linkVariants}>
            <Link
              to="/services"
              className="font-semibold text-gray-800 hover:text-green-700 transition-colors duration-200"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Tours
            </Link>
          </motion.li>
          {/* <motion.li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover="hover"
            variants={linkVariants}
          >
            <button className="font-semibold text-gray-800 hover:text-green-700 transition-colors duration-200">
              Tours
            </button>
            {isToursDropdownOpen && (
              <motion.ul
                className="absolute top-10 left-0 bg-white rounded-lg shadow-xl z-50 border border-green-200"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
              >
                <motion.li whileHover={{ backgroundColor: "#f0fdf4" }}>
                  <Link
                    to="/birding"
                    className="block px-6 py-3 text-gray-800 hover:text-green-700 font-medium"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMouseLeave();
                    }}
                  >
                    Birding Tour
                  </Link>
                </motion.li>
                <motion.li whileHover={{ backgroundColor: "#f0fdf4" }}>
                  <Link
                    to="/services"
                    className="block px-6 py-3 text-gray-800 hover:text-green-700 font-medium"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMouseLeave();
                    }}
                  >
                    Local Tours
                  </Link>
                </motion.li>
              </motion.ul>
            )}
          </motion.li> */}
          <motion.li whileHover="hover" variants={linkVariants}>
            <Link
              to="/transport"
              className="font-semibold text-gray-800 hover:text-green-700 transition-colors duration-200"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Transport
            </Link>
          </motion.li>
          <motion.li whileHover="hover" variants={linkVariants}>
            <Link
              to="/guide"
              className="font-semibold text-gray-800 hover:text-green-700 transition-colors duration-200"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Guide
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact"
              className="font-semibold text-gray-800 border-2 border-green-600 px-6 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact
            </Link>
          </motion.li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <motion.button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <span className="text-3xl font-bold">×</span>
            ) : (
              <div className="w-12 h-12 flex items-center justify-center text-2xl" aria-label="Menu">
                ☰
              </div>
            )}
          </motion.button>
       

        {/* Mobile Menu */}
         {isMenuOpen && (
          <motion.div
            className="fixed top-24 inset-0 bg-gradient-to-b from-green-50 to-green-200 z-50 flex flex-col items-start p-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <ul className="list-none flex flex-col gap-6 mt-12 w-full">
              {[
                { to: "/", label: "Home" },
                { to: "/birding", label: "Birdwatching" },
                { to: "/services", label: "Tours" },
                { to: "/transport", label: "Transport" },
                { to: "/guide", label: "Guide" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, color: "#10b981" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={item.to}
                    className="text-lg text-gray-800 font-bold hover:text-green-600"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.label}
                  </Link>
                  <hr className="w-full border-green-300 mt-2" />
                </motion.li>
              ))}
              <motion.li whileHover={{ scale: 1.05 }} className="w-full">
                <Link
                  to="/contact"
                  className="block text-center text-lg text-gray-800 font-bold border-2 border-green-600 py-3 hover:bg-green-600 hover:text-white transition-all duration-300 rounded-lg"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )} 
        </div>
        
      </nav>
    </motion.section>
  );
};

export default Navbar;