import React from 'react'
import Navbar from '../components/Navbar'
import SearchForm from '../components/SearchForm'
import "./Header.css"

function Header() {
  return (
    <div className="holder">
      <header className="header">
        <Navbar/>
          <div className="header-content flex flex-center text-center text-white" >
            <h2 className="header-title"> Cocktail receipes you love, right here.</h2> <br/>
            <p className="header-text fontsize-18 fontwidth-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <SearchForm />
          </div>
      </header>
    </div>
  )
}

export default Header