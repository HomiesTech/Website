import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/HomiesLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./VideoSection.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClass =
    "cursor-pointer hover:text-blue-600 hover:bg-white  px-3 py-2 rounded-md text-md font-medium transition-transform transform hover:scale-110 duration-500 ease-in-out";

  const activeClass = "animate-spin border-b-4 border-white text-sky-500";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setNavbarBg("bg-sky-500");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-20 overflow-hidden transition-all duration-300 ease-in-out ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 font-poppins">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <MenuIcon />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <img className="h-[2rem] w-auto" src={logo} alt="HomiesTech" />
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:justify-center">
              <div className="flex space-x-4">
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className={`${linkClass} text-white`}
                  activeClass={activeClass}
                  spy={true}
                >
                  Home
                </ScrollLink>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className={`${linkClass} text-white`}
                  activeClass={activeClass}
                  spy={true}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={500}
                  className={`${linkClass} text-white`}
                  activeClass={activeClass}
                  spy={true}
                >
                  Features
                </ScrollLink>
                <ScrollLink
                  to="pricing"
                  smooth={true}
                  duration={500}
                  className={`${linkClass} text-white`}
                  activeClass={activeClass}
                  spy={true}
                >
                  Pricing
                </ScrollLink>
                <ScrollLink
                  to="career"
                  smooth={true}
                  duration={500}
                  className={`${linkClass} text-white`}
                  spy={true}
                >
                  Career
                </ScrollLink>
                <ScrollLink
                  to="faq"
                  smooth={true}
                  duration={500}
                  className={`${linkClass} text-white`}
                  activeClass={activeClass}
                  spy={true}
                >
                  FAQ
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`${linkClass} text-white`}
                  activeClass={activeClass}
                  spy={true}
                >
                  Contact
                </ScrollLink>
              </div>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <ScrollLink
                to="download"
                smooth={true}
                duration={500}
                className={`${linkClass} bg-white shadow-md shadow-white text-sky-500 heartbeat transition-transform transform hover:scale-110 duration-500 ease-in-out`}
                activeClass={activeClass}
                spy={true}
              >
                Download App
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className={`${linkClass} text-blue-700 hover:bg-blue-700 block`}
            activeClass={activeClass}
            spy={true}
            onClick={toggleMenu}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={`${linkClass} block`}
            activeClass={activeClass}
            spy={true}
            onClick={toggleMenu}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className={`${linkClass} block`}
            activeClass={activeClass}
            spy={true}
            onClick={toggleMenu}
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="pricing"
            smooth={true}
            duration={500}
            className={`${linkClass} block`}
            activeClass={activeClass}
            spy={true}
            onClick={toggleMenu}
          >
            Pricing
          </ScrollLink>
          <ScrollLink
            to="faq"
            smooth={true}
            duration={500}
            className={`${linkClass} block`}
            activeClass={activeClass}
            spy={true}
            onClick={toggleMenu}
          >
            FAQ
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={`${linkClass} block`}
            activeClass={activeClass}
            spy={true}
            onClick={toggleMenu}
          >
            Contact
          </ScrollLink>
          <ScrollLink
            to="download"
            smooth={true}
            duration={500}
            className={`${linkClass} block`}
            activeClass={activeClass}
            spy={true}
            onClick={toggleMenu}
          >
            Download App
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}
