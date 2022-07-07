import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-8 p-10 md:px-32 md:py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-3 py-2 pb-5 text-xs text-gray-800 md:pt-10 border-b-2 md:border-none '>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Careers</p>
            <p>Investors</p>
        </div>
        
        <div className='space-y-4 pb-5 text-xs text-gray-800 border-b-2 md:border-none'>
        <h5 className='font-bold'>COMMUNITY</h5>
            <p>Airbnb.org: Disaster relief housing</p>
            <p>Combating discrimination</p>
        </div>
        
        <div className='space-y-4 pb-5 text-xs text-gray-800 border-b-2 md:border-none'>
            <h5 className='font-bold'>HOSTING</h5>
            <p>Try Hosting</p>
            <p>Aircover for Hosts</p>
            <p>Explore hosting resources</p>
            <p>Visit our community forum</p>
        </div>
        
        <div className='space-y-4 pb-5 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>AirCover</p>
            <p>Safety Information</p>
            <p>Supporting people with disabilities</p>
            <p>Cancellation options</p>
        </div>
    </div>
  )
}

export default Footer