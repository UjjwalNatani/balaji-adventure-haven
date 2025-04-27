
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample gallery images - in a real app, these would come from an API or CMS
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Swimming Pool",
      category: "pool"
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      alt: "Marriage Garden",
      category: "garden"
    },
    {
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      alt: "Rural Huts",
      category: "huts"
    },
    {
      src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86",
      alt: "Park Area",
      category: "park"
    },
    {
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      alt: "Commando Activities",
      category: "activities"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "Open Kitchen",
      category: "kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
      alt: "Clay Arts",
      category: "arts"
    },
    {
      src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      alt: "Nature View",
      category: "nature"
    },
    {
      src: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      alt: "Camp Overview",
      category: "overview"
    },
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              onClick={() => openLightbox(image.src)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full object-contain max-h-[80vh]"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
