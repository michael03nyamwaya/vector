"use client"

import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Play, Pause } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "I'm a total beginner. Can I still follow along?",
    answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of the most useful that is so beautiful and engaging for all skill levels."
  },
  {
    id: 2,
    question: "What Let your interior tell your story?",
    answer: "Our approach focuses on creating designs that reflect your unique brand story and personality. We believe every print should communicate your narrative through carefully crafted visuals and messaging."
  },
  {
    id: 3,
    question: "How long does printing usually take?",
    answer: "Standard printing projects typically take 3-5 business days. Rush services are available for urgent projects with 24-48 hour turnaround times."
  },
  {
    id: 4,
    question: "Do you offer design services?",
    answer: "Yes! We have a team of professional designers who can help bring your vision to life or create custom designs from scratch to meet your specific needs."
  }
];

// Animation variants with fixed easing types
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] // Fixed: cubic-bezier array instead of string
    }
  }
};

const faqItemVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1] // Fixed: cubic-bezier array
    }
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1] // Fixed: cubic-bezier array
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] // Fixed: cubic-bezier array
    }
  }
};

const floatVariants = {
  floating: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1] // Fixed: cubic-bezier array
    }
  }
};

const buttonHoverVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "rgba(255, 255, 255, 1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(1);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  return (
    <section id='section' className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          
          {/* Left Side - Video with Overlapping Image */}
          <motion.div 
            className="relative h-[500px] w-full lg:w-[90%]"
            variants={itemVariants}
          >
            {/* Video Container */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl h-full w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Video Player */}
              <div className="w-full h-full relative flex items-center justify-center bg-gray-900">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  onClick={toggleVideoPlayback}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                >
                  <source src="/r1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Play/Pause Button */}
                <motion.div 
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    isVideoPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                  }`}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button 
                    onClick={toggleVideoPlayback}
                    className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm"
                    variants={buttonHoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <AnimatePresence mode="wait">
                      {isVideoPlaying ? (
                        <motion.div
                          key="pause"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Pause size={28} className="text-blue-600" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="play"
                          initial={{ scale: 0, rotate: 180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: -180 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Play size={28} className="text-blue-600 ml-1" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Overlapping Image with Blue Background */}
            <motion.div 
              className="absolute -bottom-8 -right-8 w-2/3 max-w-[280px]"
              variants={imageVariants}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#d1b514]"
                variants={floatVariants}
                animate="floating"
              >
                {/* Square Container with Blue Background */}
                <div className="relative aspect-square w-full h-full p-4">
                  <Image 
                    src="/imgg.png" 
                    alt="Decorative print sample"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Background Decorative Elements */}
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1] // Fixed: cubic-bezier array
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-28 h-28 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1], // Fixed: cubic-bezier array
                delay: 1
              }}
            />
          </motion.div>

          {/* Right Side - FAQ */}
          <motion.div 
            className="flex flex-col justify-center h-full"
            variants={containerVariants}
          >
            <div className="w-full">
              {/* Header */}
              <motion.div 
                className="mb-8"
                variants={itemVariants}
              >
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  FREQUENTLY ASKED QUESTION
                </motion.div>
                <motion.h2 
                  className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight"
                  variants={itemVariants}
                >
                  What Our Clients Ask
                  <motion.span 
                    className="block text-blue-600"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: [0.42, 0, 0.58, 1] // Fixed: cubic-bezier array
                    }}
                    style={{
                      background: "linear-gradient(90deg, #2563eb, #06b6d4, #2563eb)",
                      backgroundSize: "200% 200%",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    About Printnow
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed"
                  variants={itemVariants}
                >
                  Get answers to the most common questions about our printing services.
                </motion.p>
              </motion.div>

              {/* FAQ Items */}
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ 
                      borderColor: "#3b82f6",
                      scale: 1.01,
                      transition: { duration: 0.2 }
                    }}
                    layout
                  >
                    <motion.button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-blue-50 transition-colors duration-200"
                      aria-expanded={openItem === item.id}
                      aria-controls={`faq-answer-${item.id}`}
                      whileHover={{ backgroundColor: "rgba(239, 246, 255, 1)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold"
                          whileHover={{ scale: 1.1 }}
                          animate={{ 
                            backgroundColor: openItem === item.id ? "#3b82f6" : "#dbeafe",
                            color: openItem === item.id ? "white" : "#2563eb"
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.id}
                        </motion.div>
                        <span className="text-lg font-semibold text-gray-800 pr-4 text-left">
                          {item.question}
                        </span>
                      </div>
                      <motion.div 
                        className="flex-shrink-0 ml-4"
                        animate={{ rotate: openItem === item.id ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }} // Fixed: cubic-bezier array
                      >
                        <ChevronDown 
                          size={20} 
                          className={openItem === item.id ? "text-blue-600" : "text-gray-500"} 
                        />
                      </motion.div>
                    </motion.button>
                    
                    <AnimatePresence>
                      {openItem === item.id && (
                        <motion.div 
                          id={`faq-answer-${item.id}`}
                          role="region"
                          aria-labelledby={`faq-question-${item.id}`}
                          initial="closed"
                          animate="open"
                          exit="closed"
                          variants={faqItemVariants}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 ml-12">
                            <motion.div 
                              className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"
                              initial={{ width: 0 }}
                              animate={{ width: 48 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            />
                            <motion.p 
                              className="text-gray-600 leading-relaxed text-base"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3, duration: 0.4 }}
                            >
                              {item.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}