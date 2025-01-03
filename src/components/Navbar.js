




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logolast.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="sticky top-0 z-50 w-full bg-gray-100 shadow-md">
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-4 bg-gray-100 shadow-md w-full">
        {/* Logo */}
        <img src={logo} alt="EcoTours Logo" className="h-16 md:h-20 lg:h-24" />

        {/* Navigation Links */}
        <ul className="hidden md:flex list-none gap-4 lg:gap-6">
          <li>
            <Link
              className="no-underline text-gray-800 font-bold hover:text-green-700"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-gray-800 font-bold hover:text-green-700"
              to="/#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-gray-800 font-bold hover:text-green-700"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="no-underline text-gray-800 font-bold hover:text-green-700"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
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
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-100 shadow-md list-none flex flex-col gap-4 p-4">
            <li>
              <Link
                className="no-underline text-gray-800 font-bold hover:text-green-700"
                to="/"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="no-underline text-gray-800 font-bold hover:text-green-700"
                to="/#about"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="no-underline text-gray-800 font-bold hover:text-green-700"
                to="/services"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="no-underline text-gray-800 font-bold hover:text-green-700"
                to="/contact"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
