import React from 'react'
import { CiSearch } from 'react-icons/ci'

const Navbar = () => {
  return (
  <div className='sticky bg-white z-10'>
    <div className='flex justify-between items-center p-8 '>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-semibold  '>Logo</h1>
       <div className='relative w-full max-w-[500px]'>
         <input type="text" className='border-none bg-[#f2f3f5] px-6 py-3 rounded-[30px] text-xl  w-full outline-0  ' placeholder='Search Products..'/>
         <CiSearch className='absolute top-0 right-0 mt-4 mr-4 text-gray-500 '  size={25}/>
       </div>
    </div>
  </div>
  )
}

export default Navbar