import React from "react";
import "tw-elements";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-white p-6 md:p-20 flex items-center justify-center">
        <div className="detail-box text-center md:text-left">
          <h2 className="text-2xl font-poppins md:text-2xl lg:text-4xl font-bold text-blue-600 mt-10 md:mt-0">
            Welcome to Homenetics!
          </h2>
          <h1 className="text-xl md:text-xl font-poppins lg:text-md font-bold text-gray-900 mt-4 md:mt-6 text-justify">
            we transform your home into a smart haven of convenience and
            efficiency. Our Mission is to bring, the future of home automation
            to every household making cutting-edge technology accessible and
            easy to use for everyone.
          </h1>

          <h1 className="text-xl md:text-xl font-poppins lg:text-md font-bold  text-gray-900 mt-4 md:mt-6 text-justify">
            We want to make every home smart with our device which can be
            affordable for anyone and everyone from a lower class to upper
            class. You can make your house smart with homenetics.
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
