/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
    },
    animation: {
      'expand': 'expand 7s ease-in-out infinite',
      'expand2': 'expand 7s ease-out infinite',
      'spin-pause': 'spinPause 6s ease-in-out infinite',
      'slide': "slide 6s infinite linear",
  },
  bounce: "bounce 5s infinite",
  keyframes: {
    expand: {
        '0%': { transform: 'scale(0) ', opacity: '1' },
        
        '100%': { transform: 'scale(1.5)' , opacity: '0' },
    },
    expand2: {
      '0%': { transform: 'scale(0) ', opacity: '0' },
      
      '100%': { transform: 'scale(1)' , opacity: '1' },
  },
    spinPause: {
      '0%': { transform: 'rotate(0deg)' },
      '25%': { transform: 'rotate(90deg)' },
      '50%': { transform: 'rotate(180deg)' },
      '75%': { transform: 'rotate(270deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    slide: {
      "0%, 100%": { transform: "translateX(0%)" },
      "33%": { transform: "translateX(-100%)" },
      "66%": { transform: "translateX(-200%)" },
    },
}

  },
  plugins: [],
}}
