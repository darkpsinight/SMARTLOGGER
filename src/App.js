import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './layouts/Navbar'
import Home from './views/Home'
import Irrigation from './views/Irrigation'
import Control from './views/Control'
import Apropos from './views/Apropos'
import Contact from './views/Contact'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {
  return (
    <>
      <ToastContainer position='top-right' />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/irrigation' element={<Irrigation />} />
          <Route path='/control' element={<Control />} />
          <Route path='/apropos' element={<Apropos />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
