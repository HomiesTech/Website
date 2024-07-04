import React from "react";
import { Router, Routes, Route } from "react-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import bgImage from "./assets/video-bg.png";
import VideoSection from "./pages/VideoSection";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <Home />
      <About />
      <VideoSection />
      <Features />
    </div>
  );
}

export default App;
