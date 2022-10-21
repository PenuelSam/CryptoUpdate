import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Navbar from './Components/Navbar'
import CryptoDetail from './Pages/CryptoDetail'
import CryptoHome from './Pages/CryptoHome'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<CryptoHome />}  />
      <Route path='/coin/:id' element={<CryptoDetail />}  />
    </Routes>
    </BrowserRouter>
  )
}

export default App
