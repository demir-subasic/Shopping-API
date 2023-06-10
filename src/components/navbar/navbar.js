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
           <li className='nav-li'><NavLink style={{fontSize: '20px', color: '#212247', textDecoration: 'none', fontWeight: '500'}}  to="/">Home</NavLink></li>
           <li className='nav-li'><NavLink style={{fontSize: '20px', color: '#212247', textDecoration: 'none', fontWeight: '500'}} to="/mensClothing">Men's Clothing</NavLink></li>
           <li className='nav-li'><NavLink style={{fontSize: '20px', color: '#212247', textDecoration: 'none', fontWeight: '500'}} to="/womenClothes">Womens Clothes</NavLink></li>
           <li className='nav-li'><NavLink style={{fontSize: '20px', color: '#212247', textDecoration: 'none', fontWeight: '500'}} to="/jewelry">Jewelry</NavLink></li>
           <li className='nav-li'><NavLink style={{fontSize: '20px', color: '#212247', textDecoration: 'none', fontWeight: '500'}} to="/electronics">Electronics</NavLink></li>
         </ul>
      </nav>
    </div>
  )
}

export default Navbar
