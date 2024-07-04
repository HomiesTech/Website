import React from "react";
import { Router, Routes, Route } from "react-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Features />
    </div>
  );
}

export default App;
