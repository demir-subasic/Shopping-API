import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import logo from '../../components/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <a href="/"><img style={{width: '150px', color: 'white'}} src={logo} alt="logo" /></a>
        <ul className='nav-ul'>
          <li className='nav-li'><NavLink className='link-li' to="/">Home</NavLink></li>
          <li className='nav-li'><NavLink className='link-li' to="/mensClothing">Men's Clothing</NavLink></li>
          <li className='nav-li'><NavLink className='link-li' to="/womenClothes">Womens Clothes</NavLink></li>
          <li className='nav-li'><NavLink className='link-li' to="/jewelry">Jewelry</NavLink></li>
          <li className='nav-li'><NavLink className='link-li' to="/electronics">Electronics</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
