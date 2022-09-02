import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import About from "../about/about";
import Tech from "../tech/tech";
import More from "../more/more";

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./swiper.css"

export default function SwiperMenu() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        modules={[FreeMode, Navigation, Thumbs]}
        freeMode={true}
        watchSlidesProgress={true}
        className="SwiperTabArry"
        >
        <SwiperSlide className="SwiperTab"><p>ABOUT ME</p></SwiperSlide>
        <SwiperSlide className="SwiperTab"><p>TECH SKIL</p></SwiperSlide>
        <SwiperSlide className="SwiperTab"><p>AMD...</p></SwiperSlide>
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="SwiperContentArray"
      >
        <SwiperSlide className="SwiperContent"><About/></SwiperSlide>
        <SwiperSlide className="SwiperContent"><Tech/></SwiperSlide>
        <SwiperSlide className="SwiperContent"><More/></SwiperSlide>
      </Swiper>
    </>
  );
}
