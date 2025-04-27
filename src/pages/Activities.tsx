
import React from "react";
import { Helmet } from "react-helmet";

const ActivityCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover-grow">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-dark">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const Activities = () => {
  const activities = [
    {
      title: "Swimming Pool",
      description: "Our well-maintained swimming pool offers a refreshing experience for both adults and children, with trained lifeguards on duty for safety.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb"
    },
    {
      title: "Monkey Way",
      description: "Challenge yourself with our unique rope course that tests your balance and agility while having fun navigating through various obstacles.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      title: "Commando Assault Course",
      description: "Experience military-style training with our commando assault course, featuring crawling tunnels, climbing walls, and balance beams.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    },
    {
      title: "Rural Village Experience",
      description: "Experience traditional village life with activities like pottery making, milking cows, and learning about organic farming methods.",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
    },
    {
      title: "Clay Art Workshop",
      description: "Get creative with our clay art workshop where you can make your own pottery and clay sculptures under expert guidance.",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a"
    },
    {
      title: "Open Kitchen Experience",
      description: "Learn to cook traditional Rajasthani dishes using freshly harvested produce from our organic farm in our spacious open kitchen.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    }
  ];

  return (
    <div className="pt-16">
      <Helmet>
        <title>Activities | Shri Balaji Agriculture Camp</title>
      </Helmet>
      
      {/* Hero Section */}
      <div className="bg-forest py-24 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Activities & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover exciting adventures and experiences at our camp
          </p>
        </div>
      </div>
      
      {/* Activities Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard 
              key={index}
              title={activity.title}
              description={activity.description}
              image={activity.image}
            />
          ))}
        </div>
        
        {/* Event Hosting */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-dark">Event Hosting</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
              alt="Event Hosting"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-forest">Perfect Venue for Your Events</h3>
              <p className="text-gray-700 mb-6">
                Shri Balaji Agriculture Camp provides the perfect backdrop for a variety of events. Our spacious marriage garden, 
                diverse facilities, and natural setting make us ideal for:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-sage bg-opacity-30 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700"><strong className="text-dark">Wedding Celebrations:</strong> Beautiful outdoor and indoor spaces for ceremonies and receptions.</span>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-sage bg-opacity-30 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700"><strong className="text-dark">Corporate Retreats:</strong> Team-building activities and meeting facilities with a refreshing environment.</span>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-sage bg-opacity-30 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700"><strong className="text-dark">School Trips:</strong> Educational tours with adventure activities and learning experiences for students.</span>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-sage bg-opacity-30 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700"><strong className="text-dark">Birthday Parties:</strong> Unique celebrations with activities for all age groups.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
