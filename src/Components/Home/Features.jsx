import React, { useEffect, useState } from 'react';
import { FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaHandshake, FaBell, FaSearch } from 'react-icons/fa';

const Features = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Community Building",
      description: "Connect with like-minded individuals and build meaningful relationships through shared social causes."
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      title: "Event Management",
      description: "Create, join, and manage community events with our intuitive event management system."
    },
    {
      icon: <FaMapMarkerAlt className="w-8 h-8" />,
      title: "Local Impact",
      description: "Make a difference in your neighborhood with targeted local events and initiatives."
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Collaborative Projects",
      description: "Join forces with others to tackle bigger community challenges and create lasting impact."
    },
    {
      icon: <FaBell className="w-8 h-8" />,
      title: " Seamless Updates",
      description: "Always stay in the loop with automatic updates on events, new projects, and community activities that matter to you"
    },
    {
      icon: <FaSearch className="w-8 h-8" />,
      title: "Easy Discovery",
      description: "Find relevant events and causes that match your interests and location."
    }
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2
              data-aos="fade-right"
              className="text-4xl lg:text-5xl font-bold mb-4 text-primary"
            >
              Empowering Community Features
            </h2>
            <p
              data-aos="fade-left"
              data-aos-delay="100"
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Discover how our platform's <span>features</span> makes it easy to create positive change in your community.
              Join us in building a better tomorrow, one event at a time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-base">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 