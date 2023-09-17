import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar_start">
        <Link to='/'> <img className='navbar_start_img' src="/unnamed.png" alt="" /></Link>
        <Link to='/' className='navbar_start__h3'>  Library</Link>

        <div className="navbar_center">
          <input className='navbar_center_inp' type="text"  /> 
          <Link className='navbar_center_link'> <FaSearch/> </Link>
        </div>
      </div>

      <div className="navbar_end">
        <Link className='navbar_end_link' to='/'>Книги</Link>
        <Link className='navbar_end_link' to='/'>Что выбрать</Link>
        <Link className='navbar_end_link' to='/'>Библиотека</Link>
        <Link className='navbar_end_link' to='/signup'>Зарегистрироваться</Link>
      </div>
    </div>
  )
}

export default Navbar;
