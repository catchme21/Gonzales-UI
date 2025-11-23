"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

export default function Contact() {
  const [hasMounted, setHasMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert("Please fill in all fields before sending your message.");
      return;
    }

    console.log("Message sent:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", phone: "", email: "", message: "" }); 
  };

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

          <ul className="flex items-center space-x-4">
            {navItems.map(([label, url]) => {
              const isActive = pathname === url;
              return (
                <li key={label}>
                  <Button
                    onClick={() => router.push(url)}
                    className={`px-4 py-2 text-white rounded-lg shadow-lg transition-transform duration-300 transform-gpu backdrop-blur-md ${
                      isActive
                        ? "bg-red-600/60 border border-red-500/70 scale-110"
                        : "hover:bg-red-600/60 hover:scale-110"
                    }`}
                  >
                    {label}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* PROFILE PANEL */}
      <section className="relative z-10 max-w-[85%] mx-auto mt-40 md:mt-48 px-30 py-20 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT */}
        <div className="flex-1 flex flex-col space-y-6 pl-25">
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
            Contact Me
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-200">
            Send me a message
          </h2>

          <p className="text-gray-300 max-w-md">
            Fill in your details and your message below. I’ll get back to you as soon as possible. You can also direct message me lygonzales@gmail.com or on my social media accounts.
          </p>

          {/* BACK BUTTON */}
          <Button
            onClick={() => router.push("/")}
            className="w-fit mt-6 px-6 py-3 bg-red-600/30 border border-red-500/60 text-white rounded-lg shadow-lg hover:bg-red-600/60 transition duration-300 backdrop-blur-md"
          >
            Back
          </Button>
        </div>

        {/* RIGHT SIDE CONTACT FORM */}
        <div className="flex-1 flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-4 bg-black/40 p-6 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none h-32"
            />
            <Button
              type="submit"
              className="w-fit mt-2 px-6 py-3 bg-red-600/30 border border-red-500/60 text-white rounded-lg shadow-lg hover:bg-red-600/60 transition duration-300 backdrop-blur-md"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
