import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import emailjs from 'emailjs-com';


const Contact = () => {
 
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_n74av5s', // Replace with your EmailJS Service ID
            'template_nykb85i', // Replace with your EmailJS Template ID
            e.target,
            '2AKXOf1nuT20ctfNo' // Replace with your EmailJS User ID
          )
          .then(
            (result) => {
              console.log('Email sent successfully:', result.text);
              alert('Message sent! We will get back to you soon.');
            },
            (error) => {
              console.error('Error sending email:', error.text);
              alert('Failed to send message. Please try again later.');
            }
          );
    
        e.target.reset(); // Reset the form after submission
        };
  return (
    <section  className="flex flex-col lg:flex-row p-4 sm:p-6 md:p-16 lg:px-32 xl:px-64 gap-8 bg-gray-50">
  {/* Contact Form */}
  <div className="w-full lg:w-1/2">
    <h3 className="text-lg font-semibold text-green-700 mb-2">Contact Us</h3>
   
    <form className="space-y-4" onSubmit={sendEmail}>
     {/* Name */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
    Name
  </label>
  <input
    id="name"
    name="name" // Add this line
    type="text"
    required
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
    name="email" // Add this line
    type="email"
    required
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
    name="phone" // Add this line
    type="tel"
    required
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
    name="message" // Add this line
    rows="4"
    placeholder="Your Message"
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
  ></textarea>
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
  <div id="contactUs"className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6 space-y-6">
    <h2 className="text-2xl font-bold text-green-700">Get in Touch</h2>
    <p>
      <span className="font-semibold">email:</span>{' '}
      <a href="mailto:yourname@example.com" className="text-green-700 underline hover:text-green-900">
      Crbirds31@yahoo.com
      </a>
    </p>
    <div>
      <h3 className="text-lg font-semibold text-gray-700">Working Hours</h3>
      <p>Monday - Sunday: 8:00 AM - 5:00 PM</p>
      <p>Birdwatching tour starts : 6:00 AM </p>
   
    </div>
    <h2 className="text-3xl font-bold mb-6">
  {/* <Link
    to="/schedule"
    className="hover:underline text-green-800"
  >
    Schedule Your Appointment Today!
  </Link> */}
</h2>

  </div>
</section>
  )
}

export default Contact
