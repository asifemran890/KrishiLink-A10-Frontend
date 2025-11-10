import React from "react";
import BannerImg1 from "../../assets/img/img-1.jpg";
import BannerImg2 from "../../assets/img/img-2.webp";
import BannerImg3 from "../../assets/img/img-3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaCommentAlt, FaStar, FaUsers } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { Link } from "react-router";

export default function Banner() {
  return (
    <div className="container mx-auto  ">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper "
      >
        {/* slide 1 */}
        <SwiperSlide>
          <div className="relative flex flex-col-reverse lg:flex-row justify-between items-center px-6 lg:px-10 w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
            {/* Decorative blur circles for subtle style */}
            <div className="absolute top-10 left-10 w-60 h-60 bg-blue-200/40 blur-3xl rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full"></div>

            {/* Left Text Section */}
            <div className="relative z-10 flex-1 flex flex-col justify-start items-start gap-6  text-center lg:text-left mt-10 lg:mt-0">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="text-primary">Teach</span> what you know,
                <br className="hidden sm:block" />
                <span className="text-primary">Learn</span> what you love.
              </p>

              <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                TradeSmart is a smart platform where you can learn new skills by{" "}
                <br className="hidden md:block" />
                exchanging what you already know. Grow together through teaching
                and learning.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/login"
                  className="py-3 sm:py-4 btn text-lg btn-outline btn-primary"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="py-3 sm:py-4 btn text-lg btn-outline btn-primary"
                >
                  Explore Skills
                </Link>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative z-10 flex-1 flex justify-center items-center">
              <img
                className="h-[300px] rounded-3xl sm:h-[400px] lg:h-[500px] object-contain drop-shadow-2xl"
                src={BannerImg1}
                alt="banner image"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* slide 2 */}
        <SwiperSlide>
          <div className="relative flex flex-col-reverse lg:flex-row justify-between items-center  px-6 lg:px-10 w-full min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50">
            {/* Decorative blur circles for subtle style */}
            <div className="absolute top-10 left-10 w-60 h-60 bg-blue-200/40 blur-3xl rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full"></div>

            {/* Left Text Section */}
            <div
              className="relative z-10 flex-1 flex flex-col justify-start items-start gap-6 
      text-center lg:text-left mt-10 lg:mt-0"
            >
              <p className="text-[26px] md:text-start text-center sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Potato nutrition facts & health benefits
              </p>

              <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                TradeSmart is a smart platform where you can learn new skills by{" "}
                <br className="hidden md:block" />
                exchanging what you already know. Grow together through teaching
                and learning.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/login"
                  className="py-3 sm:py-4 btn text-lg btn-outline btn-primary"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="py-3 sm:py-4 btn text-lg btn-outline btn-primary"
                >
                  Explore Skills
                </Link>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative z-10 flex-1 flex justify-center items-center">
              <img
                className="h-[300px] rounded-3xl sm:h-[400px] lg:h-[500px] object-contain drop-shadow-2xl"
                src={BannerImg2}
                alt="banner image"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide>
          {" "}
          <div
            className="relative flex flex-col-reverse lg:flex-row justify-between items-center 
    px-6 lg:px-10 w-full min-h-screen overflow-hidden
    bg-gradient-to-br from-white via-blue-50 to-purple-50"
          >
            {/* Decorative blur circles for subtle style */}
            <div className="absolute top-10 left-10 w-60 h-60 bg-blue-200/40 blur-3xl rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/40 blur-3xl rounded-full"></div>

            {/* Left Text Section */}
            <div
              className="relative z-10 flex-1 flex flex-col justify-start items-start gap-6 
      text-center lg:text-left mt-10 lg:mt-0"
            >
              <p className="text-[26px] md:text-start text-center sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                TradeSmart - Learn, Teach,
                <br />
                Gorw Togeether
              </p>

              <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                TradeSmart is a smart platform where you can learn new skills by{" "}
                <br className="hidden md:block" />
                exchanging what you already know. Grow together through teaching
                and learning.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  to="/login"
                  className="py-3 sm:py-4 btn text-lg btn-outline btn-primary"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="py-3 sm:py-4 btn text-lg btn-outline btn-primary"
                >
                  Explore Skills
                </Link>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="relative z-10 flex-1 flex justify-center items-center">
              <img
                className="h-[300px] rounded-3xl sm:h-[400px] lg:h-[500px] object-contain drop-shadow-2xl"
                src={BannerImg3}
                alt="banner image"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
