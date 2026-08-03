import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"



export default function Profile() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([])
  const [fundis, setFundis] = useState([])

  const name = user?.email?.split('@')[0] || 'User';

  useEffect(()=> {
    fetch('http://localhost:3001/bookings')
    .then((response)=> response.json()).then((data)=> {
      const clientBookings = data.filter((event) => event.clientId === name)
      setBookings(clientBookings)
    })
    .catch((err) => console.error("Error fetching bookings:", err));

    fetch('http://localhost:3001/fundis')
    .then((response) => response.json())
    .then((data) => setFundis(data))
    .catch((err) => console.error("Error fetching fundis:", err))
  }, [name]);
  return (
    <>
    <div className="space-y-6 w-full max-w-6xl mx-auto pb-10">
      
      
      <div className="flex justify-between items-center bg-white/50 py-2">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Overview</h1>
          <p className="text-xs text-gray-500">Customer Dashboard</p>
        </div>

        <div className="flex items-center gap-4">
          
          
        </div>
      </div>

    
      <div className=" rounded-3xl p-6 text-white shadow-md transition-transform duration-300 hover:scale-[1.01]">
        <p className="text-sm font-light text-black">Welcome back, <span className=" text-black font-bold text-sm shadow">
            {name.toUpperCase()}
          </span></p>
       
       
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50">
        <h2 className="text-base font-bold text-gray-800 mb-4">Your Total Bookings</h2>
        <p className="text-lg font-black shadow-2xl text-blue-950">{bookings.length}</p>
      </div>
      <div>
        <div>
          {bookings.length > 0 && (
            <div className="border-b-4 border-gray-700 mb-2">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Fundis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookings.map((b) => (
                  <div key={b.id}>
                    <div className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 cursor-pointer">
                      <h4 className="font-bold text-gray-900 text-sm">{b.fundiName}</h4>
                      <p className="text-xs text-gray-500">{b.category}</p>
                      <p className="flex gap-3 text-xs text-gray-400 mt-3 pl-1">{b.location}</p>
                      <p>Call: {b.phone}</p>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 ">{b.status}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      
      
      
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-4">Recommended for You</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fundis.map((fundi) => (
            <div 
              key={fundi.id} 
              className="bg-white border border-gray-200 p-4 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{fundi.name}</h3>
                    <p className="text-xs text-gray-500">{fundi.category}</p> 
                  </div>
                </div>

                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${
                  fundi.available ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'
                }`}>
                  {fundi.available ? 'Available' : 'Busy'}
                </span>
              </div>

              <div className="flex gap-3 text-xs text-gray-400 mt-3 pl-1">
                <span> {fundi.location}</span>
                
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4">
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded-xl transition-colors duration-200 shadow-sm">
                  View Profile
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      

    </div>
      
    </>
  )
}


