import Image from "next/image";

const Mockup = () => {
  return (
    <div className="min-h-[80%] bg-gray-50 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          
          {/* First Mockup */}
          <div className="w-full lg:w-1/2 bg-[#4e279c] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left space-y-6">
              <p className="text-green-100 text-sm font-semibold tracking-widest uppercase">
                LATEST DESIGN
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Book Cover Design
              </h2>
             <a href="#shop">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-[#3ccc1f] hover:text-white transform hover:scale-105 transition duration-300 cursor-pointer ">
                SHOP NOW
              </button>
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <Image 
                  src="/p1.png" 
                  alt="Book Cover Design" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Second Mockup */}
          <div className="w-full lg:w-1/2 bg-[#4e279c] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left space-y-6">
              <p className="text-green-100 text-sm font-semibold tracking-widest uppercase">
                LATEST DESIGN
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Book Cover Design
              </h2>
               <a href="#shop">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-[#3ccc1f] hover:text-white transform hover:scale-105 transition duration-300 cursor-pointer ">
                SHOP NOW
              </button>
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <Image 
                  src="/p1.png" 
                  alt="Book Cover Design" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Mockup;