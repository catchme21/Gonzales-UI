"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter, usePathname } from "next/navigation";

export default function About() {
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
            <img 
              src="/images/cat.jpg" 
              alt="Logo" 
              className="w-16 h-16 rounded-full object-cover" 
            />
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

      <section className="relative z-10 max-w-[85%] mx-auto mt-40 md:mt-48 px-30 py-20 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-x-auto">
        <div className="flex-1 flex flex-col space-y-6 min-w-[300px]">
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
            About Me
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-200">
           This is Lyndon Gonzales the creator of this portfolio website.
          </h2>

          <p className="text-gray-300 max-w-md">
            I'm currently a student at Naga College Foundation pursuing a degree in Bachelor of Science in Computer Science, learning and honing my skills in Web Development.
            Last year i learned the basic concepts of Web Development using HTML, CSS, and JavaScript and the other language which is C and Python. This year, I decided to level up my skills by 
            learning modern web development frameworks like NextJS and TailwindCSS to create more dynamic and visually appealing web applications.
          </p>

          <Button
            onClick={() => router.push("/")}
            className="w-fit mt-6 px-6 py-3 bg-red-600/30 border border-red-500/60 text-white rounded-lg shadow-lg hover:bg-red-600/60 transition duration-300 backdrop-blur-md"
          >
            Back
          </Button>
        </div>

        <div className="flex-1 flex justify-center min-w-[420px] md:min-w-[520px] lg:min-w-[600px] mt-8 md:mt-0">
          <div className="w-[420px] md:w-[520px] lg:w-[600px] animate-float rounded-3xl overflow-visible shadow-2xl flex-shrink-0">
            <Card className="p-0 rounded-2xl overflow-hidden shadow-2xl bg-black/40 border border-white/10">
              <CardContent className="relative aspect-[4/3] p-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/download.jpg')", backgroundPosition: 'center bottom' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/60" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
