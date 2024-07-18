import React from "react";
import "tw-elements";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 bg-white p-6 md:p-20 flex items-center justify-center">
        <div className="detail-box text-center md:text-left">
          <h2 className="text-2xl font-poppins md:text-2xl lg:text-6xl font-bold text-blue-600 mt-10 md:mt-0">
            Welcome<br></br> To<br></br> Homenetics!
          </h2>
          <h1 className="text-xl md:text-3xl font-glory lg:text-md font-bold text-gray-900 mt-4 md:mt-6 text-justify">
            - Your Smart Home Journey Begins Here
          </h1>

          <h1 className="text-xl md:text-3xl font-poppins lg:text-md font-bold  text-gray-900 mt-4 md:mt-6 text-justify"></h1>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-blue-600 p-8  md:p-10 lg:p-20 flex items-center justify-center">
        <div className="relative mt-8 pt-[4rem] md:mt-0">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Home;
