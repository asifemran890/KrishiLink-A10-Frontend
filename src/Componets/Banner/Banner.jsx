import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://www.1stfruits.co.za/wp/wp-content/uploads/2022/09/HomeSlide001.jpg",
      title: "Apple fruit. ",

      description: "An apple is the round, edible fruit of an apple tree. ",
      cta: "Get Started",
      link: "/register",
    },
    {
      id: 2,
      image: "https://wallpapercave.com/wp/wp2758579.jpg",
      title: " Fruit Trees",
      description: "Fruits are the means by which flowering plants .",
      cta: "Add Your Crop",
      link: "/AddCrops",
    },
    {
      id: 3,
      image:
        "https://www.epicgardening.com/wp-content/uploads/2025/01/Close-up-lychee-trees-1536x864.jpg",
      title: "Discover Quality Produce",
      description: "Browse fresh crops from verified farmers.",
      cta: "Browse Crops",
      link: "/AllCrops",
    },
    {
      id: 4,
      image:
        "https://www.naplesgarden.org/wp-content/uploads/2023/07/mango-1.jpg",
      title: "Grow Together",
      description: "Access expert farming advice, weather updates.",
      cta: "Learn More",
      link: "/AllCrops",
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[800px] md:h-[600px] lg:h-[600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 "></div>
              </div>

              {/* <div className="relative h-full flex items-center justify-center px-4">
                <div className="max-w-4xl  mx-auto text-center text-white">
                  <h1 className="text-4xl text-red-500 md:text-5xl lg:text-6xl font-bold  animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-delay">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.link}
                    className="btn  btn-lg gap-2 bg-[#04AA6D] hover:bg-cyan-300"
                  >
                    {slide.cta}
                    <svg
                      className="w-5 h-5 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .hero-swiper {
          --swiper-navigation-size: 44px;
          --swiper-navigation-color: #fff;
          --swiper-pagination-color: #10b981;
          --swiper-pagination-bullet-inactive-color: #fff;
          --swiper-pagination-bullet-inactive-opacity: 0.5;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.3s forwards;
        }

        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.6s forwards;
        }
      `}</style>
    </div>
  );
};

export default Banner;
