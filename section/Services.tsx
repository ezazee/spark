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
            <span className="section-tag section-tag-primary">
              What We Serve
            </span>
            <h2 className="section-title text-colorDark">
              <span className="text-colorGrey">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum accusamus placeat veritatis, illo voluptas excepturi.
              </span>
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
                      alt="Social Media Management"
                      width={98}
                      height={78}
                    />
                  </div>
                  <h3 className="mb-5 font-medium animate-transition text-colorDark group-hover:text-white">
                    Social Media Management
                  </h3>
                </div>
                {/* Top */}
                {/* Bottom */}
                <div className="mt-auto">
                  <p className="animate-transition text-colorGreyLight group-hover:text-white/75">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    nostrum vitae ex. Doloribus, ipsum qui?
                  </p>
                  <ul className="animate-transition mt-6 flex flex-col gap-y-[10px] font-bold text-colorDark group-hover:text-white/75">
                    <li>
                      <span className="text-colorCustom">01.</span> Instagram
                      Feed
                    </li>
                    <li>
                      <span className="text-colorCustom">02.</span> Regular Post
                    </li>
                    <li>And More..</li>
                  </ul>
                </div>
                {/* Bottom */}
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 animate-transition -z-10 group-hover:opacity-100">
                  <Image
                    src="/img/images/th-2/service-img.jpg"
                    alt="Social Media Management"
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
                      src="/img/icon/service-icon-1.svg"
                      alt="Design 2D, 3D & Customing Design"
                      width={96}
                      height={78}
                    />
                  </div>
                  <h3 className="mb-5 font-medium animate-transition text-colorDark group-hover:text-white">
                    Design 2D, 3D, UI UX & Customing Design
                  </h3>
                </div>
                {/* Top */}
                {/* Bottom */}
                <div className="mt-auto">
                  <p className="animate-transition text-colorGreyLight group-hover:text-white/75">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae necessitatibus in minus?
                  </p>
                  <ul className="animate-transition mt-6 flex flex-col gap-y-[10px] font-bold text-colorDark group-hover:text-white/75">
                    <li>
                      <span className="text-colorCustom">01. </span>
                      Design Shirt, Uniform, UI & UX
                    </li>
                    <li>
                      <span className="text-colorCustom">02.</span> 3D & 2D
                      Character
                    </li>
                    <li>And More...</li>
                  </ul>
                </div>
                {/* Bottom */}
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 animate-transition -z-10 group-hover:opacity-100">
                  <Image
                    src="/img/images/th-2/service-img.jpg"
                    alt=" Design 2D, 3D & Customing Design"
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
                      alt="Web Design and Development"
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita fugit eveniet ex?
                  </p>
                  <ul className="animate-transition mt-6 flex flex-col gap-y-[10px] font-bold text-colorDark group-hover:text-white/75">
                    <li>
                      <span className="text-colorCustom">01.</span> Web Custom
                      Tech
                    </li>
                    <li>
                      <span className="text-colorCustom">02.</span> Wordpress,
                      Wix
                    </li>
                    <li>And More...</li>
                  </ul>
                </div>
                {/* Bottom */}
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 animate-transition -z-10 group-hover:opacity-100">
                  <Image
                    src="/img/images/th-2/service-img.jpg"
                    alt="Web Design and Development"
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
                      alt="Video Editing & Motion Graphic"
                      width={73}
                      height={78}
                    />
                  </div>
                  <h3 className="mb-5 font-medium animate-transition text-colorDark group-hover:text-white">
                    Video Editing & Motion Graphic
                  </h3>
                </div>
                {/* Top */}
                {/* Bottom */}
                <div className="mt-auto">
                  <p className="animate-transition text-colorGreyLight group-hover:text-white/75">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi mollitia itaque perspiciatis!
                  </p>
                  <ul className="animate-transition mt-6 flex flex-col gap-y-[10px] font-bold text-colorDark group-hover:text-white/75">
                    <li>
                      <span className="text-colorCustom">01.</span> Regular Video Editing
                    </li>
                    <li>
                      <span className="text-colorCustom">02.</span> Motion Graphic
                    </li>
                    <li>
                      And More...
                    </li>
                  </ul>
                </div>
                {/* Bottom */}
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 animate-transition -z-10 group-hover:opacity-100">
                  <Image
                    src="/img/images/th-2/service-img.jpg"
                    alt="Video Editing & Motion Graphic"
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
