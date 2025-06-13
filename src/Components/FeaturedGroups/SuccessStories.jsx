import React from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChartLine,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SuccessStories = () => {
  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
    AOS.refresh();
  }, []);
  const testimonials = [
    {
      name: "Mahbububa Nasrin",
      role: "Student, Jagannath University",
      image:
        "https://i.postimg.cc/4dX0z11n/03004d03-2602-43ba-9c7b-742c1af5120e.png",
      quote:
        "Eventment's helped me join a tech workshop and host a poetry event easily!",
      rating: 5,
    },
    {
      name: "Md. Rashedul Islam",
      role: "Student, BRAC University",
      image: "https://i.postimg.cc/K8tD9nZk/image-9.jpg",
      quote:
        "Found a photography event on Eventment, reserved a spot, and man I loved the local Bangaldeshi vibes it gave!",
      rating: 5,
    },
    {
      name: "Sohan Rahman",
      role: "Student, North South University",
      image:
        "https://i.postimg.cc/Zn9r6N7q/2d76a4ca-2339-4d25-a241-b9f64961fa8b.png",
      quote:
        "Eventment's let me and my batchmates join an art event and host a career talk from NSU!",
      rating: 5,
    },
  ];

  const metrics = [
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      value: "50,000+",
      label: "Event Attendees",
    },
    {
      icon: <FaChartLine className="text-4xl text-primary" />,
      value: "95%",
      label: "Client Satisfaction",
    },
    {
      icon: <FaGlobe className="text-4xl text-primary" />,
      value: "200+",
      label: "Events Organized",
    },
  ];

  return (
    <section className="mt-7 py-16">
      {/* <DynamicPageTitle title="Success Stories" /> */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-right"
            data-aos-delay="100"
            className="text-4xl lg:text-5xl font-bold mb-4 text-primary"
          >
            Success Stories
          </h2>
          <p  data-aos="fade-left" data-aos-delay="100" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our users have to say
            about their experience with Eventment.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-[#F3EDDC] rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{metric.icon}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {metric.value}
              </h3>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F3EDDC] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <FaQuoteLeft className="text-primary opacity-20 text-4xl mb-2" />
                <p className="text-gray-700 italic">{testimonial.quote}</p>
              </div>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
