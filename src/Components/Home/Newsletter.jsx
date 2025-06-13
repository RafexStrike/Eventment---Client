import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const elements = document.querySelectorAll("[data-aos]");
      elements.forEach((element) => {
        element.removeAttribute("data-aos-delay");
        element.removeAttribute("data-aos-duration");
        element.setAttribute("data-aos-once", "false");
      });
    }

    AOS.init({
      startEvent: "load",
      once: false,
      duration: 1000,
      offset: 50,
      delay: 0,
      mirror: true,
      anchorPlacement: "top-bottom",
      disable: false,
      useClassNames: true,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
    });

    const timer = setTimeout(() => {
      setIsLoaded(true);
      AOS.refresh();
    }, 100);

    const handleScroll = () => {
      if (isLoaded) {
        AOS.refresh();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      AOS.refresh();
    }
  }, [isLoaded]);

  return (
    <div className="mt-20">
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
            Stay Connected with Our Newsletter
          </h2>
          <p
            data-aos="fade-left"
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Subscribe to receive the latest updates on community events,
            inspiring stories, and opportunities to make a difference — delivered straight to your inbox.
          </p>
        </div>

        {/* Newsletter input box with fade-up */}
        <div data-aos="fade-up" className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
