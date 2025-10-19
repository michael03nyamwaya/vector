import Link from 'next/link'
import React from 'react'

function ViewAll() {
  return (
   <div className="mx-20 mt-30 flex flex-col gap-7 mb-10">
          <button className="bg-[#c1dd46] w-max p-2 rounded-2xl text-white font-semibold text-2xl">
            Case studies section
          </button>
          <div className="flex items-center lg:flex-row justify-between">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
              How Print-On-Demand <span>Drop Shipping Works</span>
            </p>
            <Link
              href="/products" 
              className="text-lg ring ring-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500 p-2 rounded-md"
            >
              View all products
            </Link>
          </div>
        </div>
  )
}

export default ViewAll
