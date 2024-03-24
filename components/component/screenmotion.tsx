"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { FiChevronLeft as ChevronLeftIcon, FiChevronRight as ChevronRightIcon } from 'react-icons/fi';

export default function ScreenMotion() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screens = [
    "/Designer (1).png",
    "/Designer (2).png",
    "/Designer (3).png",
  ];

  return (
    <div className="relative bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 mt-16 mb-16">
      <div className="container mx-auto px-4 py-12 flex justify-between items-center">
        <Button className="bg-white rounded-full p-4 shadow-lg animate-bounce z-20" onClick={() => setCurrentIndex((currentIndex - 1 + screens.length) % screens.length)}>
          <ChevronLeftIcon className="text-black" />
        </Button>
        <div className="grid grid-cols-3 gap-4">
          {screens.map((image, index) => (
            <motion.div
              key={index}
              initial={{ x: (index - currentIndex) * 200, opacity: 0.5, scale: 0.8, zIndex: 0 }}
              animate={{ x: (index - currentIndex) * 200, opacity: index === currentIndex ? 1 : 0.5, scale: index === currentIndex ? 1.2 : 0.8, zIndex: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`${index === currentIndex ? "z-10" : ""}`}
            >
              <Image
                alt="Mobile App Screen"
                className={`mx-auto ${index === currentIndex ? 'animate-motion-path' : ''}`}
                height="500"
                src={image}
                style={{ aspectRatio: "250/500", objectFit: "cover" }}
                width="250"
              />
            </motion.div>
          ))}
        </div>
        <Button className="bg-white rounded-full p-4 shadow-lg animate-bounce z-20" onClick={() => setCurrentIndex((currentIndex + 1) % screens.length)}>
          <ChevronRightIcon className="text-black" />
        </Button>
      </div>
      <Link className="absolute top-4 right-4 bg-white py-2 px-4 text-sm font-semibold rounded-md shadow animate-pulse" href="#">
        View All
      </Link>
    </div>
  );
}
