import { Phone, ShoppingBag } from "lucide-react"
import Image from "next/image"

function Banner() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full bg-[#FDB71A] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between h-full py-4">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left md:px-4 mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-2 whitespace-nowrap">
              Ready To Get Started
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-semibold text-white/90 mb-4 max-w-md">
              Printed and shipped <span className="text-yellow-300">on demand!</span>
            </p>
            
            {/* Buttons */}
            <div className="flex gap-3 justify-center md:justify-start">
              <button className="flex gap-1 bg-white text-[#664a74] px-6 py-3 rounded-full font-bold text-base hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <ShoppingBag className="text-[#242225]" />
                Shop Now
              </button>
              <button className="flex gap-1 border-2 border-white text-white px-6 py-3 rounded-full font-bold text-base hover:bg-white hover:text-[#664a74] transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
              <Phone className="text-[#1c1a1d]"/>
              Contact Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-end h-full items-center w-full mb-3">
            <div className="relative w-[70vw] h-[70%] md:w-full md:max-w-xs aspect-[2/3] md:h-4/5">
              <Image 
                src="/imgg.png" 
                alt="Printing services showcase" 
                fill 
                className="object-contain drop-shadow-2xl" 
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner