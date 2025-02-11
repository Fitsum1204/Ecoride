import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // Ensure slideshow styles load

// Import images
import image1 from "../assets/guidePictures/Michael1.jpeg";
import image2 from "../assets/guidePictures/Michael2.jpeg";
import image3 from "../assets/guidePictures/Michael3.jpeg";
import image4 from "../assets/guidePictures/Client1.jpeg";
import image5 from "../assets/guidePictures/client2.jpeg";

const Slideshow = () => {
  const slideImages = [
    { caption: "Guider Michel", image: image1 },
    { caption: "Michel", image: image2 },
    { caption: "Family", image: image3 },
    { caption: "Family2", image: image4 },
    { caption: "Family3", image: image5 },
  ];

  return (
    <div className="pt-5 pr-5 flex justify-center items-center">
      <div className="w-full max-w-3xl">
        <Slide autoplay transitionDuration={300} arrows indicators>
          {slideImages.map((slide, index) => (
            <div key={index} className="flex justify-center items-center h-96 w-full">
              <div
                className="h-96 w-full bg-cover bg-center flex justify-center items-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* <h2 className="text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">{slide.caption}</h2> */}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Slideshow;
