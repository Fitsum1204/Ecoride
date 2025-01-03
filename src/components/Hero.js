import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons';

import Ecoride from '../assets/EcoRide.png';
import F1 from '../assets/pexels-justin-shaifer-501272-1222271.jpg'
import F2 from '../assets/pexels-simon-robben-55958-614810.jpg'
import F3 from '../assets/face3.png'
const Hero = () => {
  return (
    <Fragment>
      {/* Hero Section */}
      <section id="home" className="relative w-full h-[530px]">
        {/* Background with Gradient and Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/public/coverpage.jpeg')]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative flex flex-col items-start justify-center text-left h-full text-white p-6 sm:p-10 md:p-20 lg:p-32 xl:p-64">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-normal mb-4">
            Explore the World, Sustainably
          </h1>
          <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-lg font-normal leading-tight tracking-normal font-sans">
            Discover eco-friendly accommodations and unforgettable eco-tourism activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="py-2 px-4 bg-green-700 text-white font-bold rounded hover:bg-green-800">
              Explore Tours
            </button>
            <button className="py-2 px-4 bg-green-700 text-white font-bold rounded hover:bg-green-800">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="about" className="flex flex-col lg:flex-row items-center p-4 sm:p-2 md:p-16 md:flex-row lg:px-32 xl:px-64 py-8 gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-xl font-semibold md:text-sm lg:text-xl text-green-600 mb-4">Explore sustainably</p>
          <h2 className="text-3xl md:text-xl lg:text-3xl font-bold mb-4">
            Your Eco-Friendly Adventure Awaits
          </h2>
          <p className="text-base md:text-sm lg:text-base text-gray-600 mb-6">
            EcoRide connects you with nature through sustainable and eco-friendly tours. Our app is
            designed to provide you with seamless navigation and a comprehensive log of your
            adventures. From breathtaking hikes to serene kayaking experiences, each tour is crafted
            to minimize your environmental impact while maximizing your enjoyment. Join us in
            preserving the beauty of our planet, one adventure at a time. Based in a location that
            values nature, EcoRide is your partner in exploring responsibly.
          </p>
          <a href="#service" className="underline hover:text-green-800">
            Get in touch
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={Ecoride}
            alt="Eco-Friendly Travel"
            className="w-full lg:w-[400px] rounded shadow-lg"
          />
        </div>
      </section>
      <section id="testimonials" className="relative flex flex-col items-center p-4 sm:p-2 md:p-16 lg:px-32 xl:px-64 py-8 gap-8 bg-green-50">
  {/* Background */}
  <div className="absolute inset-0 bg-green-50"></div>

  {/* Testimonials Content */}
  <div className="relative w-full">
    <h2 className="text-3xl lg:text-4xl font-bold text-center text-green-700 mb-8">
      What Our Customers Say
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center mb-4">
          <img
            src={F1}
            alt="Sarah J."
            className="w-24 h-24 rounded-full shadow-md"
          />
        </div>
        <p className="text-gray-600 italic mb-4">
          "EcoRide made my vacation unforgettable! I loved how easy it was to
          find sustainable options for every adventure. I’ll definitely use it
          again!"
        </p>
        <h3 className="text-lg font-semibold text-green-700">- Sarah J.</h3>
        <p className="text-sm text-gray-500">Eco Enthusiast</p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center mb-4">
          <img
            src={F2}
            alt="David M."
            className="w-24 h-24 rounded-full shadow-md"
          />
        </div>
        <p className="text-gray-600 italic mb-4">
          "A seamless experience from start to finish. The app's navigation and
          eco-friendly options are a game-changer for responsible travel."
        </p>
        <h3 className="text-lg font-semibold text-green-700">- David M.</h3>
        <p className="text-sm text-gray-500">Adventure Seeker</p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center mb-4">
          <img
            src={F3}
            alt="Maria L."
            className="w-24 h-24 rounded-full shadow-md"
          />
        </div>
        <p className="text-gray-600 italic mb-4">
          "I highly recommend EcoRide to anyone who wants to explore the world
          while preserving nature. The app made it so easy and enjoyable!"
        </p>
        <h3 className="text-lg font-semibold text-green-700">- Maria L.</h3>
        <p className="text-sm text-gray-500">Nature Lover</p>
      </div>
    </div>
  </div>
</section>
<section id="contact" className="flex flex-col lg:flex-row p-4 sm:p-6 md:p-16 lg:px-32 xl:px-64 gap-8 bg-gray-50">
  {/* Contact Form */}
  <div className="w-full lg:w-1/2">
    <h3 className="text-lg font-semibold text-green-700 mb-2">Contact Us</h3>
    <h2 className="text-3xl font-bold mb-6">We’d love to hear from you</h2>
    <form className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
        />
      </div>
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
        />
      </div>
      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Your Phone Number"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
        />
      </div>
      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
        ></textarea>
      </div>
      {/* Check-in */}
      {/* Consent Checkbox */}
<div>
  <label className="inline-flex items-center">
    <input
      type="checkbox"
      className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 focus:border-green-500"
    />
    <span className="ml-2 text-sm text-gray-700">
      I allow this website to store my submission so they can respond to my inquiry. *
    </span>
  </label>
</div>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 px-6 text-white bg-green-700 rounded-lg font-semibold hover:bg-green-800"
      >
        Submit
      </button>
    </form>
  </div>

  {/* Get in Touch */}
  <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6 space-y-6">
    <h2 className="text-2xl font-bold text-green-700">Get in Touch</h2>
    <p>
      <span className="font-semibold">Email:</span>{' '}
      <a href="mailto:yourname@example.com" className="text-green-700 underline hover:text-green-900">
        yourname@example.com
      </a>
    </p>
    <div>
      <h3 className="text-lg font-semibold text-gray-700">Working Hours</h3>
      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
      <p>Saturday: 10:00 AM - 3:00 PM</p>
      <p>Sunday: Closed</p>
    </div>
  </div>
</section>
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


    </Fragment>
  );
};

export default Hero;
