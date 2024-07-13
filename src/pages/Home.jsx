import React from "react";
import "tw-elements";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-white p-6 md:p-20 flex items-center justify-center">
        <div className="detail-box text-center md:text-left">
          <h2 className="text-4xl font-poppins md:text-5xl lg:text-6xl font-bold text-blue-600 mt-10 md:mt-0">
            Best Design
          </h2>
          <h1 className="text-5xl md:text-6xl font-poppins lg:text-8xl font-bold text-gray-900 mt-4 md:mt-6">
            Mobile Applications
          </h1>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-blue-500 p-6  md:p-10 lg:p-20 flex items-center justify-center">
        <div className="relative mt-8 pt-6 md:mt-0">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Home;
