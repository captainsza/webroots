"use client";
import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-white p-8">
      <h2 className="text-4xl font-bold">Services</h2>
      <p className="mt-2 text-lg">We create innovative strategies to enable transformative growth</p>
      <div className="mt-8 flex space-x-4 overflow-hidden">
        <div className="flex-shrink-0 w-80 rounded-lg p-6 bg-[#f3e5f5] hover:bg-[#e1bee7] transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold">Residential</h3>
          <p className="mt-2 text-base">Validating project market fit in real estate</p>
          <Button className="mt-6 w-full bg-[#ab47bc] hover:bg-[#9c27b0] text-white transition duration-300 ease-in-out">
            Learn More
          </Button>
        </div>
        <div className="flex-shrink-0 w-80 rounded-lg p-6 bg-[#e0f2f1] hover:bg-[#b2dfdb] transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold">VAS</h3>
          <div className="mt-2 space-y-2">
            <p className="text-lg font-medium">6000</p>
            <p className="text-sm">Strong Relationships</p>
            <p className="text-lg font-medium">250+</p>
            <p className="text-sm">Engagements through brand campaigns & events</p>
          </div>
          <div className="mt-6 flex space-x-2">
            <Image
              alt="Prestige Group"
              className="h-6 w-6"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "24/24",
                objectFit: "cover",
              }}
              width="24"
            />
            <Image
              alt="The Wadhwa Group"
              className="h-6 w-6"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "24/24",
                objectFit: "cover",
              }}
              width="24"
            />
          </div>
          <Button className="mt-6 w-full bg-[#26a69a] hover:bg-[#00897b] text-white transition duration-300 ease-in-out">
            Learn More
          </Button>
        </div>
        <div className="flex-shrink-0 w-80 rounded-lg p-6 bg-[#fff3e0] hover:bg-[#ffe0b2] transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold">Land Services</h3>
          <p className="mt-2 text-base">The right combination of experience & expertise</p>
          <Button className="mt-6 w-full bg-[#ffab40] hover:bg-[#ff8f00] text-white transition duration-300 ease-in-out">
            Learn More
          </Button>
        </div>
        <div className="flex-shrink-0 w-80 rounded-lg p-6 bg-[#e3f2fd] hover:bg-[#bbdefb] transition duration-300 ease-in-out">
          <h3 className="text-2xl font-semibold">Retail</h3>
          <p className="mt-2 text-base">Transforming Retail Competitive Advantage</p>
          <Button className="mt-6 w-full bg-[#42a5f5] hover:bg-[#1e88e5] text-white transition duration-300 ease-in-out">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

