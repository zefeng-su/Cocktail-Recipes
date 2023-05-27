import React, { useState }  from 'react'
import SearchForm from '../components/SearchForm'
import './Header.css'
import Navbar from './Navbar'
import Favorites from '../components/Favorites';
 
 
function Header() {

  const [favVisibility, setfavVisibility] = useState(false);  
 
 
 
  return (
    <div className="holder">

      <Favorites 
        visibility={favVisibility} 
        onClose={() =>setfavVisibility(false)}
         
      />
      
      <header className="header">
        <Navbar favVisibility={favVisibility} setfavVisibility={setfavVisibility} />
          <div className="header-content flex flex-center text-center text-white" >
            <h2 className="header-title"> Cocktail receipes you love, right here.</h2> <br/>
            <p className="header-text fontsize-18 fontwidth-3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <SearchForm type="text" placeholder="Search for a Cocktail..."/> <br/>
          </div>
      </header>

    </div>
  )
}

export default Header