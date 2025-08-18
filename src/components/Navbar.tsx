"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const sectionIds = ["home", "how-it-works", "roast-masters"];
    const offsetFromTop = 120; // fixed navbar height + spacing

    const computeActive = () => {
      let bestId = sectionIds[0];
      let bestDistance = Number.POSITIVE_INFINITY;
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - offsetFromTop);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = id;
        }
      });
      return bestId;
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const next = computeActive();
        setActiveId((prev) => (prev !== next ? next : prev));
        ticking = false;
      });
    };

    const onResize = () => {
      const next = computeActive();
      setActiveId((prev) => (prev !== next ? next : prev));
    };

    // Initialize
    setActiveId(computeActive());
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 w-full flex justify-center">
      {/* Main Navigation Bar */}
      <nav className="bg-primary rounded-full px-6 sm:px-8 lg:px-12 py-4 sm:py-6 w-full max-w-6xl mx-auto flex items-center justify-between shadow-lg backdrop-blur-sm h-[100px]">
        {/* Left Navigation Items - Desktop */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <a
            href="#home"
            className={`rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold text-2xl xl:text-4xl font-caption-handwriting transition-all duration-300 ${
              activeId === "home"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            Home
          </a>
          <a
            href="#how-it-works"
            className={`rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold text-2xl xl:text-4xl font-caption-handwriting transition-all duration-300 ${
              activeId === "how-it-works"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
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
        <Image
          src={Logo}
          alt="Chakri Nai Logo"
          className="w-56 h-auto ml-auto lg:mx-auto"
        />

        {/* Right Navigation Items - Desktop */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <a
            href="#roast-masters"
            className={`rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold text-2xl xl:text-4xl font-caption-handwriting transition-all duration-300 ${
              activeId === "roast-masters"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            Roast Masters
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
            className={`rounded-full px-8 py-3 font-bold text-2xl font-caption-handwriting transition-all duration-300 w-4/5 text-center ${
              activeId === "home"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            Home
          </a>
          <a
            href="#how-it-works"
            onClick={() => setIsOpen(false)}
            className={`rounded-full px-8 py-3 font-bold text-2xl font-caption-handwriting transition-all duration-300 w-4/5 text-center ${
              activeId === "how-it-works"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            About
          </a>
          <a
            href="#roast-masters"
            onClick={() => setIsOpen(false)}
            className={`rounded-full px-8 py-3 font-bold text-2xl font-caption-handwriting transition-all duration-300 w-4/5 text-center ${
              activeId === "roast-masters"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            Roast Masters
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
            className={`rounded-full px-6 py-2 font-bold text-base font-caption-handwriting transition-all duration-300 ${
              activeId === "home"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            Home
          </a>
          <a
            href="#how-it-works"
            className={`rounded-full px-6 py-2 font-bold text-base font-caption-handwriting transition-all duration-300 ${
              activeId === "how-it-works"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            About
          </a>
          <a
            href="#roast-masters"
            className={`rounded-full px-6 py-2 font-bold text-base font-caption-handwriting transition-all duration-300 ${
              activeId === "roast-masters"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            Roast Masters
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
