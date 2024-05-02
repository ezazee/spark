import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      {/* Section Space */}
      <div className="section-space-top">
        {/* Section Container */}
        <div className="container">
          {/* Section Block */}
          <div className="section-block max-w-[1131px]">
            <span className="section-tag section-tag-primary">What We Do</span>
            <h2 className="section-title text-colorDark">
              <span className="text-colorGrey">
                Our mission is to accompany brands and
              </span>
              tell stories that deepen engagement through impactful design.
            </h2>
          </div>
          {/* Section Block */}
          <ul className="divider-[#E0E0E0] mt-20 grid grid-cols-1 gap-y-10 md:grid-cols-2 xl:grid-cols-4 xl:divide-x">
            {/* Service Item */}
            <li className="jos md:min-h-[576px] xl:min-h-[727px]">
              <div className="relative z-10 flex flex-col h-full p-10 group gap-y-10">
                {/* Top */}
                <div>
                  <div className="mb-6 md:mb-12">
                    <Image
                      src="/img/icon/service-icon-2.svg"
                      alt="service-icon-2"
                      width={98}
                      height={78}
                    />
                  </div>
                  <h3 className="mb-5 font-medium animate-transition text-colorDark group-hover:text-white">
                    Data Analytics and Solutions
                  </h3>
                </div>
                {/* Top */}
                {/* Bottom */}
                <div className="mt-auto">
                  <p className="animate-transition text-colorGreyLight group-hover:text-white/75">
                    We create mind-blowing visuals, brands, websites and
                    products that help startups.
                  </p>
                  <ul className="animate-transition mt-6 flex flex-col gap-y-[10px] font-bold text-colorDark group-hover:text-white/75">
                    <li>
                      <span className="text-colorCustom">01.</span> Sound Maker
                      And Design
                    </li>
                    <li>
                      <span className="text-colorCustom">02.</span> User
                      Interface Design
                    </li>
                  </ul>
                </div>
                {/* Bottom */}
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 animate-transition -z-10 group-hover:opacity-100">
                  <Image
                    src="/img/images/th-2/service-img.jpg"
                    alt="service-img"
                    width={380}
                    height={727}
                    className="object-cover w-full h-full"
                  />
                  Image
                  <div className="absolute inset-0 radial-gradient-dark" />
                </div>
              </div>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li className="jos md:min-h-[576px] xl:min-h-[727px]">
              <div className="relative z-10 flex flex-col h-full p-10 group gap-y-10">
                {/* Top */}
                <div>
                  <div className="mb-6 md:mb-12">
                    <Image
                      src="/img/icon/service-icon-1.svg"
                      alt="service-icon-1"
                      width={96}
                      height={78}
                    />
                  </div>
                  <h3 className="mb-5 font-medium animate-transition text-colorDark group-hover:text-white">
                    Marketing strategy and Data Solutions
                  </h3>
                </div>
                {/* Top */}
                {/* Bottom */}
                <div className="mt-auto">
                  <p className="animate-transition text-colorGreyLight group-hover:text-white/75">
                    We create mind-blowing visuals, brands, websites and
                    products that help startups.
                  </p>
                  <ul className="animate-transition mt-6 flex flex-col gap-y-[10px] font-bold text-colorDark group-hover:text-white/75">
                    <li>
                      <span className="text-colorCustom">01.</span> Sound Maker
                      And Design
                    </li>
                    <li>
                      <span className="text-colorCustom">02.</span> User
                      Interface Design
                    </li>
                  </ul>
                </div>
                {/* Bottom */}
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 animate-transition -z-10 group-hover:opacity-100">
                  <Image
                    src="/img/images/th-2/service-img.jpg"
                    alt="service-img"
                    width={380}
                    height={727}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 radial-gradient-dark" />
                </div>
              </div>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li className="jos md:min-h-[576px] xl:min-h-[727px]">
              <div className="relative z-10 flex flex-col h-full p-10 group gap-y-10">
                {/* Top */}
                <div>
                  <div className="mb-6 md:mb-12">
                    <Image
                      src="/img/icon/service-icon-2.svg"
                      alt="service-icon-2"
                      width={98}
                      height={78}
                    />
                  </div>
                  <h3 className="mb-5 font-medium animate-transition text-colorDark group-hover:text-white">
                    Web Design and Development
                  </h3>
                </div>
                {/* Top */}
                {/* Bottom */}
                <div className="mt-auto">
                  <p className="animate-transition text-colorGreyLight group-hover:text-white/75">
                    We create mind-blowing visuals, brands, websites and
                    products that help startups.
                  </p>
                  <ul className="animate-transition mt-6 flex flex-col gap-y-[10px] font-bold text-colorDark group-hover:text-white/75">
                    <li>
                      <span className="text-colorCustom">01.</span> Sound Maker
                      And Design
                    </li>
                    <li>
                      <span className="text-colorCustom">02.</span> User
                      Interface Design
                    </li>
                  </ul>
                </div>
                {/* Bottom */}
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 animate-transition -z-10 group-hover:opacity-100">
                  <Image
                    src="/img/images/th-2/service-img.jpg"
                    alt="service-img"
                    width={380}
                    height={727}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 radial-gradient-dark" />
                </div>
              </div>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li className="jos md:min-h-[576px] xl:min-h-[727px]">
              <div className="relative z-10 flex flex-col h-full p-10 group gap-y-10">
                {/* Top */}
                <div>
                  <div className="mb-6 md:mb-12">
                    <Image
                      src="/img/icon/service-icon-3.svg"
                      alt="service-icon-3"
                      width={73}
                      height={78}
                    />
                  </div>
                  <h3 className="mb-5 font-medium animate-transition text-colorDark group-hover:text-white">
                    Business Strategy And Solution
                  </h3>
                </div>
                {/* Top */}
                {/* Bottom */}
                <div className="mt-auto">
                  <p className="animate-transition text-colorGreyLight group-hover:text-white/75">
                    We create mind-blowing visuals, brands, websites and
                    products that help startups.
                  </p>
                  <ul className="animate-transition mt-6 flex flex-col gap-y-[10px] font-bold text-colorDark group-hover:text-white/75">
                    <li>
                      <span className="text-colorCustom">01.</span> Sound Maker
                      And Design
                    </li>
                    <li>
                      <span className="text-colorCustom">02.</span> User
                      Interface Design
                    </li>
                  </ul>
                </div>
                {/* Bottom */}
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 animate-transition -z-10 group-hover:opacity-100">
                  <Image
                    src="/img/images/th-2/service-img.jpg"
                    alt="service-img"
                    width={380}
                    height={727}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 radial-gradient-dark" />
                </div>
              </div>
            </li>
            {/* Service Item */}
          </ul>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Space */}
    </>
  );
};

export default Services;
