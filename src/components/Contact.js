import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import emailjs from 'emailjs-com';
import flyer from "../assets/flyer.jpeg"; 
const Contact = () => {
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_n74av5s', // Your EmailJS Service ID
        'template_nykb85i', // Your EmailJS Template ID
        e.target,
        '2AKXOf1nuT20ctfNo' // Your EmailJS User ID
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          navigate('/thank-you');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
    e.target.reset();
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    focus: { scale: 1.02, borderColor: '#10b981', boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: '#059669', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
  };

  return (
    <motion.section
      className="flex flex-col lg:flex-row p-6 sm:p-8 md:p-16 lg:px-32 xl:px-64 gap-12 bg-gradient-to-br from-green-50 to-green-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      {/* Contact Form */}
      <motion.div
        className="w-full lg:w-3/5"
        variants={formVariants}
      >
        <motion.div
          className="flex flex-row justify-between items-start text-2xl font-bold"
          variants={inputVariants}
        >
          <h3 className='text-green-700 mb-6 tracking-wide text-2xl'>Let’s Connect</h3>
          <span className='mb-6 text-gray-500 text-2xl'>Michael +506 8549 9997</span>
        </motion.div>
        
        <form className="space-y-6" onSubmit={sendEmail}>
          {/* Name */}
          <motion.div variants={inputVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <motion.input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-0 focus:border-green-500 bg-white shadow-sm"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={inputVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <motion.input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-0 focus:border-green-500 bg-white shadow-sm"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>

          {/* Phone Number */}
          <motion.div variants={inputVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <motion.input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Your Phone Number"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-0 focus:border-green-500 bg-white shadow-sm"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={inputVariants}>
            <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-0 focus:border-green-500 bg-white shadow-sm"
              whileFocus="focus"
              variants={inputVariants}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-4 px-8 text-white bg-green-600 rounded-full font-bold shadow-lg flex items-center justify-center"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            style={{ background: 'linear-gradient(135deg, #10b981, #34d399)' }}
          >
            Send Message
            <motion.span
              className="ml-2"
              initial={{ x: -5 }}
              animate={{ x: 5 }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
            >
              →
            </motion.span>
          </motion.button>
        </form>
      </motion.div>

      {/* Get in Touch */}
      <motion.div
        id="contactUs"
        className="w-full lg:w-2/5 bg-white rounded-2xl shadow-xl p-8 space-y-8 relative overflow-hidden"
        variants={infoVariants}
      >
        <motion.h2
          className="text-3xl font-extrabold text-green-700"
          variants={inputVariants}
        >
          Get in Touch
        </motion.h2>
        <motion.p variants={inputVariants}>
          <span className="font-semibold text-gray-700">Email:</span>{' '}
          <a
            href="mailto:Crbirds31@yahoo.com"
            className="text-green-600 underline hover:text-green-800 transition-colors duration-300"
          >
            Crbirds31@yahoo.com
          </a><br/>
          <span className='font-semibold'>Michael: </span><span className='text-gray-600  '> +506 8549 9997</span>
        </motion.p>
        <motion.div variants={inputVariants}>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Working Hours</h3>
          <p className="text-gray-600">Monday - Sunday: 8:00 AM - 5:00 PM</p>
          <p className="text-gray-600">Birdwatching Tours Start: 6:00 AM</p>
        </motion.div>
        {/* Decorative Leaf Accent */}
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 bg-green-200 rounded-full opacity-20"
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 45 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        {/* Added Image */}
        
        <motion.img
          src={flyer}
          alt="flyer_image"
          className="  w-full  h-auto opacity-100 "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </motion.div>
      
  
      
    </motion.section>
  );
};

export default Contact;