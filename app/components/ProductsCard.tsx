// ProductCard.tsx
"use client"

import { ProductType } from "../types"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import useCartStore from "../stores/cartStores"
import { toast } from "react-toastify"

const Productscard = ({ product }: { product: ProductType }) => {
  const { addToCart } = useCartStore()
  
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1
    })
    toast.success("Product added to cart")
  }
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
      {/* image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[4/3] w-full">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </Link>
      
      {/* description */}
      <div className="flex flex-col gap-3 p-4 flex-grow">
        <h1 className="font-semibold text-base text-gray-800 line-clamp-1">{product.name}</h1>
        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed flex-grow">
          {product.shortDescription}
        </p>
        
        {/* Category badge */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600 capitalize">
            {product.category.replace('-', ' ')}
          </span>
        </div>
       
        {/* price and cart */}
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-base text-[#161416]">KSH {product.price.toFixed(2)}</span>
          <button 
            onClick={handleAddToCart} 
            className="flex items-center gap-1 bg-[#1d1c1d] text-white px-3 py-2 rounded-lg hover:bg-[#fbf9fc] hover:text-black transition-colors duration-200 font-medium text-xs cursor-pointer"
          >
            <ShoppingCart className="w-3 h-3"/>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Productscard;