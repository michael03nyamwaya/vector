import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:ml-6 grid-cols-1 md:grid-cols-4 gap-8 ">
          <div>
            <div className="flex items-center mb-4">
              <Link href='/' className="flex items-center group">
            <div className="relative w-24 lg:w-35 lg:h-12 h-16 xl:w-40 xl:h-12 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
              <Image 
                src="/logoo.png" 
                alt="VectorPrinters Logo" 
                fill 
                className='object-contain'
                priority
              />
            </div>
          </Link>

            </div>
            <p className="text-gray-400 text-sm">
              Professional printing services for all your business needs.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FDB71A]">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FDB71A]">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Business Cards</a></li>
              <li><a href="#" className="hover:text-white transition">Brochures</a></li>
              <li><a href="#" className="hover:text-white transition">Banners</a></li>
              <li><a href="#" className="hover:text-white transition">Packaging</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FDB71A]">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PrintNow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}