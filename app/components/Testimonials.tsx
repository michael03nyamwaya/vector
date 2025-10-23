"use client"

import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'David ',
    role: 'Marketing Director',
    content: 'The quality of prints exceeded my expectations! The colors were vibrant and the shipping was incredibly fast. Will definitely order again!',
    avatar: "/m3.jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: 'Alex chege',
    role: 'Small Business Owner',
    content: 'As a small business, finding affordable yet high-quality printing has been a game changer. The on-demand service saved us so much inventory cost!',
    avatar: "/m2.jpeg",
    rating: 4
  },
  {
    id: 3,
    name: 'Emily ',
    role: 'Event Planner',
    content: 'Perfect for our event materials! The team was responsive and the products arrived right on time. Our clients loved the professional touch.',
    avatar: "/f2.jpeg",
    rating: 5
  },
  {
    id: 4,
    name: 'kelvin Nzau',
    role: 'Creative Director',
    content: 'The attention to detail and the quality of the paper used are exceptional. Our brand materials have never looked better!',
    avatar: "/m4.jpeg",
    rating: 5
  },
  {
    id: 5,
    name: 'Jessica',
    role: 'Founder, Startup Co.',
    content: 'The customer service is top-notch. They helped us with the design and the final product was delivered ahead of schedule. Highly recommended!',
    avatar: "/f1.jpeg",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance testimonials
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating 
          ? "fill-yellow-400 text-yellow-400 drop-shadow-sm" 
          : "text-gray-300"
        }
      />
    ));
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id='testimonies' className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-200/10 rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from businesses that transformed their printing experience
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div 
          className="max-w-6xl mx-auto mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 relative border border-white/20">
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-purple-200/40">
              <Quote size={80} />
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Profile Section */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative inline-block">
                  <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2 shadow-lg">
                    <div className="bg-white rounded-full p-1">
                      <div className="flex">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-800">{testimonials[currentIndex].name}</h3>
                  <p className="text-purple-600 font-medium">{testimonials[currentIndex].role}</p>
                  <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                    <span className="text-amber-500 text-lg font-bold">{testimonials[currentIndex].rating}.0</span>
                    <div className="flex">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 text-center lg:text-left">
                <blockquote className="text-2xl md:text-3xl leading-relaxed text-[#1a73d9] italic font-light">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                {/* Navigation Arrows */}
                <div className="flex justify-center lg:justify-end items-center gap-4 mt-8">
                  <button 
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-100 hover:scale-105 transition-all duration-300 group"
                  >
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex 
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500 w-8' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  <button 
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-100 hover:scale-105 transition-all duration-300 group"
                  >
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}