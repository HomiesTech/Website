import React from "react";
import Carousel from "./Carousel";
import HeroImage from "../assets/bg-img.png";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen md:h-[50rem] relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-10"
        style={{
          backgroundImage: `url('${HeroImage}')`,
          filter: "blur(10px)",
        }}
      ></div>

      <div className="w-full md:w-1/2 bg-transparent p-6 md:p-20 flex items-center justify-center z-10">
        <div className="detail-box text-center md:text-left text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10 md:mt-0 font-glory">
            <span className="animate-spin">Welcome </span>
            To Homenetics!
          </h2>
          <p className="text-lg md:text-2xl mt-4 leading-relaxed">
            Your Smart Home Journey Begins Here
          </p>
          <div className="mt-6">
            <a
              href="#features"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full md:w-1/2 bg-transparent p-8 md:p-10 lg:p-20 flex items-center justify-center">
        <div className="relative mt-8 pt-[4rem] md:mt-0">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Home;
