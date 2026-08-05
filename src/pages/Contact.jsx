import React from 'react'

function Contact() {
  return (
    <>
      <h2>We'd Love to Hear From You</h2>
    <p>Whether you're a client with a question, a fundi wanting to join the platform, or a partner looking to collaborate — our team is ready.</p>
    <div>
      <h3>Visit Us</h3>
      <div>
        EmergencyFundi HQ, 4th Floor
        Thindigua, Kiambu
        Mon - Fri, 8 am - 6 pm
      </div>

    </div>

    <div>
      <h3>Call or Whatsapp</h3>
      <div>
        +254742234603
      </div>
    </div>
    <div>
      <h3>Email Us</h3>
      <div>
        rollingsmajiwa@gmail.com
      </div>
    </div>
    <h3>Follow Us</h3>
    <div></div>
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
    </>
  )
}

export default Contact
