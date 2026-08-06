import React from 'react'

function About() {
  return (
    <>
  <div className='bg-slate-50 p-3 min-h-screen pt-28'>
    <div className='max-w-5xl mx-auto space-y-12'>
      <div className='flex justify-center'>
        <div className='bg-blue-100/70 border border-blue-200 rounded-3xl p-2 text-center w-38'><span className='text-sm font-semibold text-blue-700 mt-2 mb-6'>Who Are We?</span></div>
      </div>
      <h1 className='text-3xl font-extrabold text-blue-950 mt-2 mb-6 text-center'>Built For Kenya. Designed For Trust</h1>
      <div className='space-y-4 text-slate-700 max-w-3xl mx-auto pb-16'>
        <p>EmergencyFundi started with one belief — that every Kenyan deserves access to a skilled,
           honest professional without the guesswork. We built the platform we wished existed.</p>
           <p>Founded in Kiambu in 2026 by a team of engineers, EmergencyFundi has grown out of frustration with the informal referral economy.
            Finding a reliable plumber or electrician meant asking neighbours, waiting days, and hoping for the best.
            We created a structured marketplace that puts verification first.
            Every fundi completes identity checks, trade assessments, and client history reviews before their profile goes live. No shortcuts.</p>
      </div>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
      <div className=' p-6 bg-white rounded-xl shadow border border-slate-200 flex flex-col items-center text-center'><h3 className='text-lg font-semibold mb-2'>Our Mission</h3>
      <p className='text-gray-500 text-sm'>Formalise skilled trades across Kenya</p>
      </div>
      <div className=' p-6 bg-white rounded-xl shadow border border-slate-200 flex flex-col items-center text-center'><h3 className='text-lg font-semibold mb-2'>Our Promise</h3>
      <p className='text-gray-500 text-sm'>No Booking without a verified fundi</p>
      </div>
      <div className=' p-6 bg-white rounded-xl shadow border border-slate-200 flex flex-col items-center text-center'><h3 className='text-lg font-semibold mb-2'>Our Goal</h3>
      <p className='text-gray-500 text-sm'>1M+ job facilitated by 2027</p></div>
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

export default About
