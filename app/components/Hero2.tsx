"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const Hero2 = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants - FIXED: Removed easing properties
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.3
      }
    }
  };

  // Text animates from bottom to top - FIXED: Removed ease property
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
        // Removed: ease: "easeOut"
      }
    }
  };

  // Image animates from top to bottom - FIXED: Removed ease property
  const imageVariants = {
    hidden: { opacity: 0, y: -100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3
        // Removed: ease: "easeOut"
      }
    }
  };

  return (
    <section className='relative py-24 xl:py-0 max-h-screen lg:h-[820px] flex items-center'>
        
      {/* Full Background */}

      {/* Background Image Div */}
      <div className='w-full xl:w-3/4 h-full absolute top-0 left-0 z-10 lg:rounded-tr-[500px] overflow-hidden'>
        <Image 
          src="/bg.jpg"
          alt="Background"
          fill
          className='object-cover'
          priority
        />
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-[#861619] mix-blend-multiply'></div>
      </div>
      
      {/* Container */}
      <div className="relative z-40 w-full max-w-[1150px] mx-auto h-full flex items-center">
        <motion.div 
          className='flex flex-col lg:flex-row mx-auto lg:mx-0 text-left w-full'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <div className='w-full max-w-[600px] lg:max-w-[700px] px-4 xl:px-0 text-left'>
            <motion.h1 
              variants={itemVariants}
              className='text-5xl lg:text-5xl xl:text-6xl font-bold tracking-wide mb-8 text-white'
            >
              <span className='bg-gradient-to-r from-[#3250a8] to-[#3277a8] bg-clip-text text-transparent mix-blend-overlay'>
               We Don't Just Print <br/> <span className='bg-[#FDB71A] bg-clip-text'>We Build Brands</span>
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className='max-w-[480px] mx-0 lg:mx-0 mb-12 text-white text-lg leading-relaxed'
            >
             We are a full-service brand development company specializing in Graphic Design, Digital & Offset Printing, Indoor/Outdoor Signage, Laser Cutting, and Promotional Products. We transform your vision into a powerful brand identity with speed, quality, and unwavering integrity.
            </motion.p>
            
            {/* Buttons */}
            <motion.div 
              variants={itemVariants}
              className='flex gap-4 items-center justify-center lg:justify-start max-w-max'
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className='bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-200 flex items-center gap-2 group font-medium'
              >
                Our services
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('shop')}
                className='border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-200 flex items-center gap-2 group font-medium'
              >
                Shop now
                <ArrowUpRight className='w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200' />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Main Image - Now visible on lg screens and above */}
      <motion.div 
        className='absolute z-20 right-0 hidden lg:block mt-6'
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className='relative w-[500px] lg:w-[600px] xl:w-[680px] h-[300px] lg:h-[380px] xl:h-[430px] rounded-bl-[200px] lg:rounded-bl-[300px] z-20 overflow-hidden'
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Image 
            src="/h4.jpeg"
            alt="Vector Printers" 
            fill 
            className='object-contain'
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero2