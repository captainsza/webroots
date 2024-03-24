"use client";
import { Button } from "@/components/ui/button";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { motion } from "framer-motion";
export default function V2() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center px-4 py-16 bg-white">
                <h1 className="text-7xl font-bold text-black">
                    We have much more, <br/>let&apos;s get started.
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                    <a href="#">Latest Trends</a> | <a href="#">Technology & Innovation</a> | <a href="#">Industry Relations</a> | <a href="#">Business News</a> | <a href="#">Market Research</a>
                </p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Button className="bg-[#FFC700] text-black px-6 py-3 flex items-center justify-between group">
                        <a href="#" className="text-2xl font-medium">Collaborate with us</a>
                        <KeyboardArrowRightRoundedIcon className="text-black ml-2 transition-transform duration-500 ease-in-out group-hover:translate-x-2" />
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
