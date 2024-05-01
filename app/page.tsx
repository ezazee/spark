import About from "@/section/About";
import Hero from "@/section/Hero";
import Offer from "@/section/Offer";
import Services from "@/section/Services";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="section-hero">
        <Hero />
      </section>
      <section className="section-about">
        <About />
      </section>
      <section className="section-service">
        <Services />
      </section>
      <section className="section-offer">
        <Offer />
      </section>
    </>
  );
};

export default Home;
