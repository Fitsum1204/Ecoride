import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logolast.png';

const Navbar = () => {
  
  return (
    <Fragment>
    {/*<section className="flex flex-col items-center gap-4 justify-center sticky top-0 z-50 w-full bg-gray-100 shadow-md">
    
      <nav className="flex flex-col items-center p-4 bg-gray-100 shadow-md w-screen "> 
        <img src={logo} alt="EcoTours Logo" className="h-28" />
        <ul className="list-none flex gap-6">
          <Link className="no-underline text-gray-800 font-bold hover:text-green-700" to="/">Home</Link>
          <Link className="no-underline text-gray-800 font-bold hover:text-green-700" to="/about">About</Link>
          <Link className="no-underline text-gray-800 font-bold hover:text-green-700" to="/services">Services</Link>
          <Link className="no-underline text-gray-800 font-bold hover:text-green-700" to="/contact">Contact</Link>
        </ul>
      </nav>
    </section>*/}
    
    <section className="sticky top-0 z-50 w-full bg-gray-100 shadow-md">
  <nav className="flex items-center justify-between px-64 py-4 bg-gray-100 shadow-md w-full">
    {/* Logo */}
    <img src={logo} alt="EcoTours Logo" className="h-24" />
    
    {/* Navigation Links */}
    <ul className="list-none flex gap-6">
     
        <Link className="no-underline text-gray-800 font-bold hover:text-green-700" to="/">Home</Link>
        
      
      <Link className="no-underline text-gray-800 font-bold hover:text-green-700" to="#hero' about">About</Link>
      
      <Link className="no-underline text-gray-800 font-bold hover:text-green-700" to="/services">Services</Link>
      <Link className="no-underline text-gray-800 font-bold hover:text-green-700" to="/contact">Contact</Link>
    </ul>
  </nav>
</section>

  

   
    {/* <section
  className="relative flex items-center justify-center h-screen bg-cover bg-center text-white bg-[url('/public/coverpage.jpeg')] bg-scroll p-9  mx-auto mt-10 pt-96 max-w-4xl top-1/2"
>
  
  <div className=" z-10 flex flex-col items-center text-center p-4 bg-slate-700 bg-opacity-15 rounded mt-1">
    <h1 className="mt-2 max-w-md text-center text-4xl text-slate-900 dark:text-slate-50 sm:text-left">Explore the World, Sustainably</h1>
    <p className="mt-2 max-w-md text-center text-lg text-slate-700 dark:text-slate-50 sm:text-left">
      Discover eco-friendly accommodations and unforgettable eco-tourism activities.
    </p>
    <div className="flex gap-4  mt-2 max-w-md text-center text-lg text-slate-700 dark:text-slate-50 sm:text-left">
      <button className="py-2 px-4 bg-green-700 text-white font-bold rounded hover:bg-green-800 ">
        Explore Tours
      </button>
      <button className="py-2 px-4 bg-green-700 text-white font-bold rounded hover:bg-green-800">
        Book Now
      </button>
    </div>
  </div>
</section> */}



{/*}
<section
  className="relative flex items-center justify-center h-screen bg-cover bg-center text-white bg-slate-700  bg-[url('/public/coverpage.jpeg')] bg-scroll p-9 mx-auto mt-10 max-w-4xl rounded-lg"
>
  <div className="flex flex-col items-center justify-center text-center bg-slate-700 bg-opacity-40 p-6 rounded-lg">
    <h1 className="text-4xl font-bold text-white">
      Explore the World, Sustainably
    </h1>
    <p className="mt-4 max-w-lg text-lg text-white">
      Discover eco-friendly accommodations and unforgettable eco-tourism activities.
    </p>
    <div className="flex gap-4 mt-6">
      <button className="py-2 px-4 bg-green-700 text-white font-bold rounded hover:bg-green-800">
        Explore Tours
      </button>
      <button className="py-2 px-4 bg-green-700 text-white font-bold rounded hover:bg-green-800">
        Book Now
      </button>
    </div>
  </div>
</section>*/}


    </Fragment>
  );
};

export default Navbar;
