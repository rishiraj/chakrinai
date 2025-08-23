"use client";
import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import { cn } from "@/lib/utils"; // assuming your cn util is here

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
    const sectionIds = ["home", "how-it-works", "roast-masters", "tickets"] as const;
    const navbarHeight = isScrolled ? 70 : 100;
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

    setActiveId(computeActive());
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isScrolled]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-50 w-11/12 mx-auto lg:w-full flex justify-center transition-all duration-700",
        isScrolled ? "-top-2 pt-8 sm:-top-4 sm:pt-16" : "top-2 pt-16 sm:top-4 sm:pt-32"
      )}
    >
      <nav
        className={cn(
          "bg-primary rounded-full px-3 sm:px-6 lg:px-12 w-full max-w-5xl mx-auto flex items-center justify-between shadow-lg backdrop-blur-sm transition-all duration-700 border",
          isScrolled
            ? "h-[60px] border-neutral-cream shadow-2xl"
            : "h-[80px] border-neutral-cream/40",
          isOpen && "border-b-2 border-neutral-cream/60"
        )}
      >
        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          {[
            { id: "home", label: "Home" },
            { id: "how-it-works", label: "About" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className={cn(
                "rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold font-caption-handwriting text-2xl  transition-all duration-700",
                isScrolled ? "xl:text-2xl xl:py-2" : "xl:text-4xl xl:py-4",
                activeId === id
                  ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                  : "text-white hover:bg-white/10"
              )}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-700 border border-white/30"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={isScrolled ? 22 : 26} /> : <Menu size={isScrolled ? 22 : 26} />}
        </button>

        {/* Center Logo */}
        <Image
          src={Logo}
          alt="Logo"
          className={cn(
            "h-auto ml-auto lg:mx-auto transition-all duration-700",
            isScrolled ? "w-32 sm:w-40" : "w-44 sm:w-56"
          )}
          priority
        />

        {/* Right Links */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          {[
            { id: "roast-masters", label: "Roast Masters" },
            { id: "tickets", label: "Tickets" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                if (id !== "tickets") {
                  e.preventDefault();
                  scrollToSection(id);
                }
              }}
              className={cn(
                "rounded-full px-6 xl:px-8 py-3 xl:py-4 font-bold font-caption-handwriting text-2xl xl:text-4xl transition-all duration-700",
                isScrolled ? "xl:text-2xl xl:py-2" : "xl:text-4xl xl:py-4",
                activeId === id
                  ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                  : "text-white hover:bg-white/10"
              )}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="lg:hidden w-10"></div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-primary rounded-2xl shadow-2xl flex flex-col items-center gap-2 py-3 mt-2 lg:hidden backdrop-blur-sm border border-neutral-cream/60">
          {["home", "how-it-works", "roast-masters", "tickets"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
                setIsOpen(false);
              }}
              className={cn(
                "rounded-full px-6 py-2 font-bold text-lg font-caption-handwriting transition-all duration-700 w-11/12 text-center capitalize",
                activeId === id
                  ? "bg-white text-primary shadow-md hover:bg-neutral-cream"
                  : "text-white hover:bg-white/10"
              )}
            >
              {id === "how-it-works" ? "About" : id.replace("-", " ")}
            </a>
          ))}
        </div>
      )}

      {/* Tablet Nav */}
      <div className="hidden md:flex lg:hidden items-center justify-center mt-2">
        <div className="flex items-center gap-2 bg-gradient-to-r from-primary/90 via-accent/90 to-secondary/90 rounded-full px-4 py-2 shadow-lg backdrop-blur-sm border border-neutral-cream/60">
          {["home", "how-it-works", "roast-masters", "tickets"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className={cn(
                "rounded-full px-6 py-2 font-bold text-base font-caption-handwriting transition-all duration-700",
                activeId === id
                  ? "bg-white text-primary hover:bg-neutral-cream"
                  : "text-white hover:bg-white/10"
              )}
            >
              {id === "how-it-works" ? "About" : id.replace("-", " ")}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
