import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import AdbIcon from "@mui/icons-material/Adb";
import image1 from "../assets/screenshot-1.png";
import image2 from "../assets/screenshot-2.png";
import image3 from "../assets/screenshot-3.png";

export default function DownloadSection() {
  return (
    <div className="container mx-auto py-5">
      <div className="py-5 px-5 lg:px-20">
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-5">
          <div className="w-full lg:w-1/2">
            <div className="relative flex justify-center items-center h-screen">
              <div className="relative z-1 transform -rotate-45">
                <img
                  src={image1}
                  alt="Image 1"
                  className="w-44 h-50 rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute z-10 transform rotate-0">
                <img
                  src={image2}
                  alt="Image 2"
                  className="w-44 h-50 rounded-lg shadow-lg"
                />
              </div>
              <div className="relative z-1 transform rotate-45">
                <img
                  src={image3}
                  alt="Image 3"
                  className="w-44 h-50 rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h5 className="text-2xl text-blue-500 font-bold">Download</h5>
            <h1 className="mb-4 text-4xl font-bold">
              Download The Latest Version Of Our App
            </h1>
            <p className="mb-4">
              Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
              labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
              sit clita duo justo eirmod magna dolore erat amet
            </p>
            <div className="flex flex-row">
              <div className="mt-4 md:mt-8 p-2 m-2 ">
                <a
                  href="#"
                  className="flex items-center bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:from-blue-300 hover:to-blue-500 transition duration-300"
                >
                  <AppleIcon className="mr-2" />
                  <span>Available on App Store</span>
                </a>
              </div>
              <div className="mt-4 md:mt-8 p-2 m-2 ">
                <a
                  href="#"
                  className="flex items-center bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:from-blue-300 hover:to-blue-500 transition duration-300"
                >
                  <AdbIcon className="mr-2" />
                  <span>Available on Play Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
