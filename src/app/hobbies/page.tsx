"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter, usePathname } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Hobbies() {
  const [hasMounted, setHasMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const [suggestion, setSuggestion] = useState(""); 

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return <div className="w-full min-h-screen bg-black" />;

  const navItems = [
    ["Home", "/home"],
    ["Hobbies", "/hobbies"],
    ["About", "/about"],
    ["Contact", "/contact"],
    ["Education", "/education"],
  ];

  const handleSendSuggestion = () => {
    if (!suggestion) return alert("Please enter a suggestion!");
    console.log("Project suggestion:", suggestion);
    alert("Suggestion sent! Thank you!");
    setSuggestion(""); 
  };

  return (
    <div className="w-full min-h-screen bg-black font-sans relative overflow-hidden">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "backdrop-blur-md bg-gray-900/70 shadow-xl border-b border-white/10"
            : "bg-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 lg:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center space-x-4 md:space-x-6">
            <img 
              src="/images/cat.jpg" 
              alt="Logo" 
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover" 
            />
            <h1 className="text-2xl sm:text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MY PORTFOLIO
            </h1>
          </div>

          <ul className="flex flex-wrap justify-center md:flex-nowrap items-center gap-2 md:gap-4 mt-2 md:mt-0">
            {navItems.map(([label, url]) => {
              const isActive = pathname === url;
              return (
                <li key={label}>
                  <Button
                      onClick={() => router.push(url)}
                      className={`inline-block px-3 sm:px-4 py-2 text-white rounded-lg shadow-lg 
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

      <section className="relative z-10 max-w-[90%] sm:max-w-[85%] mx-auto mt-40 md:mt-48 px-4 sm:px-6 md:px-6 lg:px-6 py-16 sm:py-20 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">
        <div className="flex-1 flex flex-col space-y-4 sm:space-y-6 text-center md:text-left pl-0 md:pl-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
            Hobbies
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">
            These are some of my hobbies
          </h2>

          <p className="text-gray-300 max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
            I enjoy listening to music playing video games and playing guitar during my free time and
            these activities help me relax and recharge.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Suggest a new hobby..."
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="w-full max-w-md mx-auto md:mx-0 px-4 py-3 rounded-lg bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={handleSendSuggestion}
                className="px-6 py-3 bg-red-600/30 border border-red-500/60 text-white rounded-lg shadow-lg hover:bg-red-600/60 transition duration-300 backdrop-blur-md"
              >
                Send Suggestion
              </Button>

              <Button
                onClick={() => router.push("/")}
                className="px-6 py-3 bg-red-600/30 border border-red-500/60 text-white rounded-lg shadow-lg hover:bg-red-600/60 transition duration-300 backdrop-blur-md"
              >
                Back
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <div className="w-48 sm:w-64 md:w-[420px] lg:w-[520px] xl:w-[600px] animate-float rounded-3xl overflow-visible shadow-2xl">
            <Carousel className="rounded-2xl shadow-2xl bg-black/40 border border-white/10 p-0">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img src="/images/game.jpg" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60" />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img src="/images/guitarr.jpg" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60" />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img src="/images/earphones.jpg" className="w-full h-full object-cover" />
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
