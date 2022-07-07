import React from 'react';
import Image from 'next/image';
import { SearchIcon,MenuIcon,UserCircleIcon,UserIcon,GlobeAltIcon } from '@heroicons/react/solid';

function Header() {
  return (
    
    <header className='sticky items-center py-2 bg-white grid grid-cols-3 shadow-md px-5 '>

      {/* Left Section */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
          <Image
            src='/logo.png'
            layout='fill' objectFit='contain' objectPosition="left"
           />
      </div>

      {/* Middle Section */}
      <div className='flex p-0 h-10 items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input type="text" className='flex-grow pl-4 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'  placeholder='Start your search..'/>
        <SearchIcon className='pr-2 hidden md:inline-flex md:mx-2 h-6 bg-red-400 text-white rounded-full p-2 cursor-pointer' />
      </div>

      {/* Right Section */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">

        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 "/>
        <div className="flex items-center border-2 space-x-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6 "/>
          <UserCircleIcon className="h-6 "/>
        </div>

      </div>

    </header>
    
  )
}

export default Header
