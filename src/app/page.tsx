"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Main() {
  const [hasMounted, setHasMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return <div className="w-full min-h-screen bg-black" />;

  const slides = [
    "/images/nextjs.jpg",
    "/images/tailwind.jpg",
    "/images/tailwindNextjs.png",
  ];

  return (
    <div className="w-full min-h-screen bg-black font-sans relative overflow-hidden">
      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "backdrop-blur-md bg-gray-900/70 shadow-xl border-b border-white/10"
            : "bg-gray-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <img 
              src="/images/cat.jpg" 
              alt="Logo" 
              className="w-16 h-16 rounded-full object-cover" 
            />
            <h1 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MY PORTFOLIO
            </h1>
          </div>
        </div>
      </div>

      {/* PROFILE PANEL */}
      <section className="relative z-10 max-w-7xl mx-auto mt-48 md:mt-56 px-20 py-16 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT */}
        <div className="flex-1 flex flex-col space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
            Welcome
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-200">
            A NextJS Web Application
          </h2>

          <Button
            onClick={() => router.push("/home")}
            className="w-fit mt-6 px-6 py-3 bg-red-600/30 border border-red-500/60 text-white rounded-lg shadow-lg hover:bg-red-600/60 transition duration-300 backdrop-blur-md"
          >
            CLICK ME!
          </Button>
        </div>

        {/* Right Side Carousel */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-80 md:w-[420px] lg:w-[500px] animate-float rounded-3xl overflow-visible shadow-2xl">
            <Carousel loop>
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <Card className="p-0 rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10 transform-gpu transition-transform duration-500 hover:scale-105">
                      <CardContent className="relative aspect-[4/3] p-0">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${slide})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60" />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Carousel Previous Button */}
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 shadow-lg backdrop-blur-md transform-gpu transition-transform duration-300 hover:scale-110" />

              {/* Carousel Next Button */}
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 shadow-lg backdrop-blur-md transform-gpu transition-transform duration-300 hover:scale-110" />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
