import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SharedLayout from './Components/SharedLayout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<SharedLayout />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
