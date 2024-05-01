
import About from '@/section/About';
import Hero from '@/section/Hero';
import Services from '@/section/Services';
import React from 'react'

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
    </>
  );
}

export default Home;