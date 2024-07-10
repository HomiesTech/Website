import React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SupportIcon from "@mui/icons-material/Support";
import BoltIcon from "@mui/icons-material/Bolt";

const About = () => {
  return (
    <section style={{ background: "white" }}>
      <div className="mx-auto align-middle justify-center pt-16 md:mt-16 md:pt-16 px-4 md:px-0">
        <h1 className="text-3xl text-black text-center font-bold uppercase font-glory ">
          ABOUT
        </h1>
        <hr className="border-blue-600 border-2 w-32 mx-auto mt-2 mb-6"></hr>
        <div className="text-center mx-auto max-w-2xl text-gray-500 font-poppins">
          <p>
            Sed quis nisi nisi. Proin consectetur porttitor dui sit amet
            viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra
            ante.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mx-auto pt-12 md:pt-16 px-4 md:px-0 font-poppins ">
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8">
          <div className="flex text-white items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700 h-[10rem] w-[10rem]">
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
          <div className="flex text-white items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700 h-[10rem] w-[10rem]">
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
          <div className="flex text-white items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700 h-[10rem] w-[10rem]">
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
        <button className="border-2 font-glory text-xl font-bold px-8 py-2 border-blue-600 text-black text-center rounded-md">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
