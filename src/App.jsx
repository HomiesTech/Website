import React from "react";
import { Router, Routes, Route } from "react-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import bgImage from "./assets/bgvideo.jpg";
import VideoSection from "./pages/VideoSection";
function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        //backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/04/75/87/40/1000_F_475874092_QXxkJdu8ZrxJibYs7K5JnDU3YDf6OP0o.jpg)`,
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
