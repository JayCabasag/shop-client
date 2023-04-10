import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="h-16 bg-white w-full flex items-center justify-center px-2 shadow-md shadow-slate-200 sticky top-0">
     <div className='flex container items-center'>
      <Image 
        src='/icon.svg'
        width={50}
        height={50}
        alt='shope'
      />
      <ul className='hidden text-slate-500 md:flex flex-wrap gap-12 ml-32 font-normal'>
        <li className='cursor-pointer'>Shops</li>
        <li className='cursor-pointer'>Gadgets</li>
        <li className='cursor-pointer'>New</li>
      </ul>
     </div>
    </nav>
  )
}
