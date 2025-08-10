import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const images = [
    {
      id: 1,
      src: 'https://i.postimg.cc/c4ySYmjV/image-4.jpg',
      alt: 'Tech Festival',
      category: 'Technology'
    },
    {
      id: 2,
      src: 'https://i.postimg.cc/KY4VCkwP/image-6.jpg',
      alt: 'Art Exhibition',
      category: 'Arts'
    },
    {
      id: 3,
      src: 'https://tds-images.thedailystar.net/sites/default/files/styles/very_big_1/public/images/2023/10/21/cholo_bangladesh_tds_ae_shahbaz_4.jpg',
      alt: 'Music Concert',
      category: 'Music'
    },
    {
      id: 4,
      src: 'https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2022/12/26/bangladeshi-cuisines.jpg',
      alt: 'Food Festival',
      category: 'Food'
    },
    {
      id: 5,
      src: 'https://media.gettyimages.com/id/91847637/photo/mentally-challenged-bangladeshi-men-participate-in-special-olympics-football-try-outs-in-dhaka.jpg?s=612x612&w=gi&k=20&c=MsjCQJpp0EHVvMLcHQkE4JQCwwwvOnzBSyAhgMgiqZ4=',
      alt: 'Sports Event',
      category: 'Sports'
    },
    {
      id: 6,
      src: 'https://media.gettyimages.com/id/1239935090/photo/rangamati-bangladesh-local-girls-are-seen-with-traditional-clothes-and-flowers-during-the.jpg?s=612x612&w=0&k=20&c=kXD8iWHuGajs_rowZQJnSJIh_Wlp6UbON7Pyb6K-jkE=',
      alt: 'Cultural Festival',
      category: 'Culture'
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
              Community Impact Gallery
            </h2>
            <p
              data-aos="fade-left"
              data-aos-delay="100"
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Witness the power of collective action! Explore our gallery showcasing impactful community events, 
              from environmental cleanups to educational workshops, each image capturing moments of positive change 
              and community engagement.
            </p>
          </div>
        </div>
      
        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 group-hover:scale-105">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-[450px] h-[200px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{image.alt}</h3>
                    <span className="inline-block px-3 py-1 bg-primary/80 text-white text-sm rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <div
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.alt}</h3>
                <span className="inline-block px-4 py-2 bg-primary/80 text-white text-sm rounded-full">
                  {selectedImage.category}
                </span>
              </div>

              {/* Close button */}
              <button
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;