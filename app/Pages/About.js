"use client";

import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { aboutContent } from "../Content/about";

const About = () => {
  const icons = {
    CurrencyRupeeIcon: <CurrencyRupeeIcon style={{ fontSize: 60 }} />,
    VerifiedUserIcon: <VerifiedUserIcon style={{ fontSize: 60 }} />,
    AccessibilityIcon: <AccessibilityIcon style={{ fontSize: 60 }} />,
  };

  return (
    <section className="m-0 p-0">
      <div className="max-w-6xl mx-auto pt-20 mt-16 md:mt-20 md:pt-28 px-4 md:px-8">
        <h1 className="text-3xl text-sky-500 text-center font-bold uppercase font-poppins">
          {aboutContent.header}
        </h1>
        <hr className="border-sky-600 border-2 w-32 mx-auto mt-2 mb-6" />
        <div className="text-center text-lg mx-auto text-gray-500 font-poppins">
          <p>{aboutContent.description}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center pt-12 md:pt-16 px-4 md:px-1 font-poppins">
        {aboutContent.sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8 bg-white border-b-2 shadow-md shadow-sky-400 border-sky-400 p-4 rounded-md md:m-4 transition-transform transform hover:scale-110 duration-500 ease-in-out"
          >
            <div className="flex text-white items-center p-4 m-4 justify-center rounded-full bg-gradient-to-r from-sky-300 to-sky-600 h-32 w-32">
              {icons[section.icon]}
            </div>
            <h3 className="text-sky-400 text-center font-bold text-xl p-2 mt-4">
              {section.title}
            </h3>
            <p className="text-center text-gray-500 p-2 m-2">
              {section.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
