"use client";
import React, { useState, useEffect, useRef } from 'react';
import { TabsTrigger, TabsList, Tabs } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { tabContent } from './cardsdata';


const CarouselData = () => {
  const carouselRef = useRef(null);
  const [activeTab, setActiveTab] = useState('research');
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  let animationFrameId: any;

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  const scrollCarousel = () => {
    if (carouselRef.current) {
      (carouselRef.current as HTMLDivElement).scrollLeft += isHoveringLeft ? -2 : 2; // Adjust the scroll speed if needed
      animationFrameId = window.requestAnimationFrame(scrollCarousel);
    }
  };

  useEffect(() => {
    animationFrameId = window.requestAnimationFrame(scrollCarousel);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isHoveringLeft, isHoveringRight]); // Re-run the effect if hovering state changes

  // Handlers to set the hovering state based on mouse position
  const handleMouseOver = (position: any) => {
    if (position === 'left') {
      setIsHoveringLeft(true);
      setIsHoveringRight(false);
    } else if (position === 'right') {
      setIsHoveringRight(true);
      setIsHoveringLeft(false);
    }
  };

  const handleMouseOut = () => {
    setIsHoveringLeft(false);
    setIsHoveringRight(false);
  };

  return (
    <section className="h-[800px] w-full overflow-hidden">
      <h2 className="text-4xl font-bold mb-4">Latest in Real Estate</h2>
      <Tabs className="mb-8">
        <TabsList>
          {Object.keys(tabContent).map((tabKey) => (
            <TabsTrigger 
              key={tabKey}
              value={tabKey}
              className={`text-lg font-semibold cursor-pointer ${activeTab === tabKey ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab(tabKey)}
            >
              {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="relative" ref={carouselRef}
        onMouseOver={() => window.cancelAnimationFrame(animationFrameId)}
        onMouseOut={() => (animationFrameId = window.requestAnimationFrame(scrollCarousel))}
      >
       <div className="carousel-container flex space-x-4 snap-x snap-mandatory">
          {tabContent[activeTab].map((card, index) => (
            <Card key={index} className="carousel-card w-[300px] shrink-0">
              <CardHeader>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={card.image}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
                <p className="text-xs text-gray-500 mt-2">{`${card.date} | ${card.category}`}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CarouselData;