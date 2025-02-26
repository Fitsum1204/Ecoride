import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Confetti from 'react-confetti';

// Background wave animation component
const WaveBackground = () => (
  <motion.div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(120deg, #10b981, #34d399, #6ee7b7)',
      zIndex: 0,
    }}
    animate={{
      background: [
        'linear-gradient(120deg, #10b981, #34d399, #6ee7b7)',
        'linear-gradient(120deg, #34d399, #6ee7b7, #10b981)',
        'linear-gradient(120deg, #6ee7b7, #10b981, #34d399)',
      ],
    }}
    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
  />
);

const ThankYou = () => {
  const controls = useAnimation();

  
  const headingVariants = {
    initial: { scale: 0.9, opacity: 0.8 },
    visible: {
      scale: 1,
      opacity: 1,
      textShadow: '0 0 20px rgba(6, 95, 70, 0.8), 0 0 40px rgba(6, 95, 70, 0.5)',
      transition: { duration: 0.7, ease: 'easeOut', repeat: 1, repeatType: 'reverse' },
    },
  };

  // Card animation with 3D tilt effect
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateX: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 100, damping: 15 },
    },
    hover: { scale: 1.02, rotateY: 5, rotateX: -5, transition: { duration: 0.3 } },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.5 } },
    hover: {
      scale: 1.15,
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
      backgroundColor: '#059669',
    },
    tap: { scale: 0.9 },
  };

  useEffect(() => {
    controls.start('visible');
    // Trigger confetti for 5 seconds
    const timer = setTimeout(() => controls.start('hidden'), 7000);
    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <div
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Animated Wave Background */}
      <WaveBackground />

      {/* Confetti Burst */}
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}
        recycle={false} // Stops after initial burst
        colors={['#10b981', '#34d399', '#6ee7b7', '#ffffff']}
      />

      {/* Main Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '30px',
          padding: '50px',
          maxWidth: '600px',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          zIndex: 2,
          backdropFilter: 'blur(5px)', // Glass effect
        }}
      >
        {/* Animated Heading  */}
        <motion.h1
          variants={headingVariants}
          initial="initial"
          animate="visible"
          style={{
            fontSize: '4rem',
            color: '#065f46',
            fontWeight: '900',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          Thank You!
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            fontSize: '1.75rem',
            color: '#111827',
            marginBottom: '40px',
            fontFamily: "'Georgia', serif",
            lineHeight: '1.5',
          }}
        >
          Your request is in our hands—we’ll respond shortly!
        </motion.p>

        {/* Button */}
        <motion.a
          href="/"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
          style={{
            display: 'inline-block',
            padding: '15px 40px',
            backgroundColor: '#10b981',
            color: 'white',
            fontSize: '1.25rem',
            fontWeight: '700',
            borderRadius: '50px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            border: '2px solid #10b981',
            transition: 'all 0.3s ease', // Smoothens CSS transitions
          }}
        >
          Explore Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ThankYou;