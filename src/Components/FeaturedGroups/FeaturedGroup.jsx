import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import GroupCard from "../Group/GroupCard";

const FeaturedGroup = () => {
  const [allGroupsFetchedFromDB, setAllGroupsFetchedFromDB] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/events/featured")
      .then((res) => res.json())
      .then((result) => {
        console.log("presenting to you only the featured groups: ", result);
        setAllGroupsFetchedFromDB(result);
      })
      .catch(error => console.log("error after calling the api", error))
  }, []);

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
    if (isLoaded && allGroupsFetchedFromDB.length > 0) {
      AOS.refresh();
    }
  }, [allGroupsFetchedFromDB, isLoaded]);
  return (
    <div className="mt-36 mb-12">
      {/* <DynamicPageTitle title="Upcoming Events" /> */}
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
            Upcoming Events
          </h2>
          <p
            data-aos="fade-left"
            data-aos-delay="100"
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover what's happening next! Join or events at inspiring,
            high-energy gatherings designed to connect, educate, and empower our
            vibrant community.
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-12"
        >
          {allGroupsFetchedFromDB.map((oneGroupData) => (
            <SwiperSlide key={oneGroupData._id}>
              <div className="flex justify-center">
                <GroupCard oneGroupData={oneGroupData} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tablet View */}
      <div className="hidden md:block lg:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-12"
        >
          {allGroupsFetchedFromDB.map((oneGroupData) => (
            <SwiperSlide key={oneGroupData._id}>
              <div className="flex justify-center">
                <GroupCard oneGroupData={oneGroupData} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="pb-12"
        >
          {allGroupsFetchedFromDB.map((oneGroupData) => (
            <SwiperSlide key={oneGroupData._id}>
              <div className="flex justify-center">
                <GroupCard oneGroupData={oneGroupData} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedGroup;
