import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Navbar from './navbar/Navbar'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>

  )
}

export default App