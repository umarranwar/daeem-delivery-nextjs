import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Section from "./HomepageFeatured";
import Ecommerce from "./Ecommerce";
import Footer from "./Footer";
import Services from "./Services";
function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Section />
      <Ecommerce />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
