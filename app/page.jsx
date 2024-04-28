import React from "react";
import HeroSection from "./components/server/HeroSection";
import Section from "./components/Section";
import Services from "./components/Services";
import Footer from "./components/Footer";
export default function page() {
  return (
    <div>
      <HeroSection />
      <Section />
      <Services />
      <Footer />
    </div>
  );
}
