import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          {/* Logo and Description */}
          <div>
            <h3 className="text-3xl font-bold mb-2">EcoRide</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Explore the world responsibly. Discover sustainable options for your next adventure.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-col justify-between items-center gap-4">
         

          {/* Social Media Links */}
          <div className="flex gap-4">
            <p className="text-sm text-gray-400">Follow Us on</p>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ecoridecosta/profilecard/?igsh=aThqcjR1enBjOHky"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-3 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110"
              style={{
                background: "linear-gradient(45deg, #f09433 0%, #e6683c 40%, #dc2743 60%, #cc2366 80%, #bc1888 100%)",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" style={{ color: "#ffffff" }} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/jimenez.segura?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4267B2] rounded-full p-3 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" className="text-white" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-3 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-110"
              style={{
                backgroundColor: "#25D366",
              }}
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: "#ffffff" }} />
            </a>
          </div>
           {/* Copyright */}
           <p className="text-sm text-gray-400 text-center md:text-center">
            © {currentYear} EcoRide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
