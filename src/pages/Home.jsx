import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
      <div className='homeContainer'>
        
        <div className="homeContent bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h1 className='text-5xl font-black tracking-wide w-xl'>Find Trusted Fundis Near You</h1>
          <p className='text-2xl w-xl'>Vetted Artisans, instant booking, quality quaranteed. From electricians to plumbers</p>
          <button type='submit' className='rounded-lg p-3 mt-3 bg-white text-gray-500 font-bold'>Sign Up</button>
        </div>
      </div>
      <div className='bg-blue-100 p-3'>
        <h2 className='text-center font-bold text-2xl'>Why Choose Us?</h2>
        <div className='grid grid-cols-2 gap-2'>
          <div className='bg-blue-50 rounded-lg p-4 hover:shadow-md hover:-translate-y-2 transition-all duration-300 border border-gray-200'><h3 className='font-bold text-lg text-center '>Verified Professionals</h3><p>Every fundi is ID-verified and background-checked before listing.</p></div>
          <div className='bg-blue-50 rounded-lg p-4 hover:shadow-md hover:-translate-y-2 transition-all duration-300 border border-gray-200'><h3 className='font-bold text-lg text-center'>Quality Guarantee</h3><p>Not satisfied? We help resolve disputes quickly and fairly.</p></div>
          <div className='bg-blue-50 rounded-lg p-4 hover:shadow-md hover:-translate-y-2 transition-all duration-300 border border-gray-200'><h3 className='font-bold text-lg text-center'>Real Reviews Only</h3><p>Ratings from verified clients — no fake reviews, ever.</p></div>
          <div className='bg-blue-50 rounded-lg p-4 hover:shadow-md hover:-translate-y-2 transition-all duration-300 border border-gray-200'><h3 className='font-bold text-lg text-center'>Instant Whatsapp</h3><p>Chat directly with your fundi — no middlemen, no delays.</p></div>
        </div>

      </div>
      <div className='bg-blue-950 grid grid-cols-2 gap-2.5 p-5'>
        <div>
          <div ><span className="text-xl font-black tracking-tight">Emergency</span><span className="text-xl font-bold tracking-tighter text-blue-600">Fundi</span></div>
          <p className='text-gray-400'>The most trusted marketplace for skilled artisans. Find, verify, and hire the best fundis near you.</p>
        </div>
        <div><h3 className='text-xl font-bold text-white'>Categories</h3><ul>
          <li className='text-gray-400'>Electrician</li>
          <li className='text-gray-400'>Plumber</li>
          <li className='text-gray-400'>Capenter</li>
          <li className='text-gray-400'>Painter</li>
          <li className='text-gray-400'>Mechanic</li>
          <li className='text-gray-400'>Mason</li>
          </ul></div>
          <div>
            <h3 className='text-xl font-bold text-white'>Contact Us</h3>
            <p className='text-gray-400'>Kiambu, Thindigwa, Kenya</p>
            <p className='text-gray-400'>+254742234603</p>
            <p className='text-gray-400'>rollingsmajiwa@gmail.com</p>
          </div>
          <div>
            <h3 className='text-xl font-bold text-white'>Quick Links</h3>
            <ul>
              <li className='text-gray-400'>Home</li>
              <li className='text-gray-400'>About</li>
              <li className='text-gray-400'>Contact</li>
            </ul>
          </div>
          

      </div>
       <footer className="text-center text-sm text-gray-400 pt-6 border-t border-gray-400 bg-blue-950">
          <p> &copy;2026 RollingsMajiwa. All rights reserved</p>
                </footer>
    </>
  )
}

export default Home

