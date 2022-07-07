import React from 'react';
import Image from "next/image";

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] md:h-[500px] l:h-[600px] xl:h-[600px]'>
        <Image src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg" layout='fill' alt='' objectFit='cover' title='Banner' />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg text-slate-100'>Not sure where to go?</p>

        <button className='text-sky-600 bg-white px-10 py-2 my-5 shadow-md rounded-full font-bold  hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
      </div>
    </div>
    
  )
}

export default Banner;