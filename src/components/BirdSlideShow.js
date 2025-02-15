import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bird1 from "../assets/birdPictures/b1.jpeg"; 
import bird2 from "../assets/birdPictures/b2.jpeg";
import bird3 from "../assets/birdPictures/b3.jpeg";
import bird4 from "../assets/birdPictures/b4.jpeg";
import bird5 from "../assets/birdPictures/b5.jpeg";
import bird6 from "../assets/birdPictures/b6.jpeg";
import bird7 from "../assets/birdPictures/b7.jpeg"; 
import bird8 from "../assets/birdPictures/b8.jpeg";
import bird9 from "../assets/birdPictures/b9.jpeg";
import bird10 from "../assets/birdPictures/b10.jpeg";
import bird11 from "../assets/birdPictures/b11.jpeg";
import bird12 from "../assets/birdPictures/b12.jpeg";
import bird13 from "../assets/birdPictures/b13.jpeg";

const birds = [
  { src: bird2, name: "Agami heron" },
  { src: bird3, name: "Faciated tiger heron" },
  { src: bird4, name: "Violet sabrewing" },
  { src: bird5, name: "Collared trogon" },
  { src: bird1, name: "Sun bittern" },
  { src: bird6, name: "Barred becard" },
  { src: bird7, name: "Spangled cheeked tanager" },
  { src: bird8, name: "Lesson's motmot" },
  { src: bird9, name: "Shinning honeycreeper" },
  { src: bird10, name: "Green honeycreeper" },
  { src: bird11, name: "Red legged honeycreeper" },
  { src: bird12, name: "Sun grebe" },
  { src: bird13, name: "Green ibis" },
];

const BirdSlideshow = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [imageHeight, setImageHeight] = useState("h-96");

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
        setImageHeight("h-64");
      } else {
        setSlidesToShow(3);
        setImageHeight("h-64");
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-8 h-   bg-yellow-50 shadow-md mt-8 rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-900 text-center mb-4">
        🦜 Birds You Might Spot
      </h2>

      <Slide slidesToShow={slidesToShow} slidesToScroll={1} autoplay={true} indicators={true} duration={3000}>
        {birds.map((bird, index) => (
          <div key={index} className="text-center p-2">
            <div className={`w-full ${imageHeight} flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden`}>
              <img src={bird.src} alt={bird.name} className="w-full h-full object-cover" />
            </div>
            <p className="mt-2 text-gray-700 font-medium">{bird.name}</p>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default BirdSlideshow;
