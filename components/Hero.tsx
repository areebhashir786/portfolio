import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative pt-36 pb-20 mt-24">
      {/* Background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className="w-full opacity-50" />
      </div>
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background overlay */}
      <div
        className="absolute inset-0 dark:bg-black-100 bg-white 
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] flex items-center justify-center -z-10"
      >
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content */}
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">
          <TextGenerateEffect
            words="Hi! I'm Areeb Hashir"
            className="text-[32px] md:text-5xl lg:text-6xl"
          />

          <p className="md:tracking-wider mb-6 text-sm md:text-lg lg:text-2xl text-gray-200">
            A passionate Full-Stack Developer skilled in building scalable,
            modern, and efficient web solutions.
          </p>

          <a
            href="https://drive.google.com/file/d/1DWlNekjLLuDXaicT1BS6mHvA-tBurQHE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Download Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
