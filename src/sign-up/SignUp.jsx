import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaTelegram, FaPinterest, FaGoogle } from 'react-icons/fa'
import "./SignUp.css"

const SignUp = () => {
  return (
    <div className='signup'>
      <img className='signup_img' src="/signup.jpg" alt="" />
      <div className='signup_box'>
        <h1 className='signup_box_h1'>Вход</h1>
        <Link className='x' to='/'>x</Link>
        <p className='signup_box_p1'>Почта или телефон:</p>
        <input className='signup_box_inp1' type="text" name="" id="" />
        <p className='signup_box_p1'>Пароль:</p>
        <input className='signup_box_inp1' type="password" />
        <button className='signup_box_btn'><h1>Войти</h1></button>
        <div className="signup_bottom">
          <Link to='/'><button className="signup_bottom1"><h1 className='signup_bottom1_h1'><FaInstagram></FaInstagram></h1></button></Link>
          <Link to='/'> <button className="signup_bottom2"><h1 className='signup_bottom1_h2'><FaTwitter></FaTwitter></h1></button></Link>
        </div>

        <div className="signup_center">
          <Link><button className='signup_bottom3'><h1><FaTelegram/></h1></button></Link>
          <Link><button className='signup_bottom4'><h1> <FaPinterest/> </h1></button></Link>
          <Link><button className='signup_bottom5'><h1> <FaGoogle/> </h1></button></Link>
        </div>

      </div>
    </div>
  )
}

export default SignUp