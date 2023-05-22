import React from 'react'
import SearchForm from '../components/SearchForm'
import './Header.css'
import CocktailList from './CocktailList'

function Header() {
  return (
    <div className="holder">
    
      <header className="header">
          <div className="header-content flex flex-center text-center text-white" >
            <h2 className="header-title"> Cocktail receipes you love, right here.</h2> <br/>
            <p className="header-text fontsize-18 fontwidth-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <SearchForm type="text" placeholder="Search for a Cocktail..."/>
          </div>
      </header>

      <main>
        <CocktailList/>
      </main>

    </div>
  )
}

export default Header