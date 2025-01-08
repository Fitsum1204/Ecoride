import React,{useState} from 'react'


    const DestinationCard = ({ destination }) => {
        const [showFullDescription, setShowFullDescription] = useState(false);
      
        const toggleDescription = () => {
          setShowFullDescription(!showFullDescription);
        };
      
        return (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{destination.name}</h2>
              <p className="text-gray-600 mt-2">
                {showFullDescription
                  ? destination.description
                  : `${destination.description.substring(0, 100)}...`}
              </p>
              <button
                className="text-green-700 mt-2"
                onClick={toggleDescription}
              >
                {showFullDescription ? "Show Less" : "Read More"}
              </button>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-green-700 font-bold text-lg">{destination.price}</span>
                <button className="bg-green-700 text-white px-4 py-2 rounded shadow">
                 Book Now
                </button>
              </div>
            </div>
            
          </div>
          
        );
      };
  


export default DestinationCard
