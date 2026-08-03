import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import './Login.css'

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
      <div className='main-card'>
        <div className='blob-1'></div>
        <div className='blob-2'></div>
        <div className='card'>
          <h2 className='headerForm'>Welcome</h2>
          <form className=' mt-2 p-4' action="#" onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label className='text-white text-lg' htmlFor="email">Email</label>
              <input type="email" value={email} onChange = {(event) => setEmail(event.target.value)} required className="email" />
            </div>
            <div>
              <label className='text-white text-lg' htmlFor="password">Password</label>
              <input className='input' type="password" value={password} onChange={(event)=> setPassword(event.target.value)} required />
            </div>
            <button className='logbtn'>Log In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
