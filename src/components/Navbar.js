import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logolast.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToursDropdownOpen, setIsToursDropdownOpen] = useState(false);
  const location = useLocation();

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Show and hide the dropdown menu on hover
  const handleMouseEnter = () => setIsToursDropdownOpen(true);
  const handleMouseLeave = () => setIsToursDropdownOpen(false);

  // Smooth scrolling to a section
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const headerHeight = document.querySelector("nav").offsetHeight;
      const sectionTop = section.offsetTop - headerHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <section className="sticky top-0 z-50 w-full bg-gray-100 shadow-md">
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 xl:px-64 py-4 bg-gray-100 shadow-md w-full">
        {/* Logo */}
        <Link to="/" onClick={() => handleScroll("home")}>
          <img src={logo} alt="EcoTours Logo" className="h-16 md:h-20 lg:h-24" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex list-none gap-4 lg:gap-6">
          <li>
            <Link to="/" className="font-normal hover:underline text-gray-800 hover:text-green-700">
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
              <ul className="absolute bg-white border shadow-md mt-1 py-1 w-48">
                <li>
                  <Link
                    to="/concierge"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Concierge Tours
                  </Link>
                </li>
                <li>
                  <Link
                    to="/localtours"
                    className="block px-4 py-2 hover:bg-gray-100"
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
            >
              Transport
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-normal hover:underline text-gray-800 hover:border-green-600 hover:text-white hover:bg-green-600 border-2 border-gray-950 px-4 mb-1.5"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-24 inset-0 bg-white z-50 flex flex-col items-start p-6">
            <ul className="list-none flex flex-col gap-8 mt-12 w-full">
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-800 font-bold hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <hr className="w-full bg-black mb-4" />
                <Link
                  to="/concierge"
                  className="text-base text-gray-800 font-bold hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Concierge Tours
                </Link>
              </li>
              <li>
              <hr className="w-full bg-black mb-4" />
                <Link
                  to="/services"
                  className="text-base text-gray-800 font-bold hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Local Tours
                </Link>
              </li>
              <hr className="w-full bg-black mb-2" />
              <li>
                
                <Link
                  to="/transport"
                  className="text-base text-gray-800 font-bold hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Transport
                </Link>
              </li>
              <li className="w-full">
  <Link
    to="/contact"
    className="block text-center text-gray-800 font-bold hover:border-green-600 hover:text-white hover:bg-green-600 border-2 border-gray-500 text-lg p-2"
    onClick={() => setIsMenuOpen(false)}
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
