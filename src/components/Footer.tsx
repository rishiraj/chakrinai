import { merriweatherSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className={cn(merriweatherSans.className, merriweatherSans.variable, "bg-primary text-white py-12 px-8")}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left">
          {/* STAY UP TO DATE Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-3xl uppercase">Stay Up To Date</h3>
            <p className="text-lg">Want in on the behind-the-scenes roast?</p>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 pr-10 bg-secondary text-black placeholder-[#A0522D] rounded-full focus:outline-none focus:ring-2 focus:ring-white text-lg"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-black hover:text-yellow-400 transition-colors text-xl">
                →
              </button>
            </div>

            {/* Logo */}
            <div className="relative">
              <img
                className="w-32 h-auto"
                src="/assets/logo.png"
                alt="Chakri Nai Logo"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* CONTACT US Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-3xl uppercase">Contact Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-semibold">Email Address:</p>
                <p className="text-lg">chakrinaishow@gmail.com</p>
              </div>

            </div>
          </div>

          {/* EXPLORE Column */}
          <div className="space-y-6">
            <h3 className="font-bold text-3xl uppercase">Explore</h3>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-lg hover:text-yellow-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-lg hover:text-yellow-400 transition-colors"
              >
                About the show
              </a>
              <a
                href="#"
                className="block text-lg hover:text-yellow-400 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#"
                className="block text-lg hover:text-yellow-400 transition-colors"
              >
                Meet the Panel
              </a>
              <a
                href="#"
                className="block text-lg hover:text-yellow-400 transition-colors"
              >
                Apply as participant
              </a>
              <a
                href="#"
                className="block text-lg hover:text-yellow-400 transition-colors"
              >
                Tickets
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#A0522D] text-center">
          <p className="text-lg text-[#D2691E]">© 2025, Chakri Nai</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
