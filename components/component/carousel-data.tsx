"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { TabsTrigger, TabsList, Tabs } from "@/components/ui/tabs";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { tabContent } from './cardsdata'; // Make sure this path is correct

const CarouselData = () => {
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState('research');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    const cycleDuration = 10; // Duration in seconds for one complete cycle
    controls.start({
      translateX: ['-100%', '0%'], // Adjust these values based on your carousel's width
      transition: { repeat: Infinity, duration: cycleDuration, ease: "linear" },
    });
  }, [controls, activeTab]);

  const handleMouseEnter = (speedAdjustment: number) => {
    controls.stop();
    controls.start({
      translateX: ['-100%', '0%'],
      transition: { repeat: Infinity, duration: 1000 / speedAdjustment, ease: "linear" },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      translateX: ['-100%', '0%'],
      transition: { repeat: Infinity, duration: 10, ease: "linear" },
    });
  };

  return (
    <section className="overflow-hidden  mb-16">
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
      <div onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
        <motion.div className="carousel-container flex space-x-4" animate={controls}>
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
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselData;
