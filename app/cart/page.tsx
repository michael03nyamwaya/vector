"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { CartItemsType, ShippingFormInputs, PaymentFormInputs } from "../types"
import { MoveRight, Trash2 } from "lucide-react"
import ShippingForm from "../components/ShippingForm"
import PaymentForm from "../components/PaymentForm"
import { useState } from "react"
import Image from "next/image"
import useCartStore from "../stores/cartStores"

const steps = [
  {
    id: 1,
    name: "Shopping Cart"
  },
  {
    id: 2,
    name: "Shipping address"
  },
  {
    id: 3,
    name: "Payment"
  },
]

function CartPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [shippingForm, setShippingForm] = useState<ShippingFormInputs>()
  const [paymentForm, setPaymentForm] = useState<PaymentFormInputs>()

  const activestep = parseInt(searchParams.get('step') || '1')

  const { cart, removeFromCart } = useCartStore()

  // Calculate totals
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const discount = 10
  const shippingFee = 10
  const total = subtotal - discount + shippingFee

  return (
    <div className="mx-8 md:mx-10 lg:mx-12 xl:mx-15 mt-10 flex flex-col gap-8 items-center justify-center mb-16">
      {/* title */}
      <h1 className="mt-16 text-2xl font-bold text-[#0a5fad]">Your shopping Cart</h1>
      
      {/* steps */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 xl:gap-18">
        {steps.map(step => (
          <div className={`flex items-center gap-2 pb-4 border-b-2 ${step.id === activestep ? "border-gray-800" : "border-gray-400"}`} key={step.id}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white ${step.id === activestep ? "bg-gray-800" : "bg-gray-400"}`}>
              {step.id}
            </div>
            <p className={`text-md font-medium ${step.id === activestep ? "text-gray-800" : 'text-gray-400'}`}>
              {step.name}
            </p>
          </div>
        ))}
      </div>
      
      {/* steps & details */}
      <div className="w-full flex flex-col md:w-[90%] md:flex-row gap-16 lg:w-[80%] mx-auto">
        {/* steps */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 rounded-lg flex flex-col gap-8 p-4">
          {activestep === 1 ? (
            cart.length > 0 ? (
              cart.map(item => (
                <div key={item.id} className="flex items-center justify-between">
                  {/* Image & details */}
                  <div className="flex gap-8">
                    <div className="relative w-32 h-32 rounded-lg bg-gray-50 overflow-hidden">
                      <Image src={item.image} alt={item.name} fill className="object-contain" />
                    </div>
                    {/* details */}
                    <div className="flex flex-col justify-between">
                      <div className="">
                        <p className="text-sm font-semibold">{item.name}</p>
                        <p className="mt-2 text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <p>KSH {item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  {/* delete button */}
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="h-8 w-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3"/>
                  </button>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty</p>
            )
          ) : activestep === 2 ? (
            <ShippingForm setShippingForm={setShippingForm}/>
          ) : activestep === 3 && shippingForm ? (
            <PaymentForm setPaymentForm={setPaymentForm} />
          ) : (
            <p className="text-sm text-gray-500">Please fill the shipping form to continue</p>
          )}
        </div>
        
        {/* details */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 rounded-lg flex flex-col gap-8 p-4 h-max">
          <h2 className="font-bold">Cart Details</h2>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">SubTotal</p>
              <p className="font-semibold">
                KSH {subtotal.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Discount</p>
              <p className="font-semibold">
                KSH {discount.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Shipping fee</p>
              <p className="font-semibold">
                KSH {shippingFee.toFixed(2)}
              </p>
            </div>
            <hr className="border-gray-200"/>
            <div className="flex justify-between">
              <p className="text-gray-800 font-bold">Total</p>
              <p className="font-semibold">
                KSH {total.toFixed(2)}
              </p>
            </div>
          </div>
          
          {activestep === 1 && cart.length > 0 && (
            <button 
              onClick={() => router.push("/cart?step=2", {scroll: false})} 
              className="w-full bg-gray-700 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              continue 
              <MoveRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartPage