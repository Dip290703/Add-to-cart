import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { FaRegUser } from 'react-icons/fa'
import CartCountingBadge from './CartCountingBadge'

const Navbar = ({cartCount}) => {
  return (
  <div className='sticky bg-white z-10'>
    <div className='flex justify-between items-center p-8 '>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold  '>Logo</h1>
       <div className='relative w-full max-w-[500px]'>
         <input type="text" className='border-none bg-[#f2f3f5] px-6 py-3 rounded-[30px] text-xl  w-full outline-0  ' placeholder='Search Products..'/>
         <CiSearch className='absolute top-0 right-0 mt-4 mr-4 text-gray-500 cursor-pointer '  size={25}/>
       </div>
       <div className='flex gap-6 '>
        <FaRegUser size={25} className='cursor-pointer' />
       
       <div>
         <CartCountingBadge count={cartCount}/>
       </div>
       </div>
    </div>
  </div>
  )
}

export default Navbar