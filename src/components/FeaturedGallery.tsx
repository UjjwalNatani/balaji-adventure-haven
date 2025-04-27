
import React from "react";
import { Link } from "react-router-dom";

const FeaturedGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      alt: "Swimming Pool"
    },
    {
      src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      alt: "Park Area"
    },
    {
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      alt: "Rural Huts"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "Adventure Activities"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
          Featured Photos
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover-grow">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-block bg-forest hover:bg-opacity-90 text-white px-6 py-3 rounded-md font-medium hover-grow"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
