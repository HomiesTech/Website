import React from "react";
import "tw-elements";
import sliderImg from "../assets/homies-logo.svg";

const Home = () => {
  return (
    <section className="h-[33rem] md:h-[33rem] slider_section relative bg-gradient-to-r from-white to-white">
      <div className="container mx-auto p-4 md:p-20">
        <div className="flex flex-wrap">
          <div className="w-full md:w-7/12 mb-8 md:mb-0">
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
          <div className="w-full md:w-5/12">
            <div
              id="carouselExampleIndicators"
              className="relative carousel slide"
              data-te-ride="carousel"
            >
              <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                  <div className="img-box">
                    <img
                      src={sliderImg}
                      alt="slider"
                      className="block w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
