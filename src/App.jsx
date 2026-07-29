import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Services from "./pages/Services"
import Search from "./pages/Search"
import Contact from "./pages/Contact"
import Home from './pages/Home'
import About from "./pages/About"
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'





function App() {
  

  return (
    <>
   
      <Router>
       
     
      <Navbar />
        {/* <Dashboard />                        */}
        <Routes>
           
          {/* <Route path="/" element={<Dashboard />}/> */}
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/search" element={<Search />}/>
         
          

         
        </Routes>
      </Router>
    </>
  )
}

export default App
