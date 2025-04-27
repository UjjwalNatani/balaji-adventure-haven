
import React from "react";
import { Link } from "react-router-dom";

// Using a static image for now
// In real implementation, replace with actual video
const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://player.vimeo.com/external/517088184.sd.mp4?s=2bbc8a3793c822085920ea7981521ebcc104179d&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
          Welcome to Shri Balaji Agriculture Camp
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 max-w-2xl">
          Experience Nature, Adventure, and Celebration
        </p>
        
        <Link
          to="/contact"
          className="bg-forest hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-medium text-lg hover-grow"
        >
          Plan Your Visit
        </Link>
      </div>
    </div>
  );
};

export default Hero;
