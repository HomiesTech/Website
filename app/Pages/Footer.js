"use client";

import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter"; // Changed to TwitterIcon instead of XIcon
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="text-white w-full bg-sky-500 mt-[5rem] ">
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-row align-middle justify-center">
          <a
            href="https://www.instagram.com/homenetics_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://github.com/homiesTech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/homenetics-technology-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
          >
            <LinkedInIcon />
          </a>
          {/*  <a
            href="https://twitter.com/homiesTech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
          >
            <TwitterIcon />
          </a> */}
          <a
            href="mailto:Homenetics_Official@homenetics.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+9518499946"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
          >
            <PhoneIcon />
          </a>
        </div>
        <div className="text-center text-white text-sm mt-4">
          &copy; 2024 Homenetics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
