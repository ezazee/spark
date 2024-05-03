import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="section-space">
      {/* Section Container */}
      <div className="container">
        {/* Section Wrapper */}
        <div className="section-wrapper mb-28 grid grid-cols-1 gap-[70px] md:grid-cols-[auto_minmax(0,_1fr)]">
          {/* Section Image */}
          <Image
            src="/img/icon/icon-arrow-2-line-white-up-right.svg"
            alt="SpaceSpark Creative"
            width={378}
            height={378}
            className="hidden h-auto md:block md:w-56 lg:w-72 xl:w-[378px]"
          />
          {/* Section Image */}
          {/* Section Block */}
          <div className="section-block">
            <span className="section-tag section-tag-primary">
              About Our Agency
            </span>
            <h2 className="section-title">
              <span className="text-colorGrey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                adipisicing elit. Laudantium qui distinctio atque harum
                nesciunt!
              </span>
            </h2>
          </div>
          {/* Section Block */}
        </div>
        {/* Section Wrapper */}
        {/* About Area */}
        <div className="grid grid-cols-1 items-center justify-center gap-12 lg:grid-cols-[minmax(0,_0.85fr)_auto_auto] xl:gap-16 xxl:gap-24">
          {/* About Text */}
          <p className="text-xl text-colorGrey">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            qui distinctio atque harum nesciunt! Voluptates similique dolore
            consequatur quae. Voluptatum quos qui labore pariatur nihil fugit
            voluptas quisquam modi nemo.
          </p>
          {/* About Text */}
          {/* About Counter-up Block */}
          <div className="grid grid-cols-2 lg:gap-12 xl:gap-16 xxl:gap-24">
            {/* Counter Single Block */}
            <div className="text-center">
              <div
                className="font-title font-bold text-5xl leading-[1.1] text-colorCustom sm:text-6xl md:text-7xl xl:text-[100px]"
                data-module="countup"
              >
                <span className="start-number" data-countup-number={4}>
                  4
                </span>
                M+
              </div>
              <span className="text-colorGrey">Awesome clients</span>
            </div>
            {/* Counter Single Block */}
            {/* Counter Single Block */}
            <div className="text-center">
              <div
                className="font-title font-bold text-5xl leading-[1.1] text-colorCustom sm:text-6xl md:text-7xl xl:text-[100px]"
                data-module="countup"
              >
                <span className="start-number" data-countup-number={2}>
                  2
                </span>
                B+
              </div>
              <span className="text-colorGrey">We earnings a year</span>
            </div>
            {/* Counter Single Block */}
          </div>
          {/* About Counter-up Block */}
          {/* Text Link */}
          <div className="mx-auto jos">
            <a
              href="#"
              className="inline-flex items-center pb-1 ml-auto border-b btn group gap-x-3 border-colorCustom text-colorCustom"
            >
              View All Projects
              <span className="relative flex items-center overflow-hidden">
                <Image
                  src="/img/icon/icon-orange-arrow-long-right.svg"
                  alt="SpaceSpark Creative"
                  width="24"
                  height="12"
                  className="w-6 h-3 translate-x-0 animate-transition group-hover:translate-x-full"
                />
                <Image
                  src="/img/icon/icon-orange-arrow-long-right.svg"
                  alt="SpaceSpark Creative"
                  width="24"
                  height="12"
                  className="absolute inset-0 w-6 h-3 -translate-x-full animate-transition group-hover:translate-x-0"
                />
              </span>
            </a>
          </div>
          {/* Text Link */}
        </div>
        {/* About Area */}
      </div>
      {/* Section Container */}
    </div>
  );
};

export default About;
