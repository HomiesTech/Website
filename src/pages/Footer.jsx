import React from "react";
import bg from "../assets/wave.svg";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
const Footer = () => {
  return (
    <footer
      className="text-white py-10 w-full  pt-[15rem]"
      style={{
        backgroundImage: `url('${bg}')`,
        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="container mx-auto px-6 relative z-10 py-13">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-2 text-black">About Us</h2>
            <p className="text-white w-40">
              We are a company dedicated to providing the best service in the
              industry. Contact us for more information. ABC
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-2 text-black">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-2 text-black">Address</h2>
            <p className="text-white mb-4">
              <HomeIcon />
              123 Street Name, City, State, 12345
            </p>
            <p className="text-white mb-4">
              <EmailIcon /> Email: info@example.com
            </p>
            <p className="text-white mb-4">
              <PhoneIcon /> Phone: (123) 456-7890
            </p>
            <div className="flex">
              <a href="#" className="text-white hover:text-gray-300 mr-4">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300 mr-4">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-black text-sm mt-8">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
