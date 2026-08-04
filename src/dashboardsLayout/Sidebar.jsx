import { NavLink } from "react-router-dom"
import {
    HomeIcon,
    PhoneIcon,
    UserIcon,
    MagnifyingGlassIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    Squares2X2Icon,
    ArrowLeftStartOnRectangleIcon,
    BellIcon
    

} from "@heroicons/react/24/outline"

const menuItems = [
    {name: "Dashboard",
    path: "/dashboard",
    icon: HomeIcon},
    {name: "Find Fundi",
    path: "/dashboard/categories",
    icon: Squares2X2Icon},
    {name: "Profile",
    path: "/dashboard/profile",
    icon: UserCircleIcon},
    {name: "Settings",
    path: "/dashboard/settings",
    icon: Cog6ToothIcon},
    {name: "Logout",
    path: "/",
    icon: ArrowLeftStartOnRectangleIcon}
    
    
]
function Sidebar() {
  return (
    <>
    <aside className="w-54 bg-blue-400 text-white min-h-screen">
        <div className="p-6 border-b border-black">
            <h1 className="text-xl font-black">Customer Dashboard</h1>
        </div>
        <nav>
            {menuItems.map((item)=> {
                const Icon = item.icon;
                return (
                    <NavLink
                    className="flex items-center gap-3 py-4 transition"
                    key={item.name} to={item.path} className={({isActive})=>`flex items-center gap-3 px-4 ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700'}`}>
                        <Icon className="w-6 h-6 text-gray-500" />
                        {item.name}
                    </NavLink>
                )
            })}
        </nav>
    </aside>

    
      
    </>
  )
}

export default Sidebar
