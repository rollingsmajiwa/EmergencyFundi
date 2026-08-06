import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
      <div className='contactImage'>
        <div className='absolute inset-0 backdrop-blur-xs'></div>
        <div className='max-w-4xl mx-auto py-12 px-4 text-gray-800 relative z-10'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-3 text-white'>We'd Love to Hear From You</h2>
                <p className='text-gray-400 max-w-2xl mx-auto'>Whether you're a client with a question, a fundi wanting to join the platform, or a partner looking to collaborate — our team is ready.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
            <div className=' p-6 bg-black/20 backdrop-blur-md rounded-xl shadow border border-gray-100 flex flex-col items-center text-center'>
            <h3 className='text-lg font-semibold text-white mb-2'>Visit Us</h3>
            <p className='text-gray-200 text-sm'>
              EmergencyFundi HQ, 4th Floor<br/>
              Thindigua, Kiambu<br />
              <span className='text-sm text-gray-300 block mt-1'>Mon - Fri, 8 am - 6 pm</span>
            </p>
            </div>
        
            <div className='p-6 bg-black/20 backdrop-blur-md rounded-xl shadow border border-gray-100 flex flex-col items-center text-center'>
            <h3 className='text-lg font-semibold text-gray-200 mb-2'>Call or Whatsapp</h3>
            <p className='text-gray-300 text-sm'>
              +254742234603
            </p>
            </div>
            <div className='text-white p-6 bg-black/20 backdrop-blur-md rounded-xl shadow border border-gray-100 flex flex-col items-center text-center'>
            <h3 className='text-lg font-semibold text-gray-200 mb-2'>Email Us</h3>
            <p className='text-gray-300 text-sm'>
              rollingsmajiwa@gmail.com
            </p>
                </div>
                <h3>Follow Us</h3>
                <div></div>
                  </div>
          </div>
            <div className='max-w-xl mx-auto bg-black/20 p-8 backdrop-blur-md rounded-2xl border border-slate-700/50'>
         <h3 className='text-xl font-bold text-white mb-6 text-center'>Send Us a Message</h3>
        <form className='space-y-4'>
          <label htmlFor="fname" className='block text-sm font-medium text-white mb-1'>Full Name</label>
          <input type="text" placeholder='write your name' id='fname' required className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none text-white bg-slate-800/30' />
          <label htmlFor="email" className='block text-sm font-medium text-white mb-1'>Email</label>
          <input type="email" placeholder='eg. rollingsmajiwa@gmail.com' required className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none text-white bg-slate-800/30' />
          <textarea name="text" id="text" placeholder='Tell us how we can help you' className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none text-white bg-slate-800/30'></textarea>
          <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300 shadow-sm text-sm'>Send Message</button>
        </form>
        
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

export default Contact
