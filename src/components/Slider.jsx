// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../assets/1.jpg";
import slider2 from "../assets/2.jpg";
import slider3 from "../assets/3.jpg";
import slider4 from "../assets/4.jpg";

const Slider = () => {
  return (
    <div className="lg:h-[75vh] md:h-[60vh] h-[40vh]">
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
        <SwiperSlide>
          <img src={slider1} alt="Slider 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="Slider 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="Slider 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="Slider 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
