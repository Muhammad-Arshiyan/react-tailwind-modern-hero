import React from "react";
import sroll_img from "../../../assets/scroll-down.png"

function Hero() {
    return (
        <section
            id="overview"
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-700 to-cyan-400"
        >
            <div className="relative z-10 mx-auto px-6 pt-36 md:pt-48 text-center">

                <h1 className="text-[20px] md:text-[50px] font-bold text-white text-center leading-tight">
                    Discipline will take you <br />places motivation can't.
                </h1>

                <p className="mt-6 text-center  text-white/80 md:text-[16px] text-[13px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat <br />unde hic alias omnis, nulla molestias praesentium cupiditate.
                </p>
                <div className="flex gap-2 md:gap-5 justify-center py-10">
                    <button className="bg-white md:px-5 md:py-3 px-3 py-2 font-semibold rounded-full border-white border-[2px] cursor-pointer md:text-[16px] text-[12px] hover:bg-transparent hover:text-white transition whitespace-nowrap">Schedule a Demo</button>
                    <button className="border border-white border-[2px] text-white px-3 py-2 md:px-5 md:py-3 font-semibold rounded-full cursor-pointer hover:bg-white hover:text-black transition md:text-[16px] text-[12px] whitespace-nowrap">Contact Sales</button>
                </div>
                <div className="flex flex-col items-center justify-center mt-[50px] py-5">
                    <img src={sroll_img} alt="scroll-img" className="w-15 cursor-pointer" />
                    <p className="text-white md:text-[16px] text-[14px]">scroll down</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;