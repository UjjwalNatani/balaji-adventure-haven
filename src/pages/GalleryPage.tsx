
import React from "react";
import Gallery from "../components/Gallery";
import { Helmet } from "react-helmet";

const GalleryPage = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Gallery | Shri Balaji Agriculture Camp</title>
      </Helmet>
      
      {/* Hero Section */}
      <div className="bg-forest py-24 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take a visual tour of our camp facilities and activities
          </p>
        </div>
      </div>
      
      {/* Gallery Section */}
      <div className="container mx-auto py-16 px-4">
        <Gallery />
      </div>
    </div>
  );
};

export default GalleryPage;
