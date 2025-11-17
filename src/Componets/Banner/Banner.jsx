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
      image: "https://westhanover.com/ImageRepository/Document?documentID=1127",
      title: "Apple fruit is very beneficial for health. ",

      description:
        "An apple is the round, edible fruit of an apple tree. Fruit trees of the orchard or domestic apple, the most widely grown in the genus, are cultivated worldwide. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found.",
      cta: "Get Started",
      link: "/register",
    },
    {
      id: 2,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/6/NV/GA/MH/108377536/fruits-500x500.jpg",
      title: "Fruits are the means by which flowering plants .",
      description:
        "Fruits are the means by which flowering plants disseminate their seeds. Edible fruits in particular .",
      cta: "Add Your Crop",
      link: "/AddCrops",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/originals/87/a0/0a/87a00a5e8d756e352d008b5cc40aedfb.jpg",
      title: "Discover Quality Produce",
      description:
        "Browse fresh crops from verified farmers. Find exactly what you need for your farm or business.",
      cta: "Browse Crops",
      link: "/AllCrops",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80",
      title: "Grow Together",
      description:
        "Access expert farming advice, weather updates, and market prices. Empowering farmers for a better tomorrow.",
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
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              <div className="relative h-full flex items-center justify-center px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
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
              </div>
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
