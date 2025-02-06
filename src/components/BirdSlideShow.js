import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bird1 from "../assets/s1.jpeg"; // Replace with actual image paths
import bird2 from "../assets/s2.jpeg";
import bird3 from "../assets/s3.jpeg";
import bird4 from "../assets/s4.jpeg";
import bird5 from "../assets/s5.jpeg";
import bird6 from "../assets/s6.jpeg";

const birds = [
  { src: bird1, name: "Keel-billed Toucan" },
  { src: bird2, name: "Scarlet Macaw" },
  { src: bird3, name: "Resplendent Quetzal" },
  { src: bird4, name: "Blue Jay" },
  { src: bird5, name: "American Robin" },
  { src: bird6, name: "Northern Cardinal" },
];

const BirdSlideshow = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-white shadow-md mt-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">
            Birds You Might Spot
          </h2>
    
          {/* Slideshow */}
          <Slide slidesToShow={3} slidesToScroll={1} autoplay={true} indicators={true} duration={3000}>
            {birds.map((bird, index) => (
              <div key={index} className="text-center p-4">
                <img src={bird.src} alt={bird.name} className="w-full h-40 object-cover rounded-lg" />
                <p className="mt-2 text-gray-700 font-medium">{bird.name}</p>
              </div>
            ))}
          </Slide>
        </div>
      );
};

export default BirdSlideshow;
