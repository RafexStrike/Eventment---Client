import React from "react";
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";

const SwiperTest = () => {
  const slides = [
    {
      image: "https://i.postimg.cc/c4ySYmjV/image-4.jpg",
      title: "Tech Festival",
      description: "Experience the sensation of cutting edge technology in our tech events!"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Panam_City_04.jpg/1200px-Panam_City_04.jpg",
      title: "Ancient Vibes",
      description: "Discover the magic of Old Vibes of Dhaka in a gang!"
    },
    {
      image: "https://i.postimg.cc/KY4VCkwP/image-6.jpg",
      title: "Community Gathering",
      description: "Join hands with your event-mates in Art."
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper rounded-2xl overflow-hidden shadow-2xl"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative group">
              <img
                className="w-full h-[500px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                src={slide.image}
                alt={`Slide ${i}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-2">{slide.title}</h3>
                  <p className="text-white/90 mb-4">{slide.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile Cube Effect Slider */}
      <div className="mt-8 md:hidden">
        <Swiper
          modules={[EffectCube, Pagination, Autoplay]}
          effect="cube"
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="h-[300px] rounded-2xl overflow-hidden"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt={`Slide ${i}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperTest;