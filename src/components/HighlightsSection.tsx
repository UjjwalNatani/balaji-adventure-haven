
import React from "react";
import { Waves, TreePine, Users2, Tent, UtensilsCrossed, Landmark } from "lucide-react";

// Feature card component
const FeatureCard = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => {
  return (
    <div className="flex flex-col items-center p-4 hover-grow">
      <div className="rounded-full bg-sage bg-opacity-20 p-4 mb-4">
        <Icon className="h-8 w-8 text-forest" />
      </div>
      <h3 className="text-lg font-medium text-dark text-center">{title}</h3>
    </div>
  );
};

const HighlightsSection = () => {
  const features = [
    { icon: Waves, title: "Swimming Pool" },
    { icon: Users2, title: "Marriage Garden" },
    { icon: TreePine, title: "Park" },
    { icon: Tent, title: "Rural Huts" },
    { icon: Landmark, title: "Commando Exercises" },
    { icon: UtensilsCrossed, title: "Open Kitchen" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
          Quick Highlights
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Also featuring: Washrooms, Clay Art, Monkey Way, and Seasonal Lunch/Dinner options for a complete experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
