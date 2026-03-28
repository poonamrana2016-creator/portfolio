import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About';
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  const myMenu = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About', url: '/about' },
    { id: 3, name: 'Projects', url: '/projects' },
    { id: 4, name: 'Contact', url: '/contact' },
  ]

  return (
    <>
      <div className="container-fluid g-0">
        <div className="row g-0 ">

          <Navbar menu={myMenu} />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
        </div>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element= {<Projects />} />
          <Route path='/contact' element= { <Contact /> } />
        </Routes>
      </div>
      <div className="row g-0">
      
        <Footer />
      </div>
    </>
  )
}

export default App
