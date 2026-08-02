import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Search from "./pages/Search"
import Contact from "./pages/Contact"
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './dashboardsLayout/Dashboard'
import MainLayout from './components/MainLayout'
import PrivateRoute from './context/PrivateRoute'
import Login from './pages/Login'







function App() {
  

  return (
    <>
   
      <Router>
       
    
       
        <Routes>
           
         
         <Route element={<MainLayout />}>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login />}/>
          </Route>
          <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
         
          

         
        </Routes>
      </Router>
    </>
  )
}

export default App
