"use client";

import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaBookmark } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  return (
    <nav className="bg-white w-full max-w-[1512px] mx-auto h-[70px] flex items-center ">
      {/* Left: Logo */}
      <div className="flex-shrink-0 text-orange-600 text-xl font-bold">
        <Link href="/">MEGA.news</Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden tablet:flex space-x-6 ml-10">
        {/* Categories Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="text-[#3E3232] hover:text-black text-[16px] font-bold flex items-center gap-[4px] font-roboto"
          >
            Categories
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6.75C5.75 6.75 5.53 6.67 5.37 6.50L1 2.12C0.64 1.80 0.64 1.23 1 0.90C1.32 0.54 1.89 0.54 2.22 0.90L6 4.64L9.74 0.90C10.07 0.54 10.64 0.54 10.97 0.90C11.33 1.23 11.33 1.80 10.97 2.12L6.60 6.50C6.43 6.67 6.21 6.75 6 6.75Z" fill="#3E3232" fillOpacity="0.5"/>
            </svg>
          </button>
          {isCategoriesOpen && (
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md">
              <Link href="/category1" className="block px-4 py-2 hover:bg-gray-100">
                Category 1
              </Link>
              <Link href="/category2" className="block px-4 py-2 hover:bg-gray-100">
                Category 2
              </Link>
            </div>
          )}
        </div>

        {/* Pages Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsPagesOpen(!isPagesOpen)}
            className="text-[#3E3232] hover:text-black text-[16px] font-bold flex items-center gap-[4px] font-roboto"
          >
            Pages
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6.75C5.75 6.75 5.53 6.67 5.37 6.50L1 2.12C0.64 1.80 0.64 1.23 1 0.90C1.32 0.54 1.89 0.54 2.22 0.90L6 4.64L9.74 0.90C10.07 0.54 10.64 0.54 10.97 0.90C11.33 1.23 11.33 1.80 10.97 2.12L6.60 6.50C6.43 6.67 6.21 6.75 6 6.75Z" fill="#3E3232" fillOpacity="0.5"/>
            </svg>
          </button>
          {isPagesOpen && (
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md">
              <Link href="/page1" className="block px-4 py-2 hover:bg-gray-100">
                Page 1
              </Link>
              <Link href="/page2" className="block px-4 py-2 hover:bg-gray-100">
                Page 2
              </Link>
            </div>
          )}
        </div>

        <Link href="/contact-us" className="text-[#3E3232] hover:text-black text-[16px] font-bold font-roboto">
          Contact Us
        </Link>

        <Link href="/about-us" className="text-[#3E3232] hover:text-black text-[16px] font-bold font-roboto">
          About Us
        </Link>
      </div>

      {/* Right: Search, Avatar, Bookmark */}
      <div className="flex items-center space-x-4 ml-auto">
        {/* Search Bar */}
        <div className="relative flex items-center bg-gray-100 px-4 py-2 rounded-full w-[400px]">
          <div className="cursor-pointer text-gray-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="#6B7280" strokeWidth="2"/>
              <path d="M21 21L16.65 16.65" stroke="#6B7280" strokeWidth="2"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search Anything"
            className="bg-transparent text-sm w-full pl-3 focus:outline-none"
          />
        </div>

        {/* User Profile */}
        <div className="relative flex items-center space-x-2 cursor-pointer">
          <Image
            src="/images/food.jpg"
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-gray-700 text-sm">Behzad ▼</span>
        </div>

        {/* Bookmark Icon */}
        <FaBookmark className="text-gray-700 cursor-pointer" />
      </div>
    </nav>
  );
}
