import { div } from "motion/react-client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../assets/a-smiling-man-holding-a-box-of-vegetables-in-a-field-free-photo.jpg";
import slider2 from "../assets/Farmer-1.jpg";
import slider3 from "../assets/Photo-Credit-IFPRI_1.jpg";
import slider4 from "../assets/young-indian-agronomist-showing-some-information-farmer-tablet-agriculture-field_54391-5678.avif";

const About = () => {
  return (
    <div className="w-11/12 mx-auto my-14 ">
      <div className="text-center">
        <h2 className="text-4xl font-bold   mb-3">About KrishiLink</h2>
        <div className="flex justify-center mb-3">
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-black to-black"></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center gap-10 max-md:px-4 mt-14">
        <div className="relative shadow-2xl shadow-green-600/40 rounded-2xl overflow-hidden shrink-0">
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
            
          >
            <SwiperSlide>
              <img className="rounded-3xl w-full" src={slider1} alt="Slider 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-3xl w-full" src={slider2} alt="Slider 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-3xl w-full" src={slider3} alt="Slider 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="rounded-3xl w-full" src={slider4} alt="Slider 3" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-sm text-slate-600 max-w-lg">
          <p>
            <span className="text-green-600 font-bold text-xl">
              KrishiLink
            </span>{" "}
          </p>
          <p>
            That sounds like a description of the KrishiLink application. To
            learn more about its specific features, availability, or to find a
            direct link to the platform, I would need to search for it online.
          </p>

          <div className="mt-4">
            <p>For now every user can:</p>

            <div className="mt-2 ml-8">
              <li>Show interest to connect and collaborate</li>
              <li>Post what they are growing or selling</li>
              <li>Browse others crop’s posts</li>
            </div>
          </div>

          <p className="mt-4">
            Instead of a traditional e-commerce or buyer-seller model, this
            platform works as a social agro network, where everyone can interact
            directly.
          </p>

          <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-full hover:bg-green-700 transition cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
