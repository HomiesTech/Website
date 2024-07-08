import React from "react";
import { Router, Routes, Route } from "react-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Faq from "./pages/Faq";
import bgImage from "./assets/bgvideo.jpg";
import VideoSection from "./pages/VideoSection";
import Pricing from "./pages/Pricing";
import Testimonial from "./pages/Testimonial";
import Team from "./pages/Team";
import Footer from "./pages/Footer";
import ContactForm from "./pages/ContactForm";
import DownloadSection from "./pages/DownloadSection";
function App() {
  return (
    <div
      style={{
        //backgroundImage: `url(${bgImage})`,
        //backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/04/75/87/40/1000_F_475874092_QXxkJdu8ZrxJibYs7K5JnDU3YDf6OP0o.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        background: "white",
      }}
    >
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about" className="mt-20">
        <About />
      </section>
      <section id="features" className="mt-20">
        <Features />
      </section>
      <section id="video">
        <VideoSection />
      </section>
      <section id="pricing" className="mt-20">
        <Pricing />
      </section>
      <section id="download" className="mt-20">
        <DownloadSection />
      </section>
      <section id="faq" className="mt-20">
        <Faq />
      </section>
      <section id="contact" className="mt-20">
        <ContactForm />
      </section>
      <section id="Footer" className="mt-20">
        <Footer />
      </section>
    </div>
  );
}

export default App;
