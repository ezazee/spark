"use client"
import Image from 'next/image';
import React, { useEffect } from 'react'


const Hero = () => {
     useEffect(() => {
       const handleMouseMove = (e: MouseEvent) => {
         const hero = document.querySelector(".hero");
         const images = document.querySelectorAll<HTMLElement>(".image-move");

         if (!hero || !images) return;

         const { clientX: mouseX, clientY: mouseY } = e;

         const centerX = hero.clientWidth / 2;
         const centerY = hero.clientHeight / 2;

         const offsetX = (mouseX - centerX) / 70;
         const offsetY = (mouseY - centerY) / 70;

         images.forEach((image, index) => {
           const offset = index + 1;
           image.style.transform = `translate(${offsetX * offset}px, ${
             offsetY * offset
           }px)`;
         });
       };

       window.addEventListener("mousemove", handleMouseMove);

       return () => {
         window.removeEventListener("mousemove", handleMouseMove);
       };
     }, []);
  return (
    <div className="relative z-10 hero">
      {/* Hero Space */}
      <div className="pb-20 pt-44 lg:pb-24 lg:pt-52 xl:pb-32 xl:pt-56 xxl:pb-[180px] xxl:pt-[270px]">
        {/* Section Container */}
        <div className="container">
          <div className="mx-auto flex max-w-[960px] flex-col items-center gap-y-12 text-center">
            {/* Hero Title */}
            <h1
              className="jos text-4xl font-bold text-colorDark sm:text-6xl md:text-7xl lg:text-9xl xl:text-[150px]"
              data-jos_delay="0.3"
            >
              <span className="text-colorCustom">Creative</span> Digital Agency
            </h1>
            {/* Hero Title */}
            {/* Hero Arrow */}
            <div className="hidden md:inline-block">
              <Image
                src="/img/icon/icon-extra-long-arrow-down.svg"
                alt="icon-extra-long-arrow-down"
                width={37}
                height={106}
              />
            </div>
            {/* Hero Arrow */}
            <div className="flex gap-x-[34px] text-xl text-colorGreyLight">
              <span className="relative after:absolute after:left-[calc(100%+_17px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-colorGreyLight last:after:hidden">
                Design
              </span>
              <span className="relative after:absolute after:left-[calc(100%+_17px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-colorGreyLight last:after:hidden">
                Branding
              </span>
              <span className="relative after:absolute after:left-[calc(100%+_17px)] after:top-1/2 after:h-[6px] after:w-[6px] after:-translate-y-1/2 after:rounded-[50%] after:bg-colorGreyLight last:after:hidden">
                Marketing
              </span>
            </div>
            {/* Video Button */}
            <a
              target="_blank"
              href="#"
              aria-label="video-play"
              className="animate-transition text-text mx-auto inline-flex h-24 w-24 items-center justify-center overflow-hidden rounded-[50%] bg-colorDark text-white hover:scale-110 hover:bg-colorDark/80 md:h-32 md:w-32"
            >
              <span className="absolute">Play Now</span>
            </a>
            {/* Video Button */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Hero Space */}
      {/* Hero Background Element Images  */}
      <Image
        src="/img/images/th-2/hero-bg-img-1.jpg"
        alt="hero-bg-img-1"
        width={384}
        height={292}
        className="image-move absolute left-10 top-[118px] -z-10 w-[40%] lg:w-[30%] xl:left-40 xl:w-auto xxl:left-[317px]"
      />
      <Image
        src="/img/images/th-2/hero-bg-img-2.jpg"
        alt="hero-bg-img-2"
        width={176}
        height={204}
        className="image-move absolute left-0 top-[193px] -z-10 w-[25%] sm:top-[200px] sm:w-auto md:top-[293px] lg:left-0 xl:left-[70px] xxl:left-[182px]"
      />
      <Image
        src="/img/images/th-2/hero-bg-img-3.jpg"
        alt="hero-bg-img-3"
        width={550}
        height={339}
        className="image-move absolute bottom-[77px] left-0 -z-10 w-[44%] rounded-[170px] lg:bottom-[106px] xl:bottom-auto xl:top-[610px] xl:w-auto"
      />
      <Image
        src="/img/images/th-2/hero-bg-img-4.jpg"
        alt="hero-bg-img-4"
        width={550}
        height={339}
        className="image-move absolute right-0 top-[118px] -z-10 w-[44%] rounded-[170px] xl:w-auto"
      />
      <Image
        src="/img/images/th-2/hero-bg-img-5.jpg"
        alt="hero-bg-img-5"
        width={179}
        height={204}
        className="image-move absolute right-5 top-[360px] -z-10 h-auto w-[15%] sm:top-[320px] md:top-[480px] lg:w-auto xl:right-6 xl:top-[576px] xxl:right-[161px]"
      />
      <Image
        src="/img/images/th-2/hero-bg-img-6.jpg"
        alt="hero-bg-img-6"
        width={463}
        height={292}
        className="image-move absolute bottom-20 right-10 -z-20 w-[40%] md:bottom-auto md:top-[512px] lg:top-[600px] xl:right-20 xl:top-[657px] xl:w-auto xxl:right-[257px]"
      />
      {/* Hero Background Element Images  */}
    </div>
  );
}

export default Hero