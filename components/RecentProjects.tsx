"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20 bg-gr">
      <div className="container mx-auto px-5 max-w-[1200px]">
        <h1 className="text-center text-4xl font-extrabold text-white mb-6">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
          {projects.map((item) => (
            <div
              className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-full sm:w-[48%] lg:w-[30%] hover:scale-105 transition-transform"
              key={item.id}
            >
              <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="font-bold text-xl text-white mb-2">
                {item.title}
              </h1>
              <p className="text-gray-400 text-sm mb-4 line-clamp-5">
                {item.des}
              </p>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black w-10 h-10 flex justify-center items-center -ml-2"
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple text-sm"
                >
                  Check Live Site <FaLocationArrow className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
