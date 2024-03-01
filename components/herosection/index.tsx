"use client";
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImages: StaticImageData[]; // Now an array of images
  buttonLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, buttonText, backgroundImages, buttonLink }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Function to handle indicator click
  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative h-[800px] w-full overflow-hidden flex items-center justify-center bg-cover bg-no-repeat bg-center text-white">
      {/* Background Image Carousel */}
      {backgroundImages.map((image, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={image} alt="Background" layout="fill" objectFit="cover" className="z-0" />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10" />

      {/* Text Content */}
      <div className="z-20 p-8 text-left absolute left-0 top-1/2 transform -translate-y-1/2 ml-10">
        <h1 className="text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl mb-6">{subtitle}</p>
        <a href={buttonLink} className="inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50">
          {buttonText}
        </a>
      </div>


      {/* Slide Indicators */}
      <div className="absolute bottom-8 z-20 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button key={index} className={`h-2 w-2 rounded-full cursor-pointer ${index === currentImageIndex ? 'bg-yellow-500' : 'bg-white opacity-50'}`} onClick={() => handleIndicatorClick(index)}></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
