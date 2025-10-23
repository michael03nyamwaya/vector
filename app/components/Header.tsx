"use client"
import { useState } from 'react';
import Searchbar from './SearchBar';
import { CircleUserRound, Menu } from 'lucide-react';
import Link from 'next/link';
import ShoppingCart from './ShoppingCart';
import Image from 'next/image';
import Sidenav from './Sidenav';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href='/' className="flex items-center group">
            <div className="relative w-24 lg:w-35 lg:h-12 h-16 xl:w-40 xl:h-12 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <Image 
                src="/logo (2).png" 
                alt="VectorPrinters Logo" 
                fill 
                className='object-contain'
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="#home" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 border-b-2 border-blue-600 pb-1">
              Home
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Services
            </Link>
            <Link href="#shop" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Shop
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Contact
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-6">
            {/* Searchbar - hidden on mobile */}
            <div className="hidden md:block">
              <Searchbar />
            </div>
            
            {/* Shopping cart */}
            <div className="relative">
              <ShoppingCart />
            </div>

            {/* User icon - hidden on mobile */}
            <Link 
              href='/login' 
              className="hidden lg:flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              <button className='min-w-max text-white cursor-pointer py-1 px-2 bg-[#cf7623] rounded-lg hover:bg-[#b5681f] transition duration-200'>
                login
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Search - visible only on mobile */}
        <div className="sm:hidden mt-3">
          <Searchbar />
        </div>
      </div>

      {/* Sidenav */}
      <Sidenav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}