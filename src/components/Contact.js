import React from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_0i9ov4m', // Replace with your EmailJS Service ID
            'template_ydugj3g', // Replace with your EmailJS Template ID
            e.target,
            'tcIhGsDKIFHRbn4Q3' // Replace with your EmailJS User ID
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
    <section id="contact" className="flex flex-col lg:flex-row p-4 sm:p-6 md:p-16 lg:px-32 xl:px-64 gap-8 bg-gray-50">
  {/* Contact Form */}
  <div className="w-full lg:w-1/2">
    <h3 className="text-lg font-semibold text-green-700 mb-2">Contact Us</h3>
    <h2 className="text-3xl font-bold mb-6">We’d love to hear from you</h2>
    <form className="space-y-4" onSubmit={sendEmail}>
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
  <div id="contactUs"className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6 space-y-6">
    <h2 className="text-2xl font-bold text-green-700">Get in Touch</h2>
    <p>
      <span className="font-semibold">Email:</span>{' '}
      <a href="mailto:yourname@example.com" className="text-green-700 underline hover:text-green-900">
      Crbirds31@yahoo.com
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
  )
}

export default Contact
