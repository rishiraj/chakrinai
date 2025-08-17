"use client"
import { useState } from "react";
import { Menu, X, Mic } from "lucide-react";
import Image from "next/image";
import Logo from '../../public/assets/logo.png'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full max-w-7xl z-50">
      {/* Main Navigation Bar */}
      <nav className="bg-primary rounded-full px-6 sm:px-8 lg:px-12 py-4 sm:py-6 w-full max-w-6xl mx-auto flex items-center justify-between shadow-lg backdrop-blur-sm h-[100px]">

        {/* Left Navigation Items - Desktop */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <a
            href="#home"
            className="bg-white text-primary rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold text-2xl xl:text-4xl font-caption-handwriting hover:bg-neutral-cream transition-all duration-300 shadow-md"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold text-2xl xl:text-4xl font-caption-handwriting hover:bg-white/10 transition-all duration-300"
          >
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Center Logo */}
        <Image src={Logo} alt="Chakri Nai Logo" className="w-56 h-auto ml-auto lg:mx-auto" />

        {/* Right Navigation Items - Desktop */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <a
            href="#speakers"
            className="text-white rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold text-2xl xl:text-4xl font-caption-handwriting hover:bg-white/10 transition-all duration-300"
          >
            Speakers
          </a>
          <a
            href="#tickets"
            className="text-white rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold text-2xl xl:text-4xl font-caption-handwriting hover:bg-white/10 transition-all duration-300"
          >
            Tickets
          </a>
        </div>

        {/* Spacer for mobile to center logo */}
        <div className="lg:hidden w-10"></div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary rounded-2xl shadow-2xl flex flex-col items-center gap-3 py-6 mt-2 lg:hidden backdrop-blur-sm">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="bg-white text-primary rounded-full px-8 py-3 font-bold text-2xl font-caption-handwriting hover:bg-neutral-cream transition-all duration-300 shadow-md w-4/5 text-center"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-white rounded-full px-8 py-3 font-bold text-2xl font-caption-handwriting hover:bg-white/10 transition-all duration-300 w-4/5 text-center"
          >
            About
          </a>
          <a
            href="#speakers"
            onClick={() => setIsOpen(false)}
            className="text-white rounded-full px-8 py-3 font-bold text-2xl font-caption-handwriting hover:bg-white/10 transition-all duration-300 w-4/5 text-center"
          >
            Speakers
          </a>
          <a
            href="#tickets"
            onClick={() => setIsOpen(false)}
            className="text-white rounded-full px-8 py-3 font-bold text-2xl font-caption-handwriting hover:bg-white/10 transition-all duration-300 w-4/5 text-center"
          >
            Tickets
          </a>
        </div>
      )}

      {/* Tablet Navigation - Medium screens */}
      <div className="hidden md:flex lg:hidden items-center justify-center mt-4">
        <div className="flex items-center gap-4 bg-gradient-to-r from-primary/90 via-accent/90 to-secondary/90 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm">
          <a
            href="#home"
            className="bg-white text-primary rounded-full px-6 py-2 font-bold text-base font-caption-handwriting hover:bg-neutral-cream transition-all duration-300 shadow-md"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white rounded-full px-6 py-2 font-bold text-base font-caption-handwriting hover:bg-white/10 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#speakers"
            className="text-white rounded-full px-6 py-2 font-bold text-base font-caption-handwriting hover:bg-white/10 transition-all duration-300"
          >
            Speakers
          </a>
          <a
            href="#tickets"
            className="text-white rounded-full px-6 py-2 font-bold text-base font-caption-handwriting hover:bg-white/10 transition-all duration-300"
          >
            Tickets
          </a>
        </div>
      </div>
    </div>
  );
}
