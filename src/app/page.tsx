"use client";
import React from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Projects from "@/components/projects";
import ContactMe from "@/components/contactMe";

const Home = () => {
  // Scroll to hero section
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-smooth">
      <Navbar />

      <div
        id="hero"
        className="hero flex flex-col items-center justify-center h-[100vh] md:flex-row"
      >
        <div className="flex flex-col bg-amber-300 w-[100vw] md:w-[30vw] h-[50vh] md:h-[80vh] m-3 md:left-10">
          <h1>
            Kaustubh <br />Mayekar
          </h1>
          <p className="text-black m-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsam nihil reprehenderit molestias numquam ad dolorum ipsa alias
            iste quidem delectus quisquam optio, quis nostrum ex corporis
            accusantium commodi doloribus!
          </p>
          <div className="flex flex-row">
            <Button className="bg-blue-400">View Projects</Button>
            <Button>Contact Me</Button>
          </div>
        </div>
        <div className="bg-teal-300 w-[100vw] md:w-[30vw] h-[50vh] md:h-[80vh] m-3 md:right"></div>
      </div>

      <div id="projects" className="projects bg-green-300 h-[100vh]">
        <Projects />
      </div>
      <div id="contact" className="contact bg-purple-300 h-[100vh]">
        <ContactMe/>
      </div>

      {/* Floating scroll-to-top button */}
      <div className="fixed bottom-6 right-6 w-16 h-16 group">
        <Button
          onClick={scrollToHero}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-lg bg-blue-500 text-white w-12 h-12 flex items-center justify-center"
        >
          ↑
        </Button>
      </div>
    </div>
  );
};

export default Home;
