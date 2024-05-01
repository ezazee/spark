import Image from 'next/image';
import React from 'react'

const Offer = () => {
  return (
    <>
      <div className="section-space">
        <div className="container">
          {/* Service Area */}
          <div className="grid grid-cols-1 gap-[66px] xl:grid-cols-[minmax(0,_0.6fr)_1fr]">
            {/* Section Wrapper */}
            <div className="section-wrapper">
              {/* Section Block */}
              <div className="section-block">
                <span
                  className="section-tag section-tag-primary"
                  data-jos_delay={0}
                >
                  What Services We Provide
                </span>
                <h2 className="jos section-title text-colorDark" data-jos_delay="0.3">
                  <span className="text-colorCustom">Digital marketing {" "}</span>
                  services aligned with your goals
                </h2>
                {/* Text Link */}
                <div className="mt-10 jos xl:mt-20" data-jos_delay="0.6">
                  <a
                    href="#"
                    className="inline-flex items-center pb-1 border-b border-white btn group gap-x-3"
                  >
                    View All Services
                    <div className="relative flex items-center overflow-hidden">
                      <Image
                        src="/img/icon/icon-arrow-long-white-right.svg"
                        alt="icon-arrow-long-white-right"
                        width={24}
                        height={12}
                        className="w-6 h-3 translate-x-0 animate-transition group-hover:translate-x-full"
                      />
                      <Image
                        src="/img/icon/icon-arrow-long-white-right.svg"
                        alt="icon-arrow-long-white-right"
                        width={24}
                        height={12}
                        className="absolute inset-0 w-6 h-3 -translate-x-full animate-transition group-hover:translate-x-0"
                      />
                    </div>
                  </a>
                </div>
                {/* Text Link */}
              </div>
              {/* Section Block */}
              {/* Section Image */}
              <div
                className="justify-center hidden mt-20 jos opacity-10 xl:flex"
                data-jos_animation="fade"
              >
                <Image
                  src="/img/icon/icon-arrow-line-white-up-right.svg"
                  alt="icon-arrow-line-white-up-right"
                  width={308}
                  height={309}
                />
              </div>
              {/* Section Image */}
            </div>
            {/* Section Wrapper */}
            {/* Service List */}
            <ul className="jos grid h-[calc(100%-1px)] grid-cols-1 gap-x-24 overflow-hidden bg-colorGreyDark px-10 md:grid-cols-2 md:px-14">
              {/* Service Item */}
              <li
                className="jos border-b border-white/[12%] py-10 md:py-14"
                data-jos_delay={0}
              >
                <div className="mb-6 md:mb-12">
                  <Image
                    src="/img/icon/service-icon-1.svg"
                    alt="service-icon-1"
                    width={96}
                    height={78}
                  />
                </div>
                <h3 className="mb-5 font-medium">
                  Marketing strategy and Data Solutions
                </h3>
                <p>
                  We create mind-blowing visuals, brands, websites and products
                  that help startups and innovative companies gain more.
                </p>
              </li>
              {/* Service Item */}
              {/* Service Item */}
              <li
                className="jos border-b border-white/[12%] py-10 md:py-14"
                data-jos_delay="0.3"
              >
                <div className="mb-6 md:mb-12">
                  <Image
                    src="/img/icon/service-icon-2.svg"
                    alt="service-icon-2"
                    width={98}
                    height={78}
                  />
                </div>
                <h3 className="mb-5 font-medium">
                  Data Analytics and Solutions
                </h3>
                <p>
                  We create mind-blowing visuals, brands, websites and products
                  that help startups and innovative companies gain more.
                </p>
              </li>
              {/* Service Item */}
              {/* Service Item */}
              <li
                className="jos border-b border-white/[12%] py-10 md:py-14"
                data-jos_delay="0.6"
              >
                <div className="mb-6 md:mb-12">
                  <Image
                    src="/img/icon/service-icon-3.svg"
                    alt="service-icon-3"
                    width={73}
                    height={78}
                  />
                </div>
                <h3 className="mb-5 font-medium">
                  Website Design and Development
                </h3>
                <p>
                  We create mind-blowing visuals, brands, websites and products
                  that help startups and innovative companies gain more.
                </p>
              </li>
              {/* Service Item */}
              {/* Service Item */}
              <li
                className="jos border-b border-white/[12%] py-10 md:py-14"
                data-jos_delay="0.9"
              >
                <div className="mb-6 md:mb-12">
                  <Image
                    src="/img/icon/service-icon-4.svg"
                    alt="service-icon-4"
                    width={97}
                    height={78}
                  />
                </div>
                <h3 className="mb-5 font-medium">
                  Business Strategy And Solution
                </h3>
                <p>
                  We create mind-blowing visuals, brands, websites and products
                  that help startups and innovative companies gain more.
                </p>
              </li>
              {/* Service Item */}
            </ul>
            {/* Service List */}
          </div>
          {/* Service Area */}
        </div>
      </div>
    </>
  );
}

export default Offer