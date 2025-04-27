
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
              alt="Shri Balaji Agriculture Camp"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-dark">About Shri Balaji Agriculture Camp</h2>
            <p className="text-gray-700 mb-6">
              Nestled in the serene village of Singod, Shri Balaji Agriculture Camp is a unique rural tourism destination 
              that combines the tranquility of nature with exciting adventure activities. Our camp offers a perfect getaway 
              from city life, allowing visitors to reconnect with nature and experience rural Rajasthan.
            </p>
            <p className="text-gray-700 mb-8">
              Whether you're planning a family outing, a school trip, a corporate retreat, or a wedding celebration, our 
              versatile facilities cater to all your needs while ensuring a memorable experience in a natural setting.
            </p>
            
            <Link
              to="/about"
              className="inline-block bg-forest hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium hover-grow"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
