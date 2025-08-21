"use client";
import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = useCallback((hash: string) => {
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "how-it-works", "roast-masters"] as const;
    const navbarHeight = isScrolled ? 70 : 100; // Adjust navbar height based on scroll state
    const topPadding = 64;
    const totalOffset = navbarHeight + topPadding + 20;

    const computeActive = () => {
      const scrollY = window.scrollY;
      let bestId: string = sectionIds[0];
      let bestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const distance = Math.abs(elementTop - scrollY - totalOffset);
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
      requestAnimationFrame(() => {
        const next = computeActive();
        setActiveId(next);
        ticking = false;
      });
    };

    const initialActive = computeActive();
    setActiveId(initialActive);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isScrolled]);

  // Add scroll listener for navbar state
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Trigger when scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 z-50 w-full flex justify-center transition-all duration-700 ${
        isScrolled ? "-top-4 pt-16" : "top-4 pt-32"
      }`}
    >
      {/* Main Navigation Bar */}
      <nav
        className={`bg-primary rounded-full px-6 sm:px-8 lg:px-12 py-4 sm:py-6 w-full max-w-5xl mx-auto flex items-center justify-between shadow-lg backdrop-blur-sm transition-all duration-700 ${
          isScrolled ? "h-[70px]" : "h-[100px]"
        }`}
      >
        {/* Left Navigation Items - Desktop */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className={`rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold font-caption-handwriting transition-all duration-700 ${
              isScrolled ? "text-xl xl:text-2xl" : "text-2xl xl:text-4xl"
            } ${
              activeId === "home"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            Home
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("how-it-works");
            }}
            className={`rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold font-caption-handwriting transition-all duration-700 ${
              isScrolled ? "text-xl xl:text-2xl" : "text-2xl xl:text-4xl"
            } ${
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
          className="text-white lg:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-700"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={isScrolled ? 24 : 28} />
          ) : (
            <Menu size={isScrolled ? 24 : 28} />
          )}
        </button>

        {/* Center Logo */}
        <Image
          src={Logo}
          alt="Chakri Nai Logo"
          className={`h-auto ml-auto lg:mx-auto transition-all duration-700 ${
            isScrolled ? "w-40" : "w-56"
          }`}
        />

        {/* Right Navigation Items - Desktop */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <a
            href="#roast-masters"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("roast-masters");
            }}
            className={`rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold font-caption-handwriting transition-all duration-700 ${
              isScrolled ? "text-xl xl:text-2xl" : "text-2xl xl:text-4xl"
            } ${
              activeId === "roast-masters"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            Roast Masters
          </a>
          <a
            href="#tickets"
            className={`text-white rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold font-caption-handwriting hover:bg-white/10 transition-all duration-700 ${
              isScrolled ? "text-xl xl:text-2xl" : "text-2xl xl:text-4xl"
            }`}
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
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
              setIsOpen(false);
            }}
            className={`rounded-full px-8 py-3 font-bold text-2xl font-caption-handwriting transition-all duration-700 w-4/5 text-center ${
              activeId === "home"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            Home
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("how-it-works");
              setIsOpen(false);
            }}
            className={`rounded-full px-8 py-3 font-bold text-2xl font-caption-handwriting transition-all duration-700 w-4/5 text-center ${
              activeId === "how-it-works"
                ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            About
          </a>
          <a
            href="#roast-masters"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("roast-masters");
              setIsOpen(false);
            }}
            className={`rounded-full px-8 py-3 font-bold text-2xl font-caption-handwriting transition-all duration-700 w-4/5 text-center ${
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
            className="text-white rounded-full px-8 py-3 font-bold text-2xl font-caption-handwriting hover:bg-white/10 transition-all duration-700 w-4/5 text-center"
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
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className={`rounded-full px-6 py-2 font-bold text-base font-caption-handwriting transition-all duration-700 shadow-md ${
              activeId === "home"
                ? "bg-white text-primary hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            Home
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("how-it-works");
            }}
            className={`rounded-full px-6 py-2 font-bold text-base font-caption-handwriting transition-all duration-700 ${
              activeId === "how-it-works"
                ? "bg-white text-primary hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            About
          </a>
          <a
            href="#roast-masters"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("roast-masters");
            }}
            className={`rounded-full px-6 py-2 font-bold text-base font-caption-handwriting transition-all duration-700 ${
              activeId === "roast-masters"
                ? "bg-white text-primary hover:bg-neutral-cream"
                : "text-white hover:bg-white/10"
            }`}
          >
            Roast Masters
          </a>
          <a
            href="#tickets"
            className="text-white rounded-full px-6 py-2 font-bold text-base font-caption-handwriting hover:bg-white/10 transition-all duration-700"
          >
            Tickets
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
