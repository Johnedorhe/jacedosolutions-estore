"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Added image paths to your slide data
const SLIDES = [
  {
    id: 1,
    title: "Fresh Seasonal Arrivals",
    description: "Discover our newest premium collection crafted for everyday comfort.",
    buttonText: "Shop Collection",
    link: "/list?category=new",
    imageSrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-zinc-900",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "The Denim Essentials",
    description: "Upgrade your wardrobe with our top-tier, long-lasting fits.",
    buttonText: "View Denim",
    link: "/list?name=denim",
    imageSrc: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-blue-950",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Exclusive Online Offers",
    description: "Get up to 30% off select products this week only.",
    buttonText: "Save Now",
    link: "/list?category=sale",
    imageSrc: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    bgColor: "bg-zinc-100",
    textColor: "text-zinc-900",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  return (
    <div 
      className="relative w-full max-w-5xl h-[450px] overflow-hidden rounded-xl group my-8 shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Viewport */}
      <div 
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {SLIDES.map((slide) => (
          <div 
            key={slide.id} 
            className={`w-full h-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 ${slide.bgColor} ${slide.textColor}`}
          >
            {/* Left Side: Text Content */}
            <div className="flex flex-col justify-center px-8 md:px-16 space-y-4 order-2 md:order-1 py-6 md:py-0">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                {slide.title}
              </h2>
              <p className="text-xs md:text-sm opacity-85 font-normal max-w-sm">
                {slide.description}
              </p>
              <div className="pt-2">
                <Link 
                  href={slide.link}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium text-xs md:text-sm px-5 py-2.5 rounded-md transition-colors shadow-sm"
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>

            {/* Right Side: Image Content */}
            <div className="relative w-full h-full order-1 md:order-2 bg-zinc-200">
              <Image
                src={slide.imageSrc}
                alt={slide.title}
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover"
                priority={slide.id === 1}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrow Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-zinc-900 shadow hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-zinc-900 shadow hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-8 md:left-16 flex gap-3 z-10">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              currentIndex === index ? "bg-red-600 w-8" : "bg-zinc-400/50 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
