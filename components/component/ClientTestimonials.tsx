"use client";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
export default function ClientTestimonials() {
  return (
    <div className="bg-[#00ADEF] py-16 px-8">
      <div className="flex items-center justify-between">
        <KeyboardArrowLeftRoundedIcon className="text-white text-4xl" />
        <div className="max-w-3xl text-center">
          <h2 className="text-white text-5xl font-bold mb-6">When you succeed, we succeed!</h2>
          <p className="text-white text-lg mb-6">
            ANAROCK has been stupendous in its approach towards entire spectrum of services be it Strategic Advisory &
            Consulting, Industry Research, Valuations or Real Estate & Infrastructure Investment Management. The team
            has demonstrated excellent synergy creation in some landmark deal closures and have been successful in
            integration of value systems across the industry. We look forward to...
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
              <Image
                alt="Rajiv Kamra"
                height="96"
                src="/v0/start-image.png"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
            </div>
            <div className="text-left">
              <div className="text-white font-bold">Rajiv Kamra</div>
              <div className="text-white">Head - Real Estate, Corporate & Investment Banking</div>
              <div className="text-white">IndusInd Bank</div>
            </div>
          </div>
          <div className="mt-6">
            <Button className="bg-white text-[#00ADEF] hover:bg-[#00ADEF] hover:text-white">View All</Button>
          </div>
        </div>
        <KeyboardArrowRightRoundedIcon className="text-white text-4xl" />
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex space-x-1">
          <DotIcon className="text-[#FFD700] text-xl" />
          <DotIcon className="text-white text-xl" />
          <DotIcon className="text-white text-xl" />
          <DotIcon className="text-white text-xl" />
        </div>
      </div>
    </div>
  )
}


function DotIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  )
}
