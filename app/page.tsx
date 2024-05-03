import About from "@/section/About";
import ClientLogo from "@/section/ClientLogo";
import Hero from "@/section/Hero";
import Pricing from "@/section/Pricing";
import Services from "@/section/Services";
import Testimonial from "@/section/Testimonial";
import Whyus from "@/section/WhyUs";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="section-hero bg-colorGrey">
        <Hero />
      </section>
      <section className="section-about">
        <About />
      </section>
      <section className="mb-60 section-service">
        <Services />
      </section>
      <section className="why-us-section">
        <Whyus />
      </section>
      <section className="testimonial-section">
        <Testimonial />
      </section>
      <section className="section-logo-slider">
        <ClientLogo />
      </section>
      {/* <section className="mb-60 section-pricing">
        <Pricing />
      </section> */}
    </>
  );
};

export default Home;
