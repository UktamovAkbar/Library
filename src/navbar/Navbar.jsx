import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar_start">
        <Link to='/'> <img className='navbar_start_img' src="/unnamed.png" alt="" /></Link>
        <Link to='/' className='navbar_start__h3'>  Library</Link>

        <div className="navbar_center">
          <input className='navbar_center_inp' type="text" name="" id="" />
        </div>
      </div>

      <div className="navbar_end">
        <Link className='navbar_end_link' to='/'>books</Link>
        <Link className='navbar_end_link' to='/'>what pick</Link>
        <Link className='navbar_end_link' to='/'>about work</Link>
        <Link className='navbar_end_link' to='/signup'>sign up</Link>
      </div>
    </div>
  )
}

export default Navbar;
