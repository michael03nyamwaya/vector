import { ShoppingCartIcon } from "lucide-react"
import Link from "next/link"
import useCartStore from "../stores/cartStores"

function ShoppingCart() {
  const {cart} = useCartStore()
  return (
    <Link href="/cart" className="relative">
    <div>
        <ShoppingCartIcon className="w-4 h-4 text-gray-400 cursor-pointer hover:text-[#0c0b0b] "/>
        <span className="absolute -top-3 -right-3 bg-amber-600 flex items-center text-white justify-center text-xs font-medium  w-4 h-4 rounded-full ">{cart.length}</span>
    </div>
    </Link>
  )
}

export default ShoppingCart
