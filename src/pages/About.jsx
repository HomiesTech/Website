import React from "react";
import { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const About = () => {
  const [Visible, setVisible] = useState(false);

  function handleContent() {
    setVisible(!Visible);
  }

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto pt-20 mt-16 md:mt-20 md:pt-28 px-4 md:px-8">
        <h1 className="text-3xl text-black text-center font-bold uppercase font-poppins">
          ABOUT
        </h1>
        <hr className="border-blue-600 border-2 w-32 mx-auto mt-2 mb-6" />
        <div className="text-center mx-auto text-gray-500 font-poppins">
          <p>
            Homenetics pioneers accessible smart home solutions, seamlessly
            integrating IoT to elevate convenience and efficiency in every
            household. Upgrade your home effortlessly with our advanced
            technology, transforming existing appliances into intelligent assets
            controlled through a simple mobile app.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center pt-12 md:pt-16 px-4 md:px-1 font-poppins">
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8 bg-blue-100 p-2 rounded-md">
          <div className="flex text-white items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700 h-32 w-32">
            <CurrencyRupeeIcon style={{ fontSize: 60 }} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 mt-4">
            Affordable
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">
            Democratize smart home technology, offering affordable solutions
            accessible to all socioeconomic classes.
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8 bg-blue-100 p-2 rounded-md">
          <div className="flex text-white items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700 h-32 w-32">
            <VerifiedUserIcon style={{ fontSize: 60 }} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 mt-4">
            Reliable
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">
            Our devices are built on reliability, ensuring consistent
            performance and peace of mind for users.
          </p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3 px-4 mb-8 bg-blue-100 p-2 rounded-md">
          <div className="flex text-white items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-700 h-32 w-32">
            <AccessibilityIcon style={{ fontSize: 60 }} />
          </div>
          <h3 className="text-black text-center font-bold text-xl p-2 mt-4">
            Accessible
          </h3>
          <p className="text-center text-gray-500 p-2 m-2">
            Experience effortless integration and control with our accessible
            platform, making home automation simple and user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
