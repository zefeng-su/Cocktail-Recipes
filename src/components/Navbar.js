import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from '../images/logo.png'
import {HiOutlineMenuAlt3} from 'react-icons/hi'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navbarHandler = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand flex flex-space-between">
          <Link to = "/" className="navbar-brand flex">
            <img src={logo} style={{ width: '7%' }} alt="site-logo" />
            <span className="fontwidth-2 fontsize-24 ls-1">cocktail recipes</span>
          </Link>
          <button type="button" className="navbar-btn" onClick= {navbarHandler}>
            <HiOutlineMenuAlt3 size={35} style={{
              color:`${toggleMenu ? "#ffff" : "#010101"}`
            }} />
          </button>
        </div>
    
        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse": "navbar-collapse"}>
          <ul className="navbar-nav">
            <li className='nav-item'>
              <Link to ="home" className="nav-link text-uppercase text-white fontsize-22 fontwidth-6 ls-1">Home</Link>
            </li>
            <li className='nav-item'>
              <Link to ="about" className="nav-link text-uppercase text-white fontsize-22 fontwidth-6 ls-1">About</Link>
            </li>        
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar