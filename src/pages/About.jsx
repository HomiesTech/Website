import React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SupportIcon from "@mui/icons-material/Support";
import BoltIcon from "@mui/icons-material/Bolt";
import VideoSection from "./VideoSection";

const About = () => {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto align-middle justify-center pt-12 md:pt-16 px-4 md:px-0">
        <h1 className="text-3xl text-black text-center font-bold uppercase">
          ABOUT
        </h1>
        <hr className="border-purple-700 border-2 w-32 mx-auto mt-2 mb-6"></hr>
        <div className="text-center mx-auto max-w-2xl text-gray-500">
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-auto pt-12 md:pt-16 px-4 md:px-0 ">
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8">
          <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-100 to-purple-700 h-[10rem] w-[10rem]">
            <SupportIcon style={{ fontSize: 60 }} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 m-2">
            Support
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">
            Phasellus lobortis justo a magna facilisis, in commodo tellus
            rutrum. Sed vitae condimentum nulla.
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8">
          <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-100 to-purple-700 h-[10rem] w-[10rem]">
            <PhoneAndroidIcon style={{ fontSize: 60 }} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 m-2">
            Cross-Platform
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">
            Phasellus lobortis justo a magna facilisis, in commodo tellus
            rutrum. Sed vitae condimentum nulla.
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8">
          <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-purple-100 to-purple-700 h-[10rem] w-[10rem]">
            <BoltIcon style={{ fontSize: 60 }} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 m-2">
            Fast
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">
            Phasellus lobortis justo a magna facilisis, in commodo tellus
            rutrum. Sed vitae condimentum nulla.
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-12 md:pt-16 p-10">
        <button className="border-2 px-8 py-2 border-purple-700 text-black text-center rounded-md">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
