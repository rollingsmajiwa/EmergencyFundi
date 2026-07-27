import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Search from "./pages/Search"
import Contact from "./pages/Contact"
import Categories from "./pages/Categories"
import About from "./pages/About"
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'





function App() {
  

  return (
    <>
   
      <Router>
        <Navbar />
        <Dashboard />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/categories" element={<Categories />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          

         
        </Routes>
      </Router>
    </>
  )
}

export default App
