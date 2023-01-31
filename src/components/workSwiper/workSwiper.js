import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from "swiper";
import Portfolio from "../work/portfolio/portfolio";
import Nalazoo from "../work/nalazoo/nalazoo";
import Webetu from "../work/webetu/webetu"
import WebetuShop from "../work/webetushop/webetushop"
import Sevennft from "../work/sevennft/sevennft"
import Byheyday from "../work/byheyday/byheyday"
import Nikon from "../work/nikon/nikon"

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
        slidesPerView={9}
        modules={[FreeMode, Navigation, Thumbs]}
        freeMode={true}
        watchSlidesProgress={true}
        className="Top_Wrap"
        >
        <SwiperSlide className="WorkTab"><p>HAHAFOLIO</p></SwiperSlide>
        <SwiperSlide className="WorkTab"><p>NALAZOO</p></SwiperSlide>
        <SwiperSlide className="WorkTab"><p>WEBETU</p></SwiperSlide>
        <SwiperSlide className="WorkTab"><p>WEBETU SHOP</p></SwiperSlide>
        <SwiperSlide className="WorkTab"><p>SEVEN NFT</p></SwiperSlide>
        <SwiperSlide className="WorkTab"><p>BYHEYDAY</p></SwiperSlide>
        <SwiperSlide className="WorkTab"><p>NIKON</p></SwiperSlide>
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
        <SwiperSlide className="SwiperContent"><Webetu/></SwiperSlide>
        <SwiperSlide className="SwiperContent"><WebetuShop/></SwiperSlide>
        <SwiperSlide className="SwiperContent"><Sevennft/></SwiperSlide>
        <SwiperSlide className="SwiperContent"><Byheyday/></SwiperSlide>
        <SwiperSlide className="SwiperContent"><Nikon/></SwiperSlide>
      </Swiper>
    </>
  );
}
