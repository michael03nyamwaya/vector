import { Search } from 'lucide-react'
import React from 'react'

export default function Searchbar() {
  return (
    <div className='hidden lg:flex items-center gap-2 rounded-xl ring-1 ring-gray-300 py-1 px-2 shadow-md'>
      <Search className='w-4 h-4 text-gray-500'/>
      <input id='search' placeholder='search...' className='text-sm outline-0'/>
    </div>
  )
}
