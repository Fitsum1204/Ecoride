import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logolast.png';

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/services')
    setIsMenuOpen(false)
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      // If not on the homepage, navigate to the homepage first
      window.location.href = `/#${id}`;
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const headerHeight = document.querySelector("nav").offsetHeight;
      const sectionTop = section.offsetTop - headerHeight;

      let currentPosition = window.pageYOffset;
      const distance = sectionTop - currentPosition;
      const duration = 1000; // Duration in milliseconds
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeInOutCubic = (t) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const easedProgress = easeInOutCubic(progress);

        window.scrollTo(0, currentPosition + distance * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
    setIsMenuOpen(false); // Close menu if open
  };

  return (
    <section className="sticky top-0 z-50 w-full bg-gray-100 shadow-md">
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 xl:px-64 py-4 bg-gray-100 shadow-md w-full">
        {/* Logo */}
        <button onClick={() => handleScroll("home")}
              className="no-underline text-gray-800 font-bold hover:text-green-700"
            >
        <img src={logo} alt="EcoTours Logo" className="h-16 md:h-20 lg:h-24" />
        </button>
        {/* Navigation Links */}
        <ul className="hidden md:flex list-none gap-4 lg:gap-6">
          <li>
            <button
              onClick={() => handleScroll("home")}
              className="font-normal hover:underline text-gray-800  hover:text-green-700"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("about")}
              className="font-normal hover:underline text-gray-800  hover:text-green-700"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("testimonials")}
              className="font-normal hover:underline text-gray-800  hover:text-green-700"
            >
              Testimonials
            </button>
          </li>
          <li>
            <Link
              to="/services"
              className=" text-gray-800 font-normal hover:underline hover:text-green-700 "
            >
              Services
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="font-normal hover:underlinetext-gray-800 hover:border-green-600
              hover:text-white hover:bg-green-600 border-2 border-gray-950 px-4 mb-1.5"
            >
              Contact
            </button>
          </li>
          
        </ul>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Full-Screen Dropdown Menu */}
        {isMenuOpen && (
  <div className="fixed top-24 inset-0 bg-green-50 z-50 flex flex-col items-center justify-between gap-12">
    <ul className="list-none flex flex-col gap-16 mt-12">
      <li>
        <button
          onClick={() => handleScroll("home")}
          className="text-4xl text-gray-800 font-bold hover:text-green-600"
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("about")}
          className="text-4xl text-gray-800 font-bold hover:text-green-600"
        >
          About
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("testimonials")}
          className="text-4xl text-gray-800 font-bold hover:text-green-600"
        >
          Testimonials
        </button>
      </li>
      <li>
        <button
          
          className="text-4xl text-gray-800 font-bold hover:text-green-600"
          onClick={handleClick} // Close dropdown menu on click
        >
          Services
        </button>
      </li>
      <li>
        <button
          onClick={() => handleScroll("contact")}
          className="text-4xl text-gray-800 font-bold hover:text-green-600"
        >
          Contact
        </button>
      </li>
      
    </ul>
  </div>
)}

      </nav>
    </section>
  );
};

export default Navbar;
