import Image from 'next/image';
import React from 'react'

const Pricing = () => {
  return (
    <>
      <div className="section-space-top">
        {/* Section Container */}
        <div className="container">
          {/* Pricing Area */}
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[minmax(0,_0.4fr),_1fr] xxl:grid-cols-[minmax(0,_0.9fr),_1fr] xxl:gap-[121px]">
            {/* Pricing Right Block */}
            <div className="order-2 jos lg:order-1" data-jos_animation="fade">
              <Image
                src="/img/images/th-1/pricing-image.png"
                alt="pricing-image"
                width={474}
                height={474}
                className="hidden w-auto h-auto ml-auto xxl:block"
              />
              <div className="flex flex-col flex-wrap items-center justify-between gap-10 sm:flex-row lg:flex-col xxl:mt-28 xxl:flex-row">
                <div className="flex-1">
                  <h3 className="mb-4 font-bold jos text-colorDark">
                    Need Your Custom Pricing?
                  </h3>
                  <p className="jos text-colorGreyLight">
                    If your need any custom pricing for your business or
                    anything you can contact with us.
                  </p>
                </div>
                <a
                  className="jos mx-auto inline-flex h-[110px] w-[110px] flex-col items-center justify-center rounded-[50%] bg-colorOrange text-white hover:scale-110 xl:h-[126px] xl:w-[126px] xxl:h-[162px] xxl:w-[162px]"
                  data-jos_animation="zoom"
                  href="contact.html"
                >
                  <Image
                    src="/img/icon/icon-small-arrow-white-up-right.svg"
                    alt="icon-arrow-line-white-up-right"
                    width={13}
                    height={14}
                  />
                  <span className="block mt-3">Contact Us</span>
                </a>
              </div>
            </div>
            {/* Pricing Right Block */}
            {/* Pricing Left Block */}
            <div className="order-1 lg:order-2">
              {/* Section Block */}
              <div className="section-block">
                <span
                  className="jos section-tag section-tag-orange"
                  data-jos_delay={0}
                >
                  Our Pricing Plan
                </span>
                <h2
                  className="jos section-title text-colorDark"
                  data-jos_delay="0.3"
                >
                  Choose your best
                  <span className="text-colorGrey"> pricing plan</span>for your
                  servicing
                </h2>
              </div>
              {/* Section Block */}
              {/* Pricing List */}
              <ul className="grid grid-cols-1 mt-14 md:grid-cols-2">
                {/* Pricing Item */}
                <li className="py-8 jos">
                  {/* Pricing Icon */}
                  <Image
                    src="/img/icon/icon-orange-3d-modeling.svg"
                    alt="icon-orange-3d-modeling"
                    width={68}
                    height={68}
                  />
                  {/* Pricing Icon */}
                  {/* Pricing Title */}
                  <h3 className="mt-6 mb-6 font-bold text-colorDark">
                    Branding &amp; Design
                  </h3>
                  {/* Pricing Title */}
                  {/* Pricing Info List */}
                  <ul className="mb-10 flex list-inside list-image-[url(../img/icon/icon-black-check-mark.svg)] flex-col gap-y-5 text-colorGreyLight">
                    <li>Low Quality Products</li>
                    <li>Only USA Delivery Products</li>
                    <li>We Input Top Brands</li>
                    <li>Refund Guarantee</li>
                    <li>Link salmon cherry salmon</li>
                  </ul>
                  {/* Pricing Info List */}
                  {/* Pricing Button */}
                  <button className="inline-flex items-center pb-1 border-b btn group gap-x-3 border-colorOrange text-colorOrange">
                    Choose Plan
                    <span className="relative flex items-center overflow-hidden">
                      <Image
                        src="/img/icon/icon-orange-arrow-long-right.svg"
                        alt="icon-orange-arrow-long-right"
                        width={24}
                        height={12}
                        className="w-6 h-3 translate-x-0 animate-transition group-hover:translate-x-full"
                      />
                      <Image
                        src="/img/icon/icon-orange-arrow-long-right.svg"
                        alt="icon-orange-arrow-long-right"
                        width={24}
                        height={12}
                        className="absolute inset-0 w-6 h-3 -translate-x-full animate-transition group-hover:translate-x-0"
                      />
                    </span>
                  </button>
                  {/* Pricing Button */}
                </li>
                {/* Pricing Item */}
                {/* Pricing Item */}
                <li className="py-8 jos bg-colorGreyWhite px-14">
                  {/* Pricing Icon */}
                  <Image
                    src="/img/icon/icon-orange-abstract.svg"
                    alt="icon-orange-abstract"
                    width={68}
                    height={68}
                  />
                  {/* Pricing Icon */}
                  {/* Pricing Title */}
                  <h3 className="mt-6 mb-6 font-bold text-colorDark">
                    Corporate Brand
                  </h3>
                  {/* Pricing Title */}
                  {/* Pricing Info List */}
                  <ul className="mb-10 flex list-inside list-image-[url(../img/icon/icon-black-check-mark.svg)] flex-col gap-y-5 text-colorGreyLight">
                    <li>High Quality Products</li>
                    <li>World Wide Delivery Products</li>
                    <li>We Input Top Brands</li>
                    <li>Refund Guarantee</li>
                    <li>Link salmon cherry salmon</li>
                  </ul>
                  {/* Pricing Info List */}
                  {/* Pricing Button */}
                  <button className="inline-flex items-center pb-1 border-b btn group gap-x-3 border-colorOrange text-colorOrange">
                    Choose Plan
                    <span className="relative flex items-center overflow-hidden">
                      <Image
                        src="/img/icon/icon-orange-arrow-long-right.svg"
                        alt="icon-orange-arrow-long-right"
                        width={24}
                        height={12}
                        className="w-6 h-3 translate-x-0 animate-transition group-hover:translate-x-full"
                      />
                      <Image
                        src="/img/icon/icon-orange-arrow-long-right.svg"
                        alt="icon-orange-arrow-long-right"
                        width={24}
                        height={12}
                        className="absolute inset-0 w-6 h-3 -translate-x-full animate-transition group-hover:translate-x-0"
                      />
                    </span>
                  </button>
                  {/* Pricing Button */}
                </li>
                {/* Pricing Item */}
              </ul>
              {/* Pricing List */}
            </div>
            {/* Pricing Left Block */}
          </div>
          {/* Pricing Area */}
        </div>
        {/* Section Container */}
      </div>
    </>
  );
}

export default Pricing