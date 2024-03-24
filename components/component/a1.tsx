"use client";
import { Button } from "@/components/ui/button"
import Image from "next/image";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
export default function V1() {
return (
    <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Its the people who drive our success</span>
                <span className="block text-indigo-600">We have fostered a culture that empowers our team.</span>
            </h2>
            <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                    <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Join us
                        <KeyboardArrowRightRoundedIcon className="ml-3 -mr-1 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
            <div className="bg-[#d8b6ff] p-4 text-center">
                <p className="text-lg font-semibold">Great work requires collaboration</p>
                <p className="mt-4 text-3xl font-bold">2200+ Professionals</p>
            </div>
            <div className="aspect-w-16 aspect-h-9">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/watch?v=V7d5KyRcF-k"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="bg-[#a3ffa3] p-4 text-center">
                <p className="text-lg font-semibold">Different but Equal</p>
                <Image
                    alt="Colored pencils"
                    className="mx-auto mt-4"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "200/100",
                        objectFit: "cover",
                    }}
                    width="200"
                />
            </div>
            <div className="bg-[#ffb6d9] p-4 text-center">
                <p className="text-lg font-semibold">Empowering careers, building futures</p>
                <Image
                    alt="People working"
                    className="mx-auto mt-4"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "200/100",
                        objectFit: "cover",
                    }}
                    width="200"
                />
            </div>
        </div>
    </div>
)
}


