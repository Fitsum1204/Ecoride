import React from 'react'
import { Link } from 'react-router-dom'

const Schedulewedget = () => {
  return (
    <div className='fixed bottom-40 right-6 z-50 cursor-pointer' >
      <Link to='/contact' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl shadow-md" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Book Now</Link>
    </div>
  )
}

export default Schedulewedget
