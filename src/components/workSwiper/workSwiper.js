import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import Nalazoo from "../work/nalazoo";
import Portfolio from "../work/portfolio";
import "./workSwiper.css"

import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function SwiperMenu() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={8}
        modules={[FreeMode, Navigation, Thumbs]}
        freeMode={true}
        watchSlidesProgress={true}
        className="Top_Wrap"
        >
        <SwiperSlide className="WorkTab"><p>Portfolio</p></SwiperSlide>
        <SwiperSlide className="WorkTab"><p>Nalazoo</p></SwiperSlide>
        <SwiperSlide className="WorkTab"><p>Nalazoo</p></SwiperSlide>
        <SwiperSlide className="WorkTab"><p>Nalazoo</p></SwiperSlide>
      </Swiper>
      <div className="fix">
        <div className="fixIconWrap">
          <div className="fixIcon">
            <img src="img/deco03.svg"/>
          </div>
          <div className="fixIcon">
           <img src="img/deco01.svg"/>
          </div>
          <div className="fixIcon">
            <img src="img/deco02.svg"/>
          </div>
        </div>
        <div className="fixName"></div>
      </div>
      <Swiper
        loop={true}
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="Bottom_Area"
      >
        <SwiperSlide className="SwiperContent"><Portfolio/></SwiperSlide>
        <SwiperSlide className="SwiperContent"><Nalazoo/></SwiperSlide>
        <SwiperSlide className="SwiperContent"><Nalazoo/></SwiperSlide>
        <SwiperSlide className="SwiperContent"><Nalazoo/></SwiperSlide>
      </Swiper>
    </>
  );
}
