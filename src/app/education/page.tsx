"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRouter, usePathname } from "next/navigation";

export default function Education() {
  const [hasMounted, setHasMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return <div className="w-full min-h-screen bg-black" />;

  const navItems: [string, string][] = [
    ["Home", "/home"],
    ["Hobbies", "/hobbies"],
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Education", "/education"],
  ];

  return (
    <div className="w-full min-h-screen bg-black font-sans relative overflow-hidden">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "backdrop-blur-md bg-gray-900/70 shadow-xl border-b border-white/10"
            : "bg-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center space-x-6">
            <img src="/images/cat.jpg" alt="Logo" className="w-16 h-16 rounded-full object-cover" />
            <h1 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MY PORTFOLIO
            </h1>
          </div>

          <ul className="flex flex-wrap items-center gap-4">
            {navItems.map(([label, url]) => {
              const isActive = pathname === url;
              return (
                <li key={label}>
                  <Button
                    onClick={() => router.push(url)}
                    className={`inline-block px-4 py-2 text-white rounded-lg shadow-lg 
                      backdrop-blur-md transition-transform duration-300 transform-gpu
                      ${isActive ? "bg-red-600/60 border border-red-500/70 scale-110" : "hover:bg-red-600/60 hover:scale-110"}`}
                  >
                    {label}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <section className="relative z-10 max-w-[90%] sm:max-w-[85%] mx-auto mt-40 md:mt-48 px-4 sm:px-6 md:px-20 py-16 sm:py-20 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 overflow-x-auto">
        <div className="flex-1 flex flex-col space-y-6 min-w-[280px]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
            Education
          </h1>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Elementary - Concepcion Grande Elementary School</li>
              <li>Highschool - Camarines Sur National Highschool</li>
              <li>Current/College - Naga College Foundation Inc.</li>
            </ul>
          </h3>

          <Button
            onClick={() => router.push("/")}
            className="w-fit mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3 bg-red-600/30 border border-red-500/60 text-white rounded-lg shadow-lg hover:bg-red-600/60 transition duration-300 backdrop-blur-md"
          >
            Back
          </Button>
        </div>

        <div className="flex-1 flex justify-center min-w-[300px] sm:min-w-[420px] md:min-w-[520px] lg:min-w-[600px] mt-6 md:mt-0">
          <div className="w-[300px] sm:w-[420px] md:w-[520px] lg:w-[600px] animate-float rounded-3xl overflow-visible shadow-2xl flex-shrink-0">
            <Carousel className="rounded-2xl shadow-2xl bg-black/40 border border-white/10 p-0">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img src="/images/grande.jpg" className="w-full h-full object-cover" alt="Slide 1" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60" />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img src="/images/camhigh.jpg" className="w-full h-full object-cover" alt="Slide 2" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60" />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img src="/images/ncf.jpg" className="w-full h-full object-cover" alt="Slide 3" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60" />
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
