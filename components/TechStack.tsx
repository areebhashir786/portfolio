import React from "react";
import { techStack } from "@/data";
import Image from "next/image";

const TechStack = () => {
  return (
    <section className="mt-40 py-20 px-10 bg-gray-900">
      <div className="container mx-auto px-5">
        {/* Heading */}
        <h2 className="text-center text-4xl font-extrabold text-white mb-6">
          My Skills & Expertise
        </h2>
        <p className="text-center text-gray-400 text-lg mb-12">
          A blend of technologies and tools I work with to design, build, and
          optimize solutions.
        </p>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <Image
                src={tech.img}
                alt={tech.name}
                className="w-16 h-16 mb-4 object-contain"
                width={64}
                height={64}
              />
              <p className="text-white text-center text-sm font-medium">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
