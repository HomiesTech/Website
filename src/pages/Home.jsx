import React from "react";
import "tw-elements";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <section className="flex h-screen">
      <div className="w-full md:w-1/2 bg-white p-6 md:p-20 flex items-center justify-center">
        <div className="detail-box">
          <h2 className="text-4xl md:text-6xl font-bold text-blue-500">
            Best Design
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold text-gray-900">
            Mobile Applications
          </h1>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-blue-500 p-[5rem] md:p-20 flex items-center justify-center">
        <div className="relative mt-[3rem] pt-[3rem]">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Home;
