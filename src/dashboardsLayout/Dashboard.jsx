import { Routes, Route } from 'react-router-dom'
import Sidebar from './Sidebar'

import Categories from './Categories'
import Profile from './Profile'
import FindFundi from './FindFundi'
import Settings from './Settings'


function Dashboard() {

  return (
    <>
      <div className='flex h-screen bg-gray-100'>
        <Sidebar />
        <div className='flex-1 p-8'>
          <h1>Welcome Back</h1>
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
