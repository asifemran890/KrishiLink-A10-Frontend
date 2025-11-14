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
      title:
        "Fruits are the means by which flowering plants disseminate their seeds.",
      description:
        "Fruits are the means by which flowering plants disseminate their seeds. Edible fruits in particular have long propagated using the movements of humans and animals in a symbiotic relationship that is the means for seed dispersal for the one group and nutrition for the other; in fact, humans and many animals have become dependent on fruits as a source of food.",
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
                    className="btn btn-primary btn-lg gap-2 animate-fade-in-delay-2"
                  >
                    {slide.cta}
                    <svg
                      className="w-5 h-5"
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

// import React from "react";
// import BannerImg1 from "../../assets/img/img-1.jpg";
// import BannerImg2 from "../../assets/img/img-2.webp";
// import BannerImg3 from "../../assets/img/img-3.webp";
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "./styles.css";
// // import required
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { FaCommentAlt, FaStar, FaUsers } from "react-icons/fa";
// import { IoBookSharp } from "react-icons/io5";
// import { Link } from "react-router";

// // export default function Banner() {
// //   return (
// //     <div className="container mx-auto  lg:w-7xl">
// //       <Swiper
// //         pagination={{
// //           dynamicBullets: true,
// //           clickable: true,
// //         }}
// //         autoplay={{
// //           delay: 4000,
// //           disableOnInteraction: false,
// //         }}
// //         modules={[Pagination, Autoplay, Navigation]}
// //         className="mySwiper "
// //       >
// //         {/* slide 1 */}
// //         <SwiperSlide>
// //           <div className="relative flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-10 w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
// //             {/* Decorative blur circles for subtle style */}
// //             <div className="absolute top-10 left-10 w-60 h-60 bg-blue-200/40 blur-3xl rounded-full"></div>
// //             <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full"></div>

// //             {/* Left Text Section */}
// //             <div className="relative z-10 flex-1 flex flex-col justify-start items-start gap-6  text-center lg:text-left mt-10 lg:mt-0">
// //               <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
// //                 Global Staple Food and Cereal Grain
// //               </p>

// //               <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
// //                 Rice is the edible starchy grain of the grass plant Oryza sativa
// //                 (Asian rice) and is the most consumed staple food globally,
// //                 particularly across Asia and Africa. It is a vital annual
// //                 warm-season crop that requires a hot, humid climate and
// //                 substantial water to grow, often cultivated in flooded fields
// //                 called paddies.
// //               </p>
// //             </div>

// //             {/* Right Image Section */}
// //             <div className="relative z-10 flex-1 flex justify-center items-center">
// //               <img
// //                 className="h-[300px] rounded-3xl sm:h-[400px] lg:h-[500px] object-contain drop-shadow-2xl"
// //                 src={BannerImg1}
// //                 alt="banner image"
// //               />
// //             </div>
// //           </div>
// //         </SwiperSlide>

// //         {/* slide 2 */}
// //         <SwiperSlide>
// //           <div className="relative flex flex-col-reverse lg:flex-row justify-between items-center  px-6 lg:px-10 w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
// //             {/* Decorative blur circles for subtle style */}
// //             <div className="absolute top-10 left-10 w-60 h-60 bg-blue-200/40 blur-3xl rounded-full"></div>
// //             <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full"></div>

// //             {/* Left Text Section */}
// //             <div
// //               className="relative z-10 flex-1 flex flex-col justify-start items-start gap-6
// //       text-center lg:text-left mt-10 lg:mt-0"
// //             >
// //               <p className="text-[26px] md:text-start text-center sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
// //                 Potato nutrition facts & health benefits
// //               </p>

// //               <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
// //                 The potato is a starchy tuber (modified underground stem) of the
// //                 nightshade family (Solanaceae). Originating in the Andes of
// //                 South America, it is now the fourth-largest food crop globally,
// //                 after rice, wheat, and maize. Potatoes are an excellent source
// //                 of carbohydrates (starch), along with significant amounts of
// //                 Vitamin C, Vitamin B6, and Potassium.
// //               </p>
// //             </div>

// //             {/* Right Image Section */}
// //             <div className="relative z-10 flex-1 flex justify-center items-center">
// //               <img
// //                 className="h-[300px] rounded-3xl sm:h-[400px] lg:h-[500px] object-contain drop-shadow-2xl"
// //                 src={BannerImg2}
// //                 alt="banner image"
// //               />
// //             </div>
// //           </div>
// //         </SwiperSlide>

// //         {/* slide 3 */}
// //         <SwiperSlide>
// //           {" "}
// //           <div
// //             className="relative flex flex-col-reverse lg:flex-row justify-between items-center
// //     px-6 lg:px-10 w-full min-h-screen overflow-hidden
// //     bg-gradient-to-br from-white via-blue-50 to-purple-50"
// //           >
// //             {/* Decorative blur circles for subtle style */}
// //             <div className="absolute top-10 left-10 w-60 h-60 bg-blue-200/40 blur-3xl rounded-full"></div>
// //             <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full"></div>

// //             {/* Left Text Section */}
// //             <div
// //               className="relative z-10 flex-1 flex flex-col justify-start items-start gap-6
// //       text-center lg:text-left mt-10 lg:mt-0"
// //             >
// //               <p className="text-[26px] md:text-start text-center sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
// //                 Jute leaves are edible, leafy greens from the Corchorus
// //                 olitorius plant
// //               </p>

// //               <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
// //                 Jute leaves are edible, leafy greens from the Corchorus
// //                 olitorius plant, known for their use in various cuisines across
// //                 Asia, Africa, and the Middle East. They are nutritionally rich,
// //                 containing vitamins A, C, and K, along with iron, and are used
// //                 in soups, stews, and curries, sometimes thickening them due to a
// //                 "sticky" texture similar to okra. Besides culinary uses, jute
// //                 leaves have medicinal properties that may support eye health,
// //                 blood clotting, and digestion.
// //               </p>

// //               <div className="flex flex-wrap justify-center lg:justify-start gap-4"></div>
// //             </div>

// //             {/* Right Image Section */}
// //             <div className="relative z-10 flex-1 flex justify-center items-center">
// //               <img
// //                 className="h-[300px] rounded-3xl sm:h-[400px] lg:h-[500px] object-contain drop-shadow-2xl"
// //                 src={BannerImg3}
// //                 alt="banner image"
// //               />
// //             </div>
// //           </div>
// //         </SwiperSlide>
// //       </Swiper>
// //     </div>
// //   );
// // }
