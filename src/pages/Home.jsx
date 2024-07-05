import React from "react";
import "tw-elements";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <section className="flex h-screen">
      <div className="w-full md:w-1/2 bg-white p-6 md:p-20 flex items-center justify-center">
        <div className="detail-box">
          <h2 className="text-4xl md:text-6xl font-bold text-purple-700">
            Best Design
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold text-gray-900">
            Mobile Applications
          </h1>
          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:from-blue-500 hover:to-purple-700 transition duration-300"
            >
              Download Application
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-purple-700 p-6 md:p-20 flex items-center justify-center">
        <div className="relative">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Home;
