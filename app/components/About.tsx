import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Animated background elements - lighter version */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="text-gray-900 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-blue-50 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
              <span className="text-sm font-medium tracking-wider text-blue-700">About Us</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Elevate Your
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Brand Presence
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-6 text-md text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">Vector Printers Ltd</strong> is your strategic partner in creating unforgettable brand experiences. We combine innovative design with cutting-edge technology to deliver solutions that make your brand stand out.
              </p>
              <p>
                From concept to execution, we provide end-to-end services including graphic design, professional printing, dynamic signage, and digital solutions—all designed to build trust and reliability for your business.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Creative Brand Strategy",
                "Professional Printing",
                "Digital Presence",
                "Signage Solutions",
                "Promotional Products",
                "Event Management"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors">{feature}</span>
                </div>
              ))}
            </div>

            {/* Single Contact Button */}
            <div className="pt-8">
              <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <span className="relative z-10 flex items-center gap-3">
                  Contact Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="hidden lg:block relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden group aspect-[4/5] shadow-2xl">
              <Image 
                src="/va.jpg" 
                alt="Vector Printers - Brand Development Services" 
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay gradient - lighter for white background */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600/90 rounded-2xl border border-blue-500 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-blue-100">Projects</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-600/90 rounded-2xl border border-cyan-500 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 delay-200 shadow-xl">
                <div className="text-center">
                  <div className="text-xl font-bold text-white">360°</div>
                  <div className="text-xs text-cyan-100">Service</div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - removed since we have white background */}
    </section>
  );
}