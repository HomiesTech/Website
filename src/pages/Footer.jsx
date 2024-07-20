import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="text-white w-full bg-blue-500 mt-[16rem] shadow-lg shadow-blue-800">
      <div className="container mx-auto py-16 px-4 md:px-8 font-poppins">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 lg:mb-0 ">
            <h2 className="text-xl font-bold mb-2 text-white ">
              Connect With Us
            </h2>
            <div className="flex flex-col">
              <a
                href="https://github.com/homiestech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black p-3 hover:shadow-pink-200 transition duration-300 hover:text-white"
              >
                <InstagramIcon /> Instagram
              </a>
              <a
                href="mailto:Homenetics_Official@homenetics.in"
                className="text-black p-3 hover:shadow-pink-200 transition duration-300 hover:text-white"
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/homiesTech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black p-3 hover:shadow-pink-200 transition duration-300 hover:text-white"
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                href="https://twitter.com/homiesTech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black p-3 hover:shadow-pink-200 transition duration-300 hover:text-white"
              >
                <XIcon /> Twitter
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-xl font-bold mb-2 text-white ">Quick Links</h2>
            <ul>
              <li className="mb-2 p-2">
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-black hover:underline hover:text-white"
                  spy={true}
                >
                  Home
                </ScrollLink>
              </li>
              <li className="mb-2 p-2">
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-black hover:underline hover:text-white"
                  spy={true}
                >
                  About
                </ScrollLink>
              </li>
              <li className="mb-2 p-2">
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={500}
                  className="text-black hover:underline hover:text-white"
                  spy={true}
                >
                  Features
                </ScrollLink>
              </li>
              <li className="mb-2 p-2">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-black hover:underline hover:text-white"
                  spy={true}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold mb-2 text-white ">Address</h2>
            <p className="text-black mb-4 flex items-center">
              <HomeIcon className="mr-2 m-2" />
              SCO 106,1st Floor, Hermitage Office, Dhakoli-140603
            </p>
            <p className="text-black mb-4 flex items-center">
              <EmailIcon className="mr-2 m-2" />
              Homenetics_Official@homenetics.in
            </p>
            <p className="text-black mb-4 flex items-center">
              <PhoneIcon className="mr-2 m-2" />
              9518499946
            </p>
          </div>
        </div>
        <div className="text-center text-blue-100 text-sm mt-8">
          &copy; 2024 Homenetics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
