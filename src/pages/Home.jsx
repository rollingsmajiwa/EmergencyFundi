import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
      <div className='homeContainer'>
        <div></div>
        <div className="homeContent">
          <h1 className='text-5xl font-black tracking-wide w-xl'>Find Trusted Fundis Near You</h1>
          <p className='text-2xl w-xl'>Vetted Artisans, instant booking, quality quaranteed. From electricians to plumbers</p>
          <button type='submit' className='rounded-lg p-3 mt-3 bg-white text-gray-500 font-bold'>Sign Up</button>
        </div>
      </div>
      <div className='bg-blue-100'>
        <h2 className='text-center font-bold text-xl'>Why Choose Us?</h2>
        <div className='grid grid-cols-2 gap-2'>
          <div className='bg-blue-50 rounded-lg p-4'><h3>Verified Professionals</h3><p>Every fundi is ID-verified and background-checked before listing.</p></div>
          <div className='bg-blue-50 rounded-lg p-4'><h3>Quality Guarantee</h3><p>Not satisfied? We help resolve disputes quickly and fairly.</p></div>
          <div className='bg-blue-50 rounded-lg p-4'><h3>Real Reviews Only</h3><p>Ratings from verified clients — no fake reviews, ever.</p></div>
          <div className='bg-blue-50 rounded-lg p-4'><h3>Instant Whatsapp</h3><p>Chat directly with your fundi — no middlemen, no delays.</p></div>
        </div>

      </div>
    </>
  )
}

export default Home

