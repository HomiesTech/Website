import React from "react";
import { Router, Routes, Route } from "react-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import bgImage from "./assets/bgvideo.jpg";
import VideoSection from "./pages/VideoSection";
import Pricing from "./pages/Pricing";
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
      <Home />
      <About />
      <VideoSection />
      <Features />
      <Pricing />
    </div>
  );
}

export default App;
