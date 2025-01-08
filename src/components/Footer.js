import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
   
      <footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto px-4 lg:px-64">
    {/* Top Section */}
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
      {/* Logo and Description */}
      <div>
        <h3 className="text-2xl font-bold mb-2">EcoRide</h3>
        <p className="text-sm text-gray-300">
          Explore the world responsibly. Discover sustainable options for your next adventure.
        </p>
      </div>

     
    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 my-4"></div>

    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Copyright */}
      <p className="text-sm text-gray-300 mb-4 md:mb-0">
        © {new Date().getFullYear()} EcoRide. All rights reserved.
      </p>

      {/* Social Links */}
      <div className="social-icons">
  <div className="flex gap-4">
    <a
      href="https://telegram.org"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-full p-2 flex items-center justify-center"
    >
      <FontAwesomeIcon icon={faTelegram} size="2x" className="text-[#24A1DE]" />
    </a>
    <a
      href="https://youtube.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-full p-2 flex items-center justify-center"
    >
      <FontAwesomeIcon icon={faYoutube} size="2x" className="text-[#FF0000]" />
    </a>
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#4267B2] rounded-full p-2 flex items-center justify-center"
    >
      <FontAwesomeIcon icon={faFacebookF} size="2x" className="text-white" />
    </a>
    <a
      href="https://tiktok.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-full p-2 flex items-center justify-center"
    >
      <FontAwesomeIcon icon={faTiktok} size="2x" className="text-black" />
    </a>
  </div>
</div>

    </div>
  </div>
</footer>

  )
}

export default Footer

