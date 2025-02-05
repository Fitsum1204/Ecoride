import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import image1 from "../assets/guidePictures/Michael6.jpeg";
import image2 from "../assets/family.jpeg";
import image3 from "../assets/logolast.png";
import image4 from "../assets/Michehel.jpeg";
import Slideshow from "./Slideshow";
const Guide = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      {/* Hero Section */}
      <div className="flex justify-center items-center  m-8">
      <div className="bg-white p-4 rounded-xl shadow-lg text-center w-64 relative">
        {/* Circular Image */}
        <div className="w-36 h-36 mx-auto overflow-hidden rounded-full border-4 border-white -mt-12 shadow-md">
          <img
            src={image1} // Replace with actual image
            alt="Fountain Park"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Title */}
        <h2 className="text-gray-800 font-semibold text-lg mt-4">
        Michael
        </h2>
        
        {/* Description */}
        <div className="flex flex-col items-center justify-center text-gray-600 text-sm mt-2">
          
          <p className="text-gray-600">Experienced Tour Guide & Nature Enthusiast</p>
        <p className="text-gray-500">Multilingual | English + Spanish</p>
        </div>
      </div>
    </div>
      
      {/* Profile Section */}
      {/* <div className="flex flex-col items-center text-center mb-8">
        <img
          src={image4}         alt="Michael"
          className="w-32 h-32 rounded-full shadow-md"
        />
        <h2 className="text-2xl font-bold mt-4">Michael</h2>
        <p className="text-gray-600">Experienced Tour Guide & Nature Enthusiast</p>
        <p className="text-gray-500">Multilingual | English + Spanish</p>
      </div> */}
      <Slideshow/>
      {/* Services Offered */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Services Offered</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>City Tours</li>
          <li>Hiking & Nature Walks</li>
          <li>Cultural Experiences</li>
          <li>Customizable Private Tours</li>
        </ul>
      </div>
     
      {/* Image Slider */}
     
      
      {/* Testimonials */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">What Clients Say</h2>
        <p className="text-gray-600 italic">"Michael made our trip unforgettable! Highly recommend his tours."</p>
        <p className="text-gray-500">- Sarah J.</p>
      </div>
      
      {/* Booking Info */}
      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Book a Tour</h2>
        <p className="text-gray-600">For bookings and inquiries, contact:</p>
        <p className="text-gray-500">Email: michael.tours@example.com</p>
        <p className="text-gray-500">Phone: +123 456 7890</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md">Contact Now</button>
      </div>
      
      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">FAQs</h2>
        <p className="text-gray-600"><strong>What should I bring?</strong> Comfortable shoes, water, and a camera!</p>
        <p className="text-gray-600 mt-2"><strong>Is it kid-friendly?</strong> Yes, most tours are family-friendly.</p>
      </div>
      
      {/* Contact & Social Media */}
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-4">Follow Michael</h2>
        <p className="text-gray-600">Stay connected on social media:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-500">Instagram</a>
          <a href="#" className="text-blue-500">Facebook</a>
          <a href="#" className="text-blue-500">YouTube</a>
        </div>
      </div>
    </div>
  );
};

export default Guide
