"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className='px-10'>
      {/* Slider main container */}
      <div className="testimonial-slider-3">
        {/* Additional required wrapper */}
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
        >
          <div className="swiper-wrapper">
            {/* Slides */}
            <SwiperSlide>
              {/* Swiper SLider Item */}
              <div className="swiper-slide">
                <div className="bg-colorGreyWhite bg-[url('img/icon/icon-orange-quote.html')] bg-[40px_40px] bg-no-repeat px-11 py-10">
                  <blockquote className="text-xl text-colorGreyLight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae rerum facere esse. Quae deleniti cum blanditiis sint
                    ab commodi accusamus dicta ut! Ex esse exercitationem dolore
                    accusantium culpa adipisci praesentium.
                  </blockquote>
                  <div className="relative mt-10 flex flex-wrap items-center gap-x-3 pl-12 text-colorDark/[35%] before:absolute before:left-0 before:h-[1px] before:w-[38px] before:bg-colorDark/[30%]">
                    <span className="text-xl font-semibold text-colorDark">
                      Elizabeth White
                    </span>
                    Founder at Merga
                  </div>
                </div>
              </div>
              {/* Swiper SLider Item */}
            </SwiperSlide>
            <SwiperSlide>
              {/* Swiper SLider Item */}
                <div className="bg-colorGreyWhite bg-[url('img/icon/icon-orange-quote.html')] bg-[40px_40px] bg-no-repeat px-11 py-10">
                  <blockquote className="text-xl text-colorGreyLight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae rerum facere esse. Quae deleniti cum blanditiis sint
                    ab commodi accusamus dicta ut! Ex esse exercitationem dolore
                    accusantium culpa adipisci praesentium.
                  </blockquote>
                  <div className="relative mt-10 flex flex-wrap items-center gap-x-3 pl-12 text-colorDark/[35%] before:absolute before:left-0 before:h-[1px] before:w-[38px] before:bg-colorDark/[30%]">
                    <span className="text-xl font-semibold text-colorDark">
                      Elizabeth White
                    </span>
                    Founder at Merga
                  </div>
                </div>
              {/* Swiper SLider Item */}
            </SwiperSlide>
            <SwiperSlide>
              {/* Swiper SLider Item */}
              <div className="swiper-slide">
                <div className="bg-colorGreyWhite bg-[url('img/icon/icon-orange-quote.html')] bg-[40px_40px] bg-no-repeat px-11 py-10">
                  <blockquote className="text-xl text-colorGreyLight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae rerum facere esse. Quae deleniti cum blanditiis sint
                    ab commodi accusamus dicta ut! Ex esse exercitationem dolore
                    accusantium culpa adipisci praesentium.
                  </blockquote>
                  <div className="relative mt-10 flex flex-wrap items-center gap-x-3 pl-12 text-colorDark/[35%] before:absolute before:left-0 before:h-[1px] before:w-[38px] before:bg-colorDark/[30%]">
                    <span className="text-xl font-semibold text-colorDark">
                      Elizabeth White
                    </span>
                    Founder at Merga
                  </div>
                </div>
              </div>
              {/* Swiper SLider Item */}
            </SwiperSlide>
            <SwiperSlide>
              {/* Swiper SLider Item */}
              <div className="swiper-slide">
                <div className="bg-colorGreyWhite bg-[url('img/icon/icon-orange-quote.html')] bg-[40px_40px] bg-no-repeat px-11 py-10">
                  <blockquote className="text-xl text-colorGreyLight">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae rerum facere esse. Quae deleniti cum blanditiis sint
                    ab commodi accusamus dicta ut! Ex esse exercitationem dolore
                    accusantium culpa adipisci praesentium.
                  </blockquote>
                  <div className="relative mt-10 flex flex-wrap items-center gap-x-3 pl-12 text-colorDark/[35%] before:absolute before:left-0 before:h-[1px] before:w-[38px] before:bg-colorDark/[30%]">
                    <span className="text-xl font-semibold text-colorDark">
                      Elizabeth White
                    </span>
                    Founder at Merga
                  </div>
                </div>
              </div>
              {/* Swiper SLider Item */}
            </SwiperSlide>
          </div>
        </Swiper>
        {/* If we need pagination */}
        <div className="testimonial-pagination mt-[70px] flex justify-center" />
      </div>
    </div>
  );
}

export default Testimonial