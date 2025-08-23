"use client";

import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStack from "@/components/TechStack";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 justify-center items-center sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <TechStack />
        {/* <Grid /> */}
        <RecentProjects />
        {/* <Clients /> */}
        {/* <Experience />
        <Approach /> */}
        <Footer />
      </div>
    </main>
  );
}
