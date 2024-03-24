"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { FiChevronRight as ArrowRightIcon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Browsermore() {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-[500px] text-white clip-[polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)]" style={{ backgroundImage: "url('/o1.jpg')", }}>
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4 text-center">
        <h1 className="text-5xl font-bold">Looking to buy your dream home?</h1>
        <p className="text-xl">Explore our exclusive projects</p>
        <Button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`bg-[#FFC107] text-black hover:bg-[#FFCA28] hover:text-black px-6 py-3 inline-flex items-center space-x-2 rounded-md transition-all duration-300 transform`}
        >
          <span>Browse</span>
          <motion.div animate={{ x: isHovered ? -10 : 0 }} transition={{ duration: 0.5 }}>
            <ArrowRightIcon className="w-4 h-4" />
          </motion.div>
        </Button>
      </div>
    </div>
  );
}
