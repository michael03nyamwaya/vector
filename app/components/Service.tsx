"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileImage, FileVideoCamera, LayoutTemplate, Megaphone, Printer, Signature, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const serviceData = [
    {
        name:"GRAPHIC DESIGN",
        icon:<FileImage />,
        description:"Professional printing services that bring your designs to life with exceptional quality Professional printing services that bring your designs to life with exceptional quality and precision for all your business needs.",
        serviceList:[
        "Branding",
        "Corporate Identity",
        "Packaging Design",
        "SMM Design",
        "Markerting Collateral",
        "Advertisement Design",
        "Exhibition Stall Design",
        "Interior Design",
        ],
        image:"/images/g.jpeg"
    },
    {
        name:"SIGNAGE",
        icon:<Signature />,
        description:"Professional printing services that bring your designs to life with exceptional quality Professional printing services that bring your designs to life with exceptional quality and precision for all your business needs.",
        serviceList:[
        "3d/2d Backlit signs",
        "Monument Signs",
        "Reception Signs",
        "Saftey Signs",
        "Traffic Signs",
        "Indoor & Outdoor Branding",
        "Office/lobby/department Signs"
        ],
        image:"/images/s.jpeg"
    },
    {
        name:"PRINTING",
        icon:<Megaphone />,
        description:"Professional printing services that bring your designs to life with exceptional quality Professional printing services that bring your designs to life with exceptional quality and precision for all your business needs.",
        serviceList:[
        "Catalogs",
        "packaging",
        "Brochures",
        "Stationeries",
        "Annual Reports",
        "Standees",
        "Bags",
        "Magazines",
        "Calendars",
        "Posters & Banners",
        "NoteBooks/Diaries",
        "vehicle Branding",
        "Panaflex Flex Print"
        ],
        image:"/images/pr.jpeg"
    },
    {
        name:"WEBSITE DEVELOPMENT",
        icon:<Printer />,
         description:"Professional printing services that bring your designs to life with exceptional quality Professional printing services that bring your designs to life with exceptional quality and precision for all your business needs.",
        serviceList:[
        "Ecommerce Website",
        "Bussiness Website",
        "Blog Website",
        "Non-profit website",
        "Travel Website",
        "Book Website"
        ],
        image:"/images/w.jpeg"
    },
    {
        name:"PROMOTIONAL PRODUCTS",
        icon:<LayoutTemplate />,
         description:"Professional printing services that bring your designs to life with exceptional quality Professional printing services that bring your designs to life with exceptional quality and precision for all your business needs.",
        serviceList:[
        "Bottles",
        "TShirts & Shirts",
        "Pens",
        "Hats",
        "Name Tags",
        "Banners",
        "NoteBooks"
        ],
        image:"/images/pp.jpeg"
    },
    {
        name:"VIDEO & PHOTOGRAPHY",
        icon:<FileVideoCamera />,
        description:"Professional printing services that bring your designs to life with exceptional quality Professional printing services that bring your designs to life with exceptional quality and precision for all your business needs.",
        serviceList:[
        "Video Production",
        "Motion Graphics",
        "Video Editing",
        "Animation",
        ],
        image:"/images/van.jpg"
    }
]

const Service = () => {
    const [activeTab, setActiveTab] = useState(serviceData[0].name)
    
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const listItemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4
            }
        }
    }

    const tabVariants = {
        inactive: {
            scale: 1,
            transition: { duration: 0.2 }
        },
        active: {
            scale: 1.02,
            transition: { 
                duration: 0.3,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: { duration: 0.2 }
        }
    }

    return (
        <section id="services" className="pt-4 lg:pt-10 bg-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-3">
                <motion.div 
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#ebca0e] rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div 
                    className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-500 rounded-full blur-2xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
                <motion.div 
                    className="absolute top-1/2 right-1/3 w-32 h-32 bg-purple-500 rounded-full blur-2xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-12 lg:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
                        Our <span className="bg-gradient-to-r from-[#ebca0e] to-amber-400 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Elevate your brand with our comprehensive suite of professional services.
                    </p>
                </motion.div>
                
                {/* Tabs Section */}
                <div className="flex w-full flex-col lg:flex-row gap-8 lg:gap-12">
                    <Tabs 
                        defaultValue={serviceData[0].name} 
                        onValueChange={(value)=>setActiveTab(value)} 
                        className="w-full"
                    >
                        {/* Tab List - Vertical on left */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            <TabsList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 w-full lg:w-[320px] flex-shrink-0 h-fit">
                                {serviceData.map((item, index)=>{
                                    return (
                                        <motion.div
                                            key={item.name}
                                            variants={itemVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            custom={index}
                                        >
                                            <TabsTrigger 
                                                value={item.name} 
                                                asChild
                                            >
                                                <motion.div
                                                    className={`w-full cursor-pointer h-17 rounded-xl flex items-center p-0 relative overflow-hidden ${
                                                        activeTab===item.name 
                                                        ? "bg-gradient-to-r from-[#f5af17] to-[#ccc911] shadow-2xl" 
                                                        : "bg-white/80 hover:bg-white hover:shadow-lg border border-gray-200"
                                                    }`}
                                                    variants={tabVariants}
                                                    initial="inactive"
                                                    whileHover="hover"
                                                    animate={activeTab===item.name ? "active" : "inactive"}
                                                >
                                                    {/* Animated Background */}
                                                    <motion.div 
                                                        className={`absolute inset-0 ${
                                                            activeTab===item.name 
                                                            ? "bg-gradient-to-r from-[#ebca0e]/10 to-amber-400/10" 
                                                            : "group-hover:bg-gradient-to-r group-hover:from-gray-50 group-hover:to-gray-100"
                                                        }`}
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ duration: 0.3 }}
                                                    />
                                                    
                                                    {/* Icon Container */}
                                                    <motion.div 
                                                        className={`w-10 h-10 flex items-center justify-center rounded-lg ml-3 transition-all duration-500 z-10 ${
                                                            activeTab===item.name 
                                                            ? "bg-gradient-to-br from-[#ebca0e] to-amber-500 text-white shadow-lg" 
                                                            : "bg-white text-gray-600 shadow-sm group-hover:text-[#ebca0e]"
                                                        }`}
                                                        whileHover={{ scale: 1.1 }}
                                                        animate={activeTab===item.name ? { scale: 1.1 } : { scale: 1 }}
                                                    >
                                                        {item.icon}
                                                    </motion.div>
                                                    
                                                    {/* Service Name */}
                                                    <div className="flex-1 px-3 text-left z-10">
                                                        <span className={`font-bold text-sm tracking-wide transition-all duration-300 ${
                                                            activeTab===item.name 
                                                            ? "text-white" 
                                                            : "text-gray-700 group-hover:text-gray-900"
                                                        }`}>
                                                            {item.name}
                                                        </span>
                                                    </div>

                                                    {/* Active Indicator */}
                                                    {activeTab===item.name && (
                                                        <motion.div 
                                                            className="absolute right-3"
                                                            initial={{ scale: 0, rotate: -180 }}
                                                            animate={{ scale: 1, rotate: 0 }}
                                                            transition={{ 
                                                                type: "spring", 
                                                                stiffness: 200, 
                                                                damping: 10 
                                                            }}
                                                        >
                                                            <ArrowRight className="w-4 h-4 text-white" />
                                                        </motion.div>
                                                    )}
                                                </motion.div>
                                            </TabsTrigger>
                                        </motion.div>
                                    )
                                })}
                            </TabsList>
                            
                            {/* Tab Content - Amazing Container */}
                            <div className="flex-1 lg:w-[70%] relative rounded-2xl overflow-hidden min-h-[500px]">
                                <div className="relative z-10 p-6 lg:p-8 h-full bg-white rounded-2xl">
                                    <AnimatePresence mode="wait">
                                        {serviceData.map((item) => (
                                            activeTab === item.name && (
                                                <motion.div
                                                    key={item.name}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="hidden"
                                                    variants={containerVariants}
                                                    className="h-full flex flex-col"
                                                >
                                                    {/* Title Section */}
                                                    <motion.div 
                                                        className="mb-2 lg:mb-4"
                                                        variants={itemVariants}
                                                    >
                                                        <h3 className="text-xl lg:text-2xl font-black text-transparent leading-tight bg-gradient-to-r from-[#eba50e] to-[#756d3f] bg-clip-text ">
                                                            {item.name} <span className="">SERVICES</span>
                                                        </h3>
                                                    </motion.div>
                                                    
                                                    {/* Description */}
                                                    <motion.p 
                                                        className="text-base lg:text-md text-gray-600 mb-8 leading-relaxed max-w-4xl"
                                                        variants={itemVariants}
                                                    >
                                                        {item.description}
                                                    </motion.p>
                                                    
                                                    {/* Image and List Container */}
                                                    <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-8">
                                                        {/* Image Section */}
                                                        <motion.div 
                                                            className="w-full lg:w-[55%] flex-shrink-0"
                                                            variants={imageVariants}
                                                        >
                                                            <div className="relative w-full h-[280px] lg:h-[300px] rounded-2xl overflow-hidden group">
                                                                <Image 
                                                                    src={item.image} 
                                                                    alt={`${item.name} service example`} 
                                                                    fill
                                                                    className="object-cover transition-all duration-500 group-hover:scale-105"
                                                                    priority
                                                                />
                                                                
                                                                {/* Subtle Border */}
                                                                <div className="absolute inset-0 border border-gray-200 rounded-2xl pointer-events-none group-hover:border-[#ebca0e]/30 transition-all duration-300"></div>
                                                            </div>
                                                        </motion.div>
                                                        
                                                        {/* List Section */}
                                                        <motion.div 
                                                            className="w-full lg:w-[45%]"
                                                            variants={containerVariants}
                                                        >
                                                            <div className="mb-4">
                                                                <h4 className="text-xl font-bold text-gray-900 flex items-center">
                                                                    <motion.div 
                                                                        className="w-2 h-2 bg-gradient-to-r from-[#ebca0e] to-amber-400 rounded-full mr-3"
                                                                        animate={{
                                                                            scale: [1, 1.5, 1],
                                                                            opacity: [1, 0.7, 1]
                                                                        }}
                                                                        transition={{
                                                                            duration: 2,
                                                                            repeat: Infinity,
                                                                            ease: "easeInOut"
                                                                        }}
                                                                    />
                                                                    What We Offer
                                                                </h4>
                                                            </div>
                                                            <motion.ul 
                                                                className="grid grid-cols-3 md:grid-cols-2 gap-2"
                                                                variants={containerVariants}
                                                            >
                                                                {item.serviceList.map((service, index)=>(
                                                                    <motion.li 
                                                                        key={index} 
                                                                        className="flex items-center gap-2 p-2"
                                                                        variants={listItemVariants}
                                                                        whileHover={{ x: 5 }}
                                                                        transition={{ duration: 0.2 }}
                                                                    >
                                                                        <motion.div 
                                                                            className="w-4 h-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#ebca0e] to-amber-400"
                                                                            whileHover={{ scale: 1.2 }}
                                                                            transition={{ type: "spring", stiffness: 400 }}
                                                                        >
                                                                            <CheckCircle2 className="w-2 h-2 text-white" />
                                                                        </motion.div>
                                                                        <div className="font-semibold italic tracking-wide text-gray-800 group-hover:text-gray-900 transition-colors duration-300 text-sm">
                                                                            {service}
                                                                        </div>
                                                                    </motion.li>
                                                                ))}
                                                            </motion.ul>
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            )
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default Service