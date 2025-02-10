"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const tags = [
  { name: "Food", image: "/images/food.jpg" },
  { name: "Animal", image: "/images/animal.jpg" },
  { name: "Car", image: "/images/car.jpg" },
  { name: "Sport", image: "/images/sport.jpg" },
  { name: "Music", image: "/images/music.jpg" },
  { name: "Technology", image: "/images/technology.jpg" },
  { name: "Abstract", image: "/images/abstract.jpg" },
];

export default function TotTags() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-[1512px] h-[68px] mx-auto mt-[30px] bg-[#F5F5F5] rounded-xl flex items-center px-[16px]">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 z-10 bg-white p-2 rounded-full shadow-md hidden tablet:flex"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>

      {/* Scrollable Tag Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden gap-[20px] scrollbar-hide scroll-smooth w-full"
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className="relative w-[150px] h-[44px] tablet:w-[160px] tablet:h-[48px] rounded-full overflow-hidden flex items-center justify-center shadow-md transition-all hover:scale-105"
          >
            <Image
              src={tag.image}
              alt={tag.name}
              width={160}
              height={48}
              className="absolute inset-0 object-cover opacity-70 rounded-full"
            />
            {/* Dark Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full" />
            <span className="relative text-white font-medium text-sm z-10">
              #{tag.name}
            </span>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        className="absolute right-2 z-10 bg-white p-2 rounded-full shadow-md hidden tablet:flex"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
}
