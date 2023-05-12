import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import './Layout.css'

const Home = () => {
  return (

    <div className='layout'>
      <div className="nav">
            <Navbar />
      </div>
  
      
      <Footer />
    </div>
  )
}

export default Home