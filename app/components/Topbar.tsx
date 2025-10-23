// components/Topbar.tsx
"use client";

import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram,
  Music 
} from "lucide-react";
import { useState, useEffect } from "react";

const Topbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down & past 100px - hide topbar
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up - show topbar
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar, { passive: true });

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div className={`
      bg-[#000000] text-white py-3 px-4 text-sm  
      transition-transform duration-300 ease-in-out
      ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-6 mb-3 md:mb-0 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Mail className="w-4 h-4 text-green-300" />
            <a 
              href="mailto:info@vectorprinters.co.ke"
              className="text-gray-200 hover:text-white transition-colors"
            >
              info@vectorprinters.co.ke
            </a>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <MapPin className="w-4 h-4 text-green-200" />
            <span className="text-[#0eeb50] font-semibold">
              Accra Rd, Superior Arcade - 5th Floor
            </span>
          </div>
        </div>

        {/* Right Section - Social Icons (Hidden on small/medium, visible on large screens) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            href="https://facebook.com/your-vector-printers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0e33eb] hover:text-white transition-colors transform hover:scale-110"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link 
            href="https://twitter.com/your-vector-printers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0e33eb] hover:text-white transition-colors transform hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link 
            href="https://instagram.com/your-vector-printers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0e33eb] hover:text-white transition-colors transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link 
            href="https://tiktok.com/@your-vector-printers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#0e33eb] hover:text-white transition-colors transform hover:scale-110"
            aria-label="TikTok"
          >
            <Music className="w-5 h-5" />
          </Link>
        </div>

        {/* Mobile Social Icons - Visible only on small screens */}
        <div className="flex lg:hidden items-center gap-4 mt-2 md:mt-0">
          <Link 
            href="https://facebook.com/your-vector-printers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </Link>
          <Link 
            href="https://instagram.com/your-vector-printers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </Link>
          <Link 
            href="https://tiktok.com/@your-vector-printers" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="TikTok"
          >
            <Music className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;