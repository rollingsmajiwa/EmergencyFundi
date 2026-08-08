import { Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'

import Categories from './Categories'
import Profile from './Profile'

import Settings from './Settings'

function Dashboard() {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true})
  }
  return (
    <>
     <div className='flex min-h-screen bg-gray-100'>
      <Sidebar onLogout={handleLogout} />
        <main className='flex-1 p-6'>
          <Routes>
             <Route path='/' element={<DashboardHome />} />
            <Route path='categories' element={<Categories />} />
            <Route path='profile' element={<Profile />} />
           
            <Route path='settings' element={<Settings />} />
          </Routes>
        </main>
      </div>
    </>
  )
}
export default Dashboard;


function DashboardHome() {
  const navigate = useNavigate()
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

  const handleBooking = async (e, fundi) => {
    if(e) e.preventDefault();
    const newBooking = {
      id: Date.now.toString(),
      clientId: name,
      fundiName: fundi.name,
      category: fundi.category,
      phone: fundi.phone,
      location: fundi.location,
      status: 'Active',
      date: new Date().toISOString().split('T')[0]
    };
    try {
      const response = await fetch('http://localhost:3001/bookings', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBooking)
      });
      if(response.ok) {
        alert(`You have successfully booked ${fundi.name}! Procced to your profile for contact details.`)
        navigate('/dashboard/profile')
      }

    } catch (err) {
      console.error("Booking error:", err)
    }


  }
  if(loading) return
    <div>Loading...</div>
  if(error) return
    <div>{error}</div>

    

  

  return (
    <>
      <div className='flex h-screen bg-gray-100'>
      
        <div className='flex-row w-full'>
          <div className='bg-white mt-4 mb-4 p-1 rounded-2xl shadow-sm border border-gray-200 w-full mx-auto'>
            <div>
              <h1 className='capitalize text-xl font-black tracking-wider'>Hello, {name}!</h1>
              <div className='text-green-400 font-bold bg-gray-200 pl-1 py-1 w-20 rounded-3xl'>{role}</div>
            </div>
          </div>
          <div className='grid grid-cols-4 gap-4 rounded-lg p-4'>
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
                  <button type='button' 
                    disabled={!fundi.available}
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-400 text-white py-2 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed transition"
                     onClick={(e)=> handleBooking(e, fundi)}
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

     

    </>
  )
}

