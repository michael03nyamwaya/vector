"use client"
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">

      {/* Background Image with object-cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Vector Printing Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay gradient from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#242222] via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 min-h-screen flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-16">
          {/* Text Content - Left Side */}
          <div className="flex-1 text-white animate-fade-in">
            <div className="max-w-2xl space-y-6 lg:space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  Vector{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Printing
                  </span>{" "}
                  Services
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                  High-quality printing solutions for businesses and individuals. 
                  Fast, reliable, and affordable.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
                  Our Services
                </button>
                <a href="#shop">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transform transition-all duration-300 active:scale-95">
                    Shop Now
                  </button>
                </a>
              </div>
              
              
            </div>
          </div>

          {/* Optional: Right side image placeholder - uncomment if you want to add a product image */}
        
          <div className="hidden lg:flex lg:w-1/2 justify-end">
            <div className="relative aspect-[3/4] xl:h-[600px] w-full max-w-2xl">
              <Image 
                src="/t.png" 
                alt="Vector Printing Services" 
                fill
                className="object-contain object-center drop-shadow-2xl"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>

     
    </section>
  );
}