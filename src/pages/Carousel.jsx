import React, { useEffect, useState } from "react";

import phoneFrame from "../assets/screenshot-frame.png";
import image1 from "../assets/screenshot-1.png";
import image2 from "../assets/screenshot-2.png";
import image3 from "../assets/screenshot-3.png";
import image4 from "../assets/screenshot-4.png";
import image5 from "../assets/screenshot-5.png";

const images = [image1, image2, image3, image4, image5];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-72 h-[36rem] mx-auto">
      <img
        src={phoneFrame}
        alt="Phone Frame"
        className="absolute w-full h-full top-0 left-0 z-10 pointer-events-none"
      />
      <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
      <div className="absolute flex justify-center w-full bottom-4 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
