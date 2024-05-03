"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const ClientLogo = () => {
  return (
    <div className="section-space">
      {/* Brand Slider */}
      <div className="client-slider swiper">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          <Swiper
            slidesPerView={4}
            spaceBetween={400}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={true}
          >
            {/* Slides */}
            <SwiperSlide>
              <div className="flex justify-center swiper-slide">
                <Image
                  src="/img/images/th-1/client-logo-1.png"
                  alt="client-logo-1"
                  width={164}
                  height={36}
                  className="invert"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center swiper-slide">
                <Image
                  src="/img/images/th-1/client-logo-1.png"
                  alt="client-logo-1"
                  width={164}
                  height={36}
                  className="invert"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center swiper-slide">
                <Image
                  src="/img/images/th-1/client-logo-1.png"
                  alt="client-logo-1"
                  width={164}
                  height={36}
                  className="invert"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center swiper-slide">
                <Image
                  src="/img/images/th-1/client-logo-1.png"
                  alt="client-logo-1"
                  width={164}
                  height={36}
                  className="invert"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center swiper-slide">
                <Image
                  src="/img/images/th-1/client-logo-1.png"
                  alt="client-logo-1"
                  width={164}
                  height={36}
                  className="invert"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* Brand Slider */}
    </div>
  );
};

export default ClientLogo;
