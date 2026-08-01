import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="bg-blue-50 p-2">
        <div className="flex justify-between">
            <div ><span className="text-xl font-black tracking-tight">Emergency</span><span className="text-xl font-bold tracking-tighter text-blue-600">Fundi</span></div>
            <div>
                <ul className="flex gap-10 text-gray-600 font-bold ">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                   
                    <li className="hover:underline"><Link to="/contact">Contact</Link></li>
                    
                    <li className="hover:underline"><Link to="/about">About</Link></li>
                    <li className="hover:underline"><Link to="/dashboard">Dashboard</Link></li>
                
                </ul>
            </div>
            <div>
                
            <button type="submit" className="bg-blue-600 font-bold text-sm rounded-lg text-white p-1.5 hover:bg-blue-500">Log In</button>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar;
