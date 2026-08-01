import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Search from "./pages/Search"
import Contact from "./pages/Contact"
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Dashboard from './dashboards/Dashboard'






function App() {
  

  return (
    <>
   
      <Router>
       
     
      <Navbar />
       
        <Routes>
           
         
         
          <Route path="/contact" element={<Contact />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
         
          

         
        </Routes>
      </Router>
    </>
  )
}

export default App
