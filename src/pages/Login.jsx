import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    const dummyUser = {
      id: Date.now(),
      name: email.split('@')[0],
      email: email,
      role: "customer"
    };
    login(dummyUser);
    navigate('/dashboard');

    const userData = { email }
    login(userData)
    navigate('/dashboard')
  }
  return (
    <>
      <div className='flex justify-center items-center'>
        <div>
          <h2 className='text-black text-2xl text-center font-black'>Login</h2>
          <form className='bg-blue-200 rounded-lg mt-2 p-4' action="#" onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label htmlFor="email">Email:</label>
              <input type="email" value={email} onChange = {(event) => setEmail(event.target.value)} required className="text-black w-full p-4 mt-4 bg-blue-50" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input className='bg-blue-50 w-full text-black p-4 mt-4' type="password" value={password} onChange={(event)=> setPassword(event.target.value)} required />
            </div>
            <button className=' mt-3 flex justify-center py-1.5 px-3 cursor-auto bg-blue-600 hover:bg-blue-400 text-white font-bold'>Log In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
