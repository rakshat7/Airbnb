import React from 'react';
import Image from 'next/image';
import { SearchIcon,MenuIcon,UserCircleIcon,UserIcon,GlobeAltIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";

function Header() {

  const [searchInput, setSearchInput] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [noOfGuests, setNoOfGuests] = useState(1);

  const router = useRouter();

  const resetInput = () => {
    setSearchInput("");
  };

  const selectionRange = {
    startDate : startDate,
    endDate : endDate,
    key : 'selection'
  };

  const search = () => {
    router.push("/search")
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    
    <header className='sticky top-0 z-50 bg-opacity-90 items-center py-2 bg-white grid grid-cols-3 shadow-md md:px-10 '>

      {/* Left Section */}
      <div onClick={() => router.push("/")} className='relative flex items-center h-10 cursor-pointer my-auto'>
          <Image
            src='/logo.png'
            layout='fill' objectFit='contain' objectPosition="left"
           />
      </div>

      {/* Middle Section */}
      <div className='relative flex p-0 h-15 max-w-md items-center md:border-2 rounded-full hover:shadow-md py-2 md:shadow-sm shadow-md'>
        
        <input value={searchInput} 
          onChange = {(e) => setSearchInput(e.target.value)} 
          type="text" className='flex-grow w-8 mx-1 px-2 rounded-full outline-none text-sm text-gray-600 placeholder-gray-400'  placeholder='Start your search..'/>
        <SearchIcon className='mr-2 p-1 md:p-2 h-6 md:inline-flex md:mx-2 md:h-8 bg-red-400 text-white rounded-full cursor-pointer'/>
      
      </div>

      {/* Right Section */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">

        <div className='flex items-center bg-white space-x-2 p-2 hover:bg-gray-100 rounded-full'>
          <p className="hidden md:text-sm md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 "/>
        </div>
        
        
        <div className="flex items-center border-2 space-x-2 p-2 hover:shadow-md rounded-full cursor-pointer">
          <MenuIcon className="h-6 "/>
          <UserCircleIcon className="h-6 "/>
        </div>

      </div>

      {searchInput && (
        <div className='flex flex-col col-span-3 mt-3 mb-1 mx-auto'>
          <DateRangePicker 
            ranges={[selectionRange]} 
            minDate = {new Date()}
            rangeColors = {["#FD5B61"]}
            onChange = {handleSelect}
            />

          <div className='flex items-center mb-4 border-b'>
            <h2 className='text-xl flex-grow font-semibold'>Number of Guests</h2>
          
            <UserIcon className='h-5'/>
            <input value={noOfGuests} min={1} onChange={(e) => setNoOfGuests(e.target.value)} type="number" className='ml-1 w-11 pl-2 text-md font-semibold outline-none border rounded-lg text-red-400 ' />
          </div>

          <div className='flex font-semibold'>
            <button onClick={search} className='flex-grow text-red-400'>Search</button>
            <button onClick={resetInput} className='flex-grow text-gray-600'>Cancel</button>
          </div>

          

        </div>
      )}
      

    </header>
    
  )
}

export default Header
