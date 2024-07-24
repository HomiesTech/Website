import React from "react";
import Carousel from "./Carousel";
import HeroImage from "../assets/bg-img.png";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen md:h-[50rem] lg:h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${HeroImage}')`,
          filter: "blur(10px)",
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="w-full md:w-2/3 bg-transparent p-6 md:p-20 flex items-center justify-center z-10">
        <div className="detail-box text-center md:text-left text-white lg:ml-[12rem]">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mt-10 md:mt-0 uppercase">
            <span className="animate-spin text-white">Welcome </span>
            To Homenetics!
          </h2>
          <p className="text-lg md:text-3xl mt-4 leading-relaxed m-2 italic">
            -Your Smart Home Journey Begins Here
          </p>
          <div className="mt-6">
            <a
              href="#features"
              className="bg-sky-500 hover:bg-blue-700 p-2 m-2 text-xl text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/3 bg-transparent p-10 md:p-10  flex items-center justify-center">
        <div className="relative mt-8 pt-[4rem] md:mt-0 lg:mr-[15rem]">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Home;
