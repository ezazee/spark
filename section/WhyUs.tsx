import Image from 'next/image';
import React from 'react'

const Whyus = () => {
  return (
    <div className="section-space-bottom">
      {/* Section Container */}
      <div className="container">
        <div className="relative">
          {/* Why-us Area */}
          <div
            className="jos relative grid grid-cols-1 gap-x-[60px] gap-y-10 md:grid-cols-[0.8fr_1fr] lg:gap-x-20 xl:gap-x-[100] xxxl:grid-cols-[auto_1fr]"
            data-jos_animation="fade-left"
          >
            {/* Why-us Left Block */}
            <Image
              src="/img/images/th-1/why-us-img.jpg"
              alt="why-us-img-2"
              width={636}
              height={783}
              className="w-full h-auto"
            />
            {/* Why-us Left Block */}
            {/*  Why-us Right Block */}
            <div>
              {/* Section Block */}
              <div className="section-block">
                <span className="section-tag section-tag-primary">
                  Why Us For You
                </span>
                <h2 className="jos section-title text-colorDark">
                  <span className="text-colorGrey">
                    We are a web design agency
                  </span>
                  working with brands building insightful strategy
                </h2>
              </div>
              {/* Section Block */}
            </div>
            {/*  Why-us Right Block */}
          </div>
          {/* Why-us Area */}
          {/* Card Block */}
          <ul className="jos bottom-10 right-0 mt-10 flex flex-col gap-[52px] bg-colorGreyWhite p-10 md:mt-0 md:flex-row md:p-[60px] xxl:absolute xxl:max-w-[975px]">
            <li>
              <Image
                src="/img/icon/service-card-icon-1.svg"
                alt="service-card-icon-1"
                width={68}
                height={68}
              />
              <h3 className="mt-8 mb-6 font-bold text-colorDark">
                Competitive rates
              </h3>
              <p className="text-colorGreyLight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusantium commodi praesentium sed hic culpa laboriosam dicta iure corporis magni? Cumque impedit accusamus quidem amet, nostrum temporibus aut dignissimos. Aut!
              </p>
            </li>
            <li>
              <Image
                src="/img/icon/service-card-icon-2.svg"
                alt="service-card-icon-2"
                width={68}
                height={68}
              />
              <h3 className="mt-8 mb-6 font-bold text-colorDark">
                Effective Team Work
              </h3>
              <p className="text-colorGreyLight">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore assumenda temporibus optio harum quas, culpa, id non officia eligendi dignissimos tenetur velit pariatur deserunt neque saepe possimus? Tenetur, possimus sapiente.
              </p>
            </li>
          </ul>
          {/* Card Block */}
        </div>
      </div>
      {/* Section Container */}
    </div>
  );
}

export default Whyus