import React from "react";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
const About = () => {
  return (
    <section style={{ background: "white" }}>
      <div className="max-w-6xl mx-auto pt-[17rem] mt-20 md:mt-16 md:pt-16 px-4 md:px-8">
        <h1 className="text-3xl text-black text-center font-bold uppercase font-poppins">
          ABOUT
        </h1>
        <hr className="border-blue-600 border-2 w-32 mx-auto mt-2 mb-6"></hr>
        <div className="text-center mx-auto text-gray-500 font-poppins">
          <p className="text-justify">
            At Homenetics, we specialize in converting ordinary homes into smart
            homes through innovative IOT solutions. Our advanced system
            seamlessly integrates with yourAt Homenetics, we specialize in
            converting ordinary homes into smart homes through innovative IOT
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center pt-12 md:pt-16 px-4 md:px-8 font-poppins">
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8">
          <div className="flex text-white items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700 h-[8rem] w-[8rem]">
            <CurrencyRupeeIcon style={{ fontSize: 60 }} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 m-2">
            Affordable
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">
            Phasellus lobortis justo a magna facilisis, in commodo tellus
            rutrum. Sed vitae condimentum nulla.
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8">
          <div className="flex text-white items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700 h-[8rem] w-[8rem]">
            <VerifiedUserIcon style={{ fontSize: 60 }} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 m-2">
            Reliable
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">
            Phasellus lobortis justo a magna facilisis, in commodo tellus
            rutrum. Sed vitae condimentum nulla.
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8">
          <div className="flex text-white items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700 h-[8rem] w-[8rem]">
            <AccessibilityIcon style={{ fontSize: 60 }} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 m-2">
            Accessible
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">
            Phasellus lobortis justo a magna facilisis, in commodo tellus
            rutrum. Sed vitae condimentum nulla.
          </p>
        </div>
      </div>

      <div className="flex justify-center pt-12 md:pt-16 px-4 md:px-8">
        <button className="border-2 font-poppins text-xl font-bold px-8 py-2 border-blue-600 text-black text-center rounded-md">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
