import React from "react";
import bg from "../assets/wave.svg";
const Footer = () => {
  return (
    <footer className="bg-white text-white py-8">
      <div className="container mx-auto px-4 pt-[4rem]">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2 text-black">About Us</h2>
            <p className="text-white">
              We are a company dedicated to providing the best service in the
              industry. Contact us for more information.ABC
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2 text-black">Quick Links</h2>
            <ul>
              <li className="mb-1">
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-2 text-black">Address</h2>
            <p className="text-white">123 Street Name, City, State, 12345</p>
            <p className="text-white">Email: info@example.com</p>
            <p className="text-white">Phone: (123) 456-7890</p>
            <div className="mt-4">
              <a href="#" className="text-white hover:text-white mr-4">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-white mr-4">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-white">
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
