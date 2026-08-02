import { Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

import Categories from './Categories'
import Profile from './Profile'
import FindFundi from './FindFundi'
import Settings from './Settings'


function Dashboard() {
  const { user } = useContext(AuthContext)
  const name = user?.email?.split('@')[0]
 const role = user?.role || 'Customer'

 const [fundis, setFundis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")

  useEffect(()=> {
     async function fetchFundis() {
    try{
      setLoading(false)
      const response = await fetch('http://localhost:3001/fundis');
      if(!response.ok) throw new Error('Failed to fetch the Fundis')
        const data = await response.json()
      setFundis(data);
    }catch(err){setError(err.message)}

    finally{
      setLoading(false)
    }

    
  }
  fetchFundis();
  }, [])
  if(loading) return
    <div>Loading...</div>
  if(error) return
    <div>{error}</div>

  

  return (
    <>
      <div className='flex h-screen bg-gray-100'>
        <Sidebar />
        <div className='flex-row'>
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-200 w-full max-w-6xl mx-auto pb-10'>
            <div>
              <h1 className='capitalize text-xl font-black tracking-wider'>Welcome Back, {name}!</h1>
              <div className='text-green-400 font-bold bg-gray-200 px-1 py-2 w-20 rounded-3xl'>{role}</div>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-3 rounded-lg p-4'>
          {fundis.map((fundi) => (
                <div
                  key={fundi.id}
                  className="border border-gray-200 p-4 rounded-xl flex flex-col justify-between hover:shadow-md transition"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-lg text-gray-800">{fundi.name}</h3>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                        fundi.available ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                      }`}>
                        {fundi.available ? 'Available' : 'Busy'}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-blue-600">{fundi.category}</p>
                    <p className="text-xs text-gray-500 mt-2"> {fundi.location}</p>
                  </div>
                  <button
                    disabled={!fundi.available}
                    className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                  >
                    {fundi.available ? 'Book Now' : 'Unavailable'}
                  </button>
                </div>
              ))}
                </div>
                <footer className="text-center text-xs text-gray-400 pt-6 border-t border-gray-200">
          <p> &copy;2026 RollingsMajiwa. All rights reserved</p>
                </footer>
        </div>
      </div>

      <div>
        <Routes>
          
          <Route path='categories' element={<Categories />} />
          <Route path='profile' element={<Profile />} />
          <Route path='findfundi' element={<FindFundi />} />
          <Route path='settings' element={<Settings />} />
        </Routes>
      </div>

    </>
  )
}

export default Dashboard
