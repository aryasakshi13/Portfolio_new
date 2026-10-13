import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsMarquee from "./components/StatsMarquee";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Navigation Bar */}
      <Navbar />

      <main id="top">
        {/* Hero Section */}
        <Hero />

        {/* Stats Marquee Ribbon */}
        <StatsMarquee />

        {/* Selected Works / Case Studies */}
        <Projects />

        {/* About Me & Work Timeline */}
        <About />

        {/* Skills, Expertise & Education */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
