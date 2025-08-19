import React from "react";
import { motion } from "framer-motion"; // ✅ correct import
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div
        id="hero"
        className="hero flex flex-col items-center justify-center h-[100vh] md:flex-row"
      >
        <div className="left bg-amber-300 h-[80vh] w-[30vw] m-3"></div>
        <div className="center bg-cyan-300 h-[80vh] w-[30vw] m-3"></div>
        <div className="right bg-teal-300 h-[80vh] w-[30vw] m-3"></div>
      </div>
      <div id="projects" className="projects bg-green-300 h-[100vh]"></div>
      <div id="contact" className="contact bg-purple-300 h-[100vh]"></div>
    </div>
  );
};

export default Home;
