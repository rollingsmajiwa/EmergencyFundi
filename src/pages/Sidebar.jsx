import { NavLink } from "react-router-dom"
import {
    HomeIcon
} from "@heroicons/react/24/outline"

const menuItems = [
    {name: "Dashboard",
    path: "/",
    icon: HomeIcon}
]
function Sidebar() {
  return (
    <>
    <aside>
        <div>
            <h1>Fundi Portal</h1>
        </div>
        <nav>
            {menuItems.map((item)=> {
                const Icon = item.icon;
                return (
                    <NavLink
                    key={item.name} to={item.path}>
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
