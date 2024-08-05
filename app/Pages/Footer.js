"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <motion.footer
      className="text-white w-full bg-sky-500 mt-[5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto py-16 px-4 md:px-8">
        <motion.div
          className="flex flex-row justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/privacy-policy" passHref>
            <motion.a
              className="text-white p-3 hover:shadow-pink-200 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <p className="underline m-2 p-2">Privacy Policy</p>
            </motion.a>
          </Link>
          <Link href="/terms" passHref>
            <motion.a
              className="text-white p-3 hover:shadow-pink-200 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <p className="underline m-2 p-2">Terms & Conditions</p>
            </motion.a>
          </Link>
        </motion.div>
        <motion.div
          className="flex flex-row align-middle justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            href="https://www.instagram.com/homenetics_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://github.com/homiesTech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/homenetics-technology-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="mailto:Homenetics_Official@homenetics.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <EmailIcon />
          </motion.a>
          <motion.a
            href="tel:+9518499946"
            className="text-white p-3 hover:shadow-pink-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <PhoneIcon />
          </motion.a>
        </motion.div>
        <motion.div
          className="text-center text-white text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          &copy; 2024 Homenetics. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
