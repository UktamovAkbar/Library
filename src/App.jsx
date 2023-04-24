import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './navbar/Navbar'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
    </Routes>
  )
}

export default App