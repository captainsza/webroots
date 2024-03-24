import React from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/herosection';
import CarouselData from "@/components/component/carousel-data"; // Capitalize the component name
import heroImage1 from '@/public/herosection/hero2.webp';
import heroImage2 from '@/public/herosection/hero3.webp';
import heroImage3 from '@/public/herosection/hero4.webp';
import heroImage4 from '@/public/herosection/hero5.webp';
import ScreenMotion from '@/components/component/screenmotion';
import Browsermore from '@/components/component/browsetext';
import V0 from '@/components/component/a0';
import Services from '@/components/component/services';
import ClientTestimonials from '@/components/component/ClientTestimonials';
import V1 from '@/components/component/a1';
import V2 from '@/components/component/a2';
import { Footer } from '@/components/component/footer';

export default function Home() {
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

  return (
    <main className='overflow-hidden'>
      <Navbar />
      <HeroSection
        title="Fuelling Growth through Innovation"
        subtitle="Leveraging new technologies and bringing transformation in Indian real estate."
        buttonText="Discover our Services"
        backgroundImages={heroImages}
        buttonLink="/services"
      />
      <CarouselData />
      <ScreenMotion/>
      <Browsermore/>

      <V0/>
      <Services/>
      <ClientTestimonials/>
      <V1/>
      <V2/>
      <Footer/>
    </main>
  );
}
