"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

export default function V0() {
  const [image, setImage] = useState<string>("/v0/start-image.png");
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const handleHover = (img: string, button: string) => {
    setImage(img);
    setIsHovered(button);
  }

  return (
    <div className="bg-[#e6e6e6]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Customized solutions, crafted in collaboration!</h1>
          <p className="text-xl text-gray-700 mb-6">If you are a</p>
          <div className="flex gap-4">
            <Button onMouseOver={() => handleHover("/v0/start-image.png", "developers")} className="bg-white border border-gray-300 text-gray-700 hover:bg-[#6d28d9] hover:text-white">
              Developers
              {isHovered === "developers" && (
                <motion.span
                  initial={{ x: -10 }}
                  animate={{ x: 10 }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                >
                  <KeyboardArrowRightRoundedIcon/>
                </motion.span>
              )}
            </Button>
            <Button onMouseOver={() => handleHover("/v0/start-image.png", "partners")} className="bg-white border border-gray-300 text-gray-700 hover:bg-[#6d28d9] hover:text-white">
              Channel Partners
              {isHovered === "partners" && (
                <motion.span
                  initial={{ x: -10 }}
                  animate={{ x: 10 }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                >
                  <KeyboardArrowRightRoundedIcon/>
                </motion.span>
              )}
            </Button>
            <Button onMouseOver={() => handleHover("/v0/start-image.png", "corporates")} className="bg-white border border-gray-300 text-gray-700 hover:bg-[#6d28d9] hover:text-white">
              Corporates
              {isHovered === "corporates" && (
                <motion.span
                  initial={{ x: -10 }}
                  animate={{ x: 10 }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                >
                  <KeyboardArrowRightRoundedIcon/>
                </motion.span>
              )}
            </Button>
            <Button onMouseOver={() => handleHover("/v0/start-image.png", "consumers")} className="bg-white border border-gray-300 text-gray-700 hover:bg-[#6d28d9] hover:text-white">
              Consumers
              {isHovered === "consumers" && (
                <motion.span
                  initial={{ x: -10 }}
                  animate={{ x: 10 }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                >
                  <KeyboardArrowRightRoundedIcon/>
                </motion.span>
              )}
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <motion.img
            alt="Person"
            className="rounded-full"
            height="400"
            src={image}
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  )
}
