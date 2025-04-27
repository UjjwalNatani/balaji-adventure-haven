
import React from "react";
import Hero from "../components/Hero";
import HighlightsSection from "../components/HighlightsSection";
import AboutSection from "../components/AboutSection";
import FeaturedGallery from "../components/FeaturedGallery";
import ContactBanner from "../components/ContactBanner";

const Home = () => {
  return (
    <div>
      <Hero />
      <HighlightsSection />
      <AboutSection />
      <FeaturedGallery />
      <ContactBanner />
    </div>
  );
};

export default Home;
