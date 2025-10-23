import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { X, LogIn, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface SidenavProps {
  isOpen: boolean
  onClose: () => void
}

function Sidenav({ isOpen, onClose }: SidenavProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent body scroll when sidenav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleLinkClick = () => {
    onClose()
  }

  if (!mounted) return null

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="right" 
        className="w-[85vw] max-w-sm sm:max-w-md p-0 bg-white border-r border-gray-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
          <Link 
            href="/" 
            className="flex items-center"
            onClick={handleLinkClick}
          >
            <div className="relative w-14 h-10 flex items-center justify-center overflow-hidden">
              <Image 
                src="/logo (2).png" 
                alt="VectorPrinters Logo" 
                fill
                className="object-contain"
              />
            </div>
          </Link>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex flex-col  h-full pt-8 px-6">
          <nav className="flex flex-col space-y-6">
            <Link 
              href="#home" 
              className="text-blue-600 font-semibold text-lg py-2 pl-4"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link 
              href="#services" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg py-2 pl-4"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link 
              href="#shop" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg py-2 pl-4"
              onClick={handleLinkClick}
            >
              Shop
            </Link>
            <Link 
              href="#about" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg py-2 pl-4"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-lg py-2 pl-4"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </nav>

          {/* Bottom section */}
          <div className="mt-auto pb-8 space-y-4">
            <div className="border-t border-gray-200 pt-6">
              <Link 
                href="/login"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50"
                onClick={handleLinkClick}
              >
                <LogIn className="w-5 h-5" />
                <span className="font-medium">Login / Register</span>
              </Link>
            </div>
            
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Sidenav