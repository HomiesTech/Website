import React, { useState } from "react";
import logo from "../assets/homies-logo.svg";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img className="h-8 w-auto" src={logo} alt="HomiesTech" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="text-purple-700 hover:text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium "
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-gray-900 hover:text-white hover:bg-purple-700  px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="/features"
                  className="text-gray-900 hover:text-white hover:bg-purple-700  px-3 py-2 rounded-md text-sm font-medium"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-white hover:bg-purple-700  px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-white hover:bg-purple-700  px-3 py-2 rounded-md text-sm font-medium"
                >
                  Testimonials
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-white hover:bg-purple-700  px-3 py-2 rounded-md text-sm font-medium"
                >
                  FAQ
                </a>
                <a
                  href="#"
                  className="text-gray-900 hover:text-white hover:bg-purple-700  px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle className hidden */}
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-purple-700 hover:text-white hover:bg-purple-700  block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-white hover:bg-purple-700  block px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-white hover:bg-purple-700  block px-3 py-2 rounded-md text-base font-medium"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-white hover:bg-purple-700  block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-white hover:bg-purple-700  block px-3 py-2 rounded-md text-base font-medium"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-white hover:bg-purple-700  block px-3 py-2 rounded-md text-base font-medium"
          >
            FAQ
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-white hover:bg-purple-700  block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
