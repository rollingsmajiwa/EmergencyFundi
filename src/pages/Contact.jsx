import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
      <div className='contactImage'>
        <div className='max-w-4xl mx-auto py-12 px-4 text-gray-800 relative z-10'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-3 text-white'>We'd Love to Hear From You</h2>
                <p className='text-gray-400 max-w-2xl mx-auto'>Whether you're a client with a question, a fundi wanting to join the platform, or a partner looking to collaborate — our team is ready.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
            <div className='p-6 bg-white rounded-xl shadow border border-gray-100 flex flex-col items-center text-center'>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>Visit Us</h3>
            <p className='text-gray-600 text-sm'>
              EmergencyFundi HQ, 4th Floor<br/>
              Thindigua, Kiambu<br />
              <span className='text-sm text-gray-500 block mt-1'>Mon - Fri, 8 am - 6 pm</span>
            </p>
            </div>
        
            <div className='p-6 bg-white rounded-xl shadow border border-gray-100 flex flex-col items-center text-center'>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>Call or Whatsapp</h3>
            <p className='text-gray-600 text-sm'>
              +254742234603
            </p>
            </div>
            <div className='p-6 bg-white rounded-xl shadow border border-gray-100 flex flex-col items-center text-center'>
            <h3 className='text-lg font-semibold text-gray-900 mb-2'>Email Us</h3>
            <p className='text-gray-600 text-sm'>
              rollingsmajiwa@gmail.com
            </p>
                </div>
                <h3>Follow Us</h3>
                <div></div>
                  </div>
          </div>
            <div className='max-w-xl mx-auto bg-white p-8 rounded-2xl border border-gray-100'>
         <h3 className='text-xl font-bold text-gray-900 mb-6 text-center'>Send Us a Message</h3>
        <form className='space-y-4'>
          <label htmlFor="fname" className='block text-sm font-medium text-gray-700 mb-1'>Full Name</label>
          <input type="text" placeholder='write your name' id='fname' required className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none' />
          <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email</label>
          <input type="email" placeholder='eg. rollingsmajiwa@gmail.com' required className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none' />
          <textarea name="text" id="text" placeholder='Tell us how we can help you' className='w-full px-4 py-2 border border-gray-300 rounded-lg outline-none'></textarea>
          <button type='submit' className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300 shadow-sm text-sm'>Send Message</button>
        </form>
        
            </div>
      </div>
    </>
  )
}

export default Contact
