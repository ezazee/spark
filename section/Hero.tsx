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
    <section className="section-hero hero">
      <div className="relative z-10 overflow-hidden">
        {/* Hero Space */}
        <div className="hero pb-20 pt-44 lg:pb-24 lg:pt-52 xl:pt-56 xxl:pb-[72px] xxxl:pb-[145px] xxxl:pt-[250px]">
          {/* Section Container */}
          <div className="container">
            {/* Hero Top */}
            <div className="max-w-[850px] lg:ml-36">
              {/* Hero Content Block */}
              <h2 className="jos text-7xl font-extrabold text-colorGrey leading-[1.05] md:text-8xl xl:text-9xl xxl:text-[150px]">
                Creative
              </h2>
              <div className="grid mt-5 grid-cols-1 text-colorGrey items-center gap-11 sm:grid-cols-[minmax(0,_0.85fr)_1fr]">
                <p className="jos">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magni, ratione!
                </p>
                <h2
                  className="jos text-7xl font-extrabold text-colorGrey leading-[1.05] md:text-8xl xl:text-9xl xxl:text-[150px]"
                  data-jos_delay="0.3"
                >
                  Digital
                </h2>
              </div>
              <div className="grid grid-cols-1 items-center justify-between gap-11 sm:grid-cols-[minmax(0,_0.85fr)_1fr]">
                <h2
                  className="jos text-stroke-custom text-7xl font-extrabold leading-[1.05] text-transparent md:text-8xl xl:text-9xl xxl:text-[150px]"
                  data-jos_delay="0.3"
                >
                  Agency
                </h2>
                {/* Text Link */}
                <div
                  className="flex jos sm:justify-items-end"
                  data-jos_delay="0.6"
                >
                  <a
                    href="/about"
                    className="inline-flex items-center pb-1 border-b btn group gap-x-3 border-colorCustom text-colorCustom sm:ml-auto"
                  >
                    About Agency
                    <span className="relative flex items-center overflow-hidden">
                      <Image
                        src="/img/icon/icon-orange-arrow-long-right.svg"
                        alt="SpaceSpark Creative"
                        width={24}
                        height={12}
                        className="w-6 h-3 translate-x-0 animate-transition group-hover:translate-x-full"
                      />
                      <Image
                        src="/img/icon/icon-orange-arrow-long-right.svg"
                        alt="SpaceSpark Creative"
                        width={24}
                        height={12}
                        className="absolute inset-0 w-6 h-3 -translate-x-full animate-transition group-hover:translate-x-0"
                      />
                    </span>
                  </a>
                </div>
                {/* Text Link */}
              </div>
              {/* Hero Content Block */}
            </div>
            {/* Hero Top */}
          </div>
          {/* Section Container */}
          {/* Hero Background Element Images  */}
          <Image
            src="/img/images/th-2/hero-bg-img-6.jpg"
            alt="SpaceSpark Creative"
            width={288}
            height={355}
            className="absolute bottom-0 hidden image-move -z-10 lg:block xl:bottom-44"
          />
          <Image
            src="/img/images/th-2/hero-bg-img-4.jpg"
            alt="SpaceSpark Creative"
            width={288}
            height={355}
            className="absolute hidden top-5 left-20 image-move -z-10 lg:block xl:bottom-44"
          />
          <Image
            src="/img/images/th-2/hero-bg-img-1.jpg"
            alt="SpaceSpark Creative"
            width={242}
            height={282}
            className="image-move absolute right-[50px] top-28 -z-10 hidden lg:block xl:right-[200px] xxxl:right-[400px] xxxl:top-55"
          />
          <Image
            src="/img/images/th-2/hero-bg-img-3.jpg"
            alt="SpaceSpark Creative"
            width={324}
            height={395}
            className="image-move absolute bottom-[134px] right-0 -z-10 hidden xl:block xxxl:right-[150px]"
          />
          {/* Hero Background Element Images  */}
        </div>
        {/* Hero Space */}
      </div>
    </section>
  );
}

export default Hero