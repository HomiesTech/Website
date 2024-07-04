import React from "react";
import "tw-elements";
import sliderImg from "../assets/homies-logo.svg";

const Home = () => {
  return (
    <section className="slider_section relative">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-7/12">
            <div className="detail-box">
              <h2 className="text-2xl font-bold text-gray-800">best design</h2>
              <h1 className="text-4xl font-bold text-gray-900">
                Mobile <br />
                applications
              </h1>
              <div className="mt-4">
                <a
                  href="#"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Read More
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
              <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-te-target="#carouselExampleIndicators"
                  data-te-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-te-target="#carouselExampleIndicators"
                  data-te-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-te-target="#carouselExampleIndicators"
                  data-te-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
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
              <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-te-target="#carouselExampleIndicators"
                data-te-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-te-target="#carouselExampleIndicators"
                data-te-slide="next"
              >
                <span
                  className="carousel-control-next-icon inline-block bg-no-repeat"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
