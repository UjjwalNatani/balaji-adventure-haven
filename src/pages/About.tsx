
import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>About Us | Shri Balaji Agriculture Camp</title>
      </Helmet>
      
      {/* Hero Section */}
      <div className="bg-forest py-24 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the story of Shri Balaji Agriculture Camp and our passion for connecting people with nature.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-dark">Our Story</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                Founded with a vision to create a unique rural tourism destination, Shri Balaji Agriculture Camp started as a small 
                family-owned farm in the serene village of Singod, near Jaipur. Over the years, we transformed this natural 
                space into a versatile destination that combines agricultural experiences with adventure activities and event hosting.
              </p>
              <p>
                Our camp is designed to provide a refreshing escape from urban life, allowing visitors to reconnect with nature, 
                learn about traditional farming, and enjoy outdoor activities in a safe and welcoming environment.
              </p>
              <p>
                What sets us apart is our commitment to preserving the natural beauty of the area while offering modern amenities 
                and facilities. Our team consists of local community members who bring authentic knowledge and hospitality to every guest interaction.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <img
              src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
              alt="Shri Balaji Agriculture Camp"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        {/* Vision and Mission */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-dark">Our Vision & Mission</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sage bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-forest">Vision</h3>
              <p className="text-gray-700">
                To be the premier rural tourism and adventure destination in Rajasthan, offering authentic experiences 
                that celebrate the region's natural beauty and cultural heritage while promoting sustainable tourism practices.
              </p>
            </div>
            
            <div className="bg-sage bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-forest">Mission</h3>
              <p className="text-gray-700">
                Our mission is to provide memorable experiences that connect people with nature, promote environmental awareness, 
                support local communities, and create a space where celebrations and events can be hosted in harmony with nature.
              </p>
            </div>
          </div>
        </div>
        
        {/* Photo Collage */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-dark">Our Camp In Pictures</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
              alt="Camp View 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
              alt="Camp View 2"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
              alt="Camp View 3"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
              alt="Camp View 4"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
