import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <footer className="text-white w-full bg-blue-600 mt-[16rem] ">
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-row justify-between items-start">
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-xl font-bold mb-2 text-black">
              Connect With Us
            </h2>

            <div className="flex flex-col ">
              <a
                href="https://github.com/prajaktakap00r"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white  p-3  hover:shadow-pink-200 transition duration-300"
              >
                <InstagramIcon /> Instagram
              </a>
              <a
                href="mailto:kprajakta235@gmail.com"
                className="text-white p-3 hover:shadow-pink-200 transition duration-300"
              >
                <GitHubIcon /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/prajaktakapoor/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 hover:shadow-pink-200 transition duration-300"
              >
                <LinkedInIcon /> LinkedIn
              </a>
              <a
                href="https://twitter.com/Ailurophile237"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white p-3 hover:shadow-pink-200 transition duration-300"
              >
                <XIcon /> Twitter
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-xl font-bold mb-2 text-black">Quick Links</h2>
            <ul>
              <li className="mb-2 p-2">
                <a href="home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li className="mb-2 p-2">
                <a href="about" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li className="mb-2 p-2">
                <a href="features" className="hover:text-gray-300">
                  Features
                </a>
              </li>
              <li className="mb-2 p-2">
                <a href="contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold mb-2 text-black">Address</h2>
            <p className="text-white mb-4 flex items-center">
              <HomeIcon className="mr-2 m-2" />
              SCO 106,1st Floor, Hermitage Office, Dhakoli-140603
            </p>
            <p className="text-white mb-4 flex items-center">
              <EmailIcon className="mr-2 m-2" />
              Homenetics_Official@homenetics.in
            </p>
            <p className="text-white mb-4 flex items-center">
              <PhoneIcon className="mr-2 m-2" />
              9518499946
            </p>
          </div>
        </div>
        <div className="text-center text-black text-sm mt-8">
          &copy; 2024 Homenetics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
