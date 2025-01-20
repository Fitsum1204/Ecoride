import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logolast.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToursDropdownOpen, setIsToursDropdownOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const clickTours = () => setIsToursDropdownOpen(!isToursDropdownOpen);

  // Show and hide the dropdown menu on hover
  const handleMouseEnter = () => setIsToursDropdownOpen(true);
  const handleMouseLeave = () => setIsToursDropdownOpen(false);

  return (
    <section className="sticky top-0 z-50 w-full bg-gray-100 shadow-md">
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 xl:px-64 py-4 bg-gray-100 shadow-md w-full">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="EcoTours Logo"
            className="h-16 md:h-20 lg:h-24"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              handleMouseLeave();
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex list-none gap-6 lg:gap-8">
          <li>
            <Link
              to="/"
              className="font-normal hover:underline text-gray-800 hover:text-green-700"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="font-normal hover:underline text-gray-800 hover:text-green-700">
              Tours
            </button>
            {isToursDropdownOpen && (
              <ul className="absolute top-6 left-0 bg-white rounded-lg z-50 shadow-md text-nowrap">
                <li>
                  <Link
                    to="/concierge"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-green-700"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMouseLeave();
                    }}
                  >
                    Concierge Tours
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-green-700"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      handleMouseLeave();
                    }}
                  >
                    Local Tours
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/transport"
              className="font-normal hover:underline text-gray-800 hover:text-green-700"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Transport
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-normal text-gray-800 hover:border-green-600 hover:text-white hover:bg-green-600 border-2 border-gray-950 px-8 py-4"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <span className="text-2xl font-bold">&times;</span> // Unicode X
            ) : (
              <div className="w-12 h-12 flex items-center justify-center" aria-label="Menu">
              &#9776;
            </div>
            
            
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-24 inset-0 bg-white z-50 flex flex-col items-start p-6 md:hidden">
            <ul className="list-none flex flex-col gap-8 mt-12 w-full">
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-800 font-bold hover:text-green-600"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <hr className="w-full bg-black mb-4" />
                <button
                  className="hover:underline text-gray-800 hover:text-green-700 text-base font-bold"
                  onClick={clickTours}
                >
                  Tours
                </button>
                {isToursDropdownOpen && (
                  <ul className="absolute top-8 left-12 bg-white rounded-lg z-50 shadow-md ">
                    <li>
                      <Link
                        to="/concierge"
                        className="block px-2 py-2 hover:bg-gray-100 hover:text-green-700"
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          toggleMenu();
                          clickTours();
                        }}
                      >
                        Concierge Tours
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        className="block px-2 py-2 hover:bg-gray-100 hover:text-green-700"
                        onClick={() => {
                          toggleMenu();
                          clickTours();
                          setIsMenuOpen(false);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Local Tours
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <hr className="w-full bg-black mb-2" />
              <li>
                <Link
                  to="/transport"
                  className="text-base text-gray-800 font-bold hover:text-green-600"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Transport
                </Link>
              </li>
              <li className="w-full">
                <Link
                  to="/contact"
                  className="block text-center text-gray-800 font-bold hover:border-green-600 hover:text-white hover:bg-green-600 border-2 border-gray-500 text-lg p-2"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
